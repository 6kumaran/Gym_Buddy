import { NextResponse } from "next/server";
import {
  GoogleGenerativeAI,
  Schema,
  SchemaType,
} from "@google/generative-ai";
import { createSupabaseServerClient } from "../../../../lib/supabaseServer";
import { createSupabaseAdminClient } from "../../../../lib/supabaseAdmin";

export async function POST(request: Request) {
  let usageReserved = false;
  let userId: string | null = null;

  try {
    const supabase = await createSupabaseServerClient();

    // ============================================================
    // 1. Authenticate user
    // ============================================================

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }
    userId = user.id;

    // ============================================================
    // 2. Read request
    // ============================================================

    let body: { imageBase64?: unknown };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request body.",
        },
        { status: 400 }
      );
    }

    const imageBase64 = body?.imageBase64;

    if (!imageBase64) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing imageBase64",
        },
        { status: 400 }
      );
    }

    const MAX_BASE64_SIZE = 4 * 1024 * 1024; // 4 MB

    if (
      typeof imageBase64 !== "string" ||
      imageBase64.length > MAX_BASE64_SIZE
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Image payload is too large.",
        },
        { status: 413 }
      );
    }

    // ============================================================
    // 3. Validate Gemini configuration
    // ============================================================

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Food analysis service is not configured.",
        },
        { status: 500 }
      );
    }

    // ============================================================
    // 4. Atomically reserve one daily analysis
    // ============================================================

    const { data: usageAllowed, error: usageError } = await supabase.rpc(
      "try_use_food_analysis"
    );

    if (usageError) {
      console.error("Food usage check failed:", usageError);

      return NextResponse.json(
        {
          success: false,
          error: "Unable to verify daily usage limit.",
        },
        { status: 500 }
      );
    }

    if (!usageAllowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Daily limit reached (10/day)",
        },
        { status: 429 }
      );
    }

    usageReserved = true;

    // ============================================================
    // 5. Gemini configuration
    // ============================================================

    const genAI = new GoogleGenerativeAI(apiKey);

    const nutritionSchema: Schema = {
      type: SchemaType.OBJECT,

      properties: {
        food: {
          type: SchemaType.STRING,
          description:
            "The most likely primary food item in the image. Use a concise, natural food name.",
        },

        confidence: {
          type: SchemaType.NUMBER,
          description:
            "Confidence that the identified food is correct, from 0 to 1.",
        },

        serving_basis_g: {
          type: SchemaType.NUMBER,
          description:
            "The gram basis used for the nutrition estimate. This should normally be 100 grams.",
        },

        nutrition: {
          type: SchemaType.OBJECT,

          properties: {
            calories_kcal: {
              type: SchemaType.NUMBER,
              description:
                "Estimated calories in kcal for the serving basis.",
            },

            protein_g: {
              type: SchemaType.NUMBER,
              description:
                "Estimated protein in grams for the serving basis.",
            },

            carbohydrates_g: {
              type: SchemaType.NUMBER,
              description:
                "Estimated carbohydrates in grams for the serving basis.",
            },

            fat_g: {
              type: SchemaType.NUMBER,
              description:
                "Estimated fat in grams for the serving basis.",
            },
          },

          required: [
            "calories_kcal",
            "protein_g",
            "carbohydrates_g",
            "fat_g",
          ],
        },
      },

      required: [
        "food",
        "confidence",
        "serving_basis_g",
        "nutrition",
      ],
    };

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",

      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: nutritionSchema,
      },
    });

    // ============================================================
    // 6. Gemini prompt
    // ============================================================

    const prompt = `
Analyze the food shown in this image for the FitLife food detector.

Your tasks:

1. Identify the primary food or dish shown in the image.
2. Give the most specific food or dish name that can be reasonably determined from the visible appearance, ingredients, and preparation style.
3. Estimate its nutritional values.
4. Return the nutrition values for exactly 100 grams.
5. Estimate:
   - calories
   - protein
   - carbohydrates
   - fat
6. Provide a confidence score between 0 and 1 for the food identification.

Important food identification rules:

- Prefer a specific dish or recipe name over a broad food category when the image provides enough visual evidence.
- For example:
  - Identify "Dal Tadka" instead of "Dal" when the visible preparation supports Dal Tadka.
  - Identify "Paneer Bhurji" instead of "Paneer" when the image shows Paneer Bhurji.
  - Identify "Aloo Paratha" instead of "Paratha" when the image supports that identification.
  - Identify "Masala Dosa" instead of "Dosa" when the image supports that identification.
  - Identify "Chicken Curry" instead of simply "Chicken" when the dish is clearly a curry.
- Do not use a more specific dish name merely by guessing.
- If the image does not provide enough evidence to distinguish between similar dishes, use the most appropriate broader name and lower the confidence score.
- Consider visible ingredients, texture, color, cooking style, garnishes, sauces, and presentation.
- If multiple foods are visible, identify the dominant/main dish rather than a minor ingredient or garnish.

Important nutrition rules:

- These are ESTIMATED nutritional values, not laboratory measurements.
- Estimate nutrition based on the identified dish and its typical preparation.
- The nutrition estimate must be consistent with the identified dish.
- Consider visible ingredients and the likely preparation method.
- Do not invent extreme or unrealistic nutritional values.
- Return nutrition values for exactly 100 grams of the identified food.
- If the food identification is uncertain, reflect that uncertainty through the confidence score.

Output rules:

- Do not include Markdown.
- Do not include explanations outside the requested fields.
- Return only the structured JSON requested by the response schema.
`;

    // ============================================================
    // 7. Call Gemini
    // ============================================================

    let responseText: string;

    try {
      const result = await model.generateContent([
        { text: prompt },
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: imageBase64,
          },
        },
      ]);
    
      responseText = result.response.text().trim();
    } catch (geminiError) {
      console.error("Gemini food analysis failed:", geminiError);
    
      const adminSupabase = createSupabaseAdminClient();

await adminSupabase.rpc("release_food_analysis", {
  p_user_id: userId,
});
      usageReserved = false;
    
      return NextResponse.json(
        {
          success: false,
          error: "Food analysis service is temporarily unavailable.",
        },
        { status: 502 }
      );
    }

    if (!responseText) {
      const adminSupabase = createSupabaseAdminClient();

await adminSupabase.rpc("release_food_analysis", {
  p_user_id: userId,
});
      usageReserved = false;

      return NextResponse.json({
        success: true,
        food: null,
        macros: null,
        message: "No food could be detected.",
      });
    }

    // ============================================================
    // 8. Parse Gemini response
    // ============================================================

    let analysis: {
      food: string;
      confidence: number;
      serving_basis_g: number;

      nutrition: {
        calories_kcal: number;
        protein_g: number;
        carbohydrates_g: number;
        fat_g: number;
      };
    };

    try {
      analysis = JSON.parse(responseText);
    } catch (parseError) {
      console.error(
        "Gemini returned invalid JSON:",
        parseError
      );

      const adminSupabase = createSupabaseAdminClient();

await adminSupabase.rpc("release_food_analysis", {
  p_user_id: userId,
});
      usageReserved = false;

      return NextResponse.json(
        {
          success: false,
          error: "Food analysis returned an invalid response.",
        },
        { status: 502 }
      );
    }

    // ============================================================
    // 9. Validate Gemini result
    // ============================================================

    if (
  !analysis.food ||
  typeof analysis.food !== "string" ||
  !analysis.food.trim() ||
  !analysis.nutrition
) {
      const adminSupabase = createSupabaseAdminClient();

await adminSupabase.rpc("release_food_analysis", {
  p_user_id: userId,
});
      usageReserved = false;

      return NextResponse.json(
        {
          success: false,
          error: "Incomplete food analysis returned by Gemini.",
        },
        { status: 502 }
      );
    }

    const confidence = Number(analysis.confidence);
    const servingBasis = Number(analysis.serving_basis_g);

    const calories = Number(
      analysis.nutrition.calories_kcal
    );

    const protein = Number(
      analysis.nutrition.protein_g
    );

    const carbohydrates = Number(
      analysis.nutrition.carbohydrates_g
    );

    const fat = Number(
      analysis.nutrition.fat_g
    );

    if (
      !Number.isFinite(confidence) ||
      !Number.isFinite(servingBasis) ||
      !Number.isFinite(calories) ||
      !Number.isFinite(protein) ||
      !Number.isFinite(carbohydrates) ||
      !Number.isFinite(fat)
    ) {
      const adminSupabase = createSupabaseAdminClient();

await adminSupabase.rpc("release_food_analysis", {
  p_user_id: userId,
});
      usageReserved = false;

      return NextResponse.json(
        {
          success: false,
          error: "Gemini returned invalid nutritional values.",
        },
        { status: 502 }
      );
    }

    // ============================================================
    // 10. Validate serving basis
    // ============================================================

    if (servingBasis !== 100) {
      const adminSupabase = createSupabaseAdminClient();

await adminSupabase.rpc("release_food_analysis", {
  p_user_id: userId,
});
      usageReserved = false;

      return NextResponse.json(
        {
          success: false,
          error: "Nutrition estimate was not provided for 100 grams.",
        },
        { status: 502 }
      );
    }

    // ============================================================
    // 11. Validate nutrition values
    // ============================================================

    if (
      calories < 0 ||
      protein < 0 ||
      carbohydrates < 0 ||
      fat < 0
    ) {
      const adminSupabase = createSupabaseAdminClient();

await adminSupabase.rpc("release_food_analysis", {
  p_user_id: userId,
});
      usageReserved = false;

      return NextResponse.json(
        {
          success: false,
          error: "Gemini returned invalid nutritional values.",
        },
        { status: 502 }
      );
    }

    const macros = {
      kcal: calories,
      protein,
      carbs: carbohydrates,
      fat,
    };

    // ============================================================
    // 12. Successful analysis
    // ============================================================

    usageReserved = false;

    return NextResponse.json({
      success: true,

      food: analysis.food.trim(),

      macros,

      serving_basis_g: servingBasis,

      confidence: Math.max(
        0,
        Math.min(1, confidence)
      ),

      nutrition_source: "gemini_estimate",
    });

  } catch (err) {
    console.error("/api/food error:", err);

    // ============================================================
    // 13. Release reserved quota if request failed
    // ============================================================

    if (usageReserved && userId) {
  try {

    const adminSupabase = createSupabaseAdminClient();

    await adminSupabase.rpc("release_food_analysis", {
      p_user_id: userId,
    });
      } catch (releaseError) {
        console.error(
          "Failed to release food analysis usage:",
          releaseError
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: "Food analysis failed. Please try again.",
      },
      { status: 500 }
    );
  }
}