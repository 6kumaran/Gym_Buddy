import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const DATA_DIR = path.join(process.cwd(), "data");
const USAGE_PATH = path.join(DATA_DIR, "usage.json");
const LIMIT = 6;

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(USAGE_PATH)) fs.writeFileSync(USAGE_PATH, JSON.stringify({}, null, 2), "utf8");
}
function readJson(file: string) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8") || "{}");
  } catch {
    return {};
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function writeJson(file: string, data: any) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
}

export async function POST(request: Request) {
  try {
    ensureDataDir();

    const body = await request.json();
    const imageBase64 = body?.imageBase64;
    const username =
      typeof body?.username === "string" && body.username.trim()
        ? body.username.trim()
        : "guest";

    if (!imageBase64)
      return NextResponse.json({ success: false, error: "Missing imageBase64" }, { status: 400 });

    // usage limit
    const usage = readJson(USAGE_PATH);
    const today = new Date().toISOString().slice(0, 10);
    usage[username] = usage[username] || { date: today, count: 0 };
    if (usage[username].date !== today) usage[username] = { date: today, count: 0 };
    if (usage[username].count >= LIMIT)
      return NextResponse.json(
        { success: false, error: `Daily limit reached (${LIMIT}/day)` },
        { status: 429 }
      );
    usage[username].count++;
    writeJson(USAGE_PATH, usage);

    // === Gemini 2.5 Flash call ===
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey)
      return NextResponse.json({ success: false, error: "Missing GOOGLE_API_KEY" }, { status: 500 });

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Identify the food item in this image and give its most likely name in one or two words. 
If multiple foods are present, choose the most dominant one.`;

    const result = await model.generateContent([
      { text: prompt },
      { inlineData: { mimeType: "image/jpeg", data: imageBase64 } },
    ]);

    const foodName = result.response.text().trim();

    if (!foodName)
      return NextResponse.json({ success: true, food: null, message: "No food detected" });

    // === Query OpenFoodFacts ===
    const offUrl = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
      foodName
    )}&search_simple=1&action=process&json=1&page_size=3`;

    const offResp = await fetch(offUrl);
    const offJson = await offResp.json();

    if (!offJson?.products || offJson.products.length === 0) {
      return NextResponse.json({
        success: true,
        food: foodName,
        macros: null,
        message: "No nutrition found on OpenFoodFacts",
      });
    }

    const product = offJson.products[0];
    const n = product.nutriments || {};
    const macros = {
      kcal: n["energy-kcal_100g"] ?? n["energy-kcal"] ?? 0,
      protein: n["proteins_100g"] ?? 0,
      carbs: n["carbohydrates_100g"] ?? 0,
      fat: n["fat_100g"] ?? 0,
    };

    return NextResponse.json({
      success: true,
      food: foodName,
      product_name: product.product_name || product.generic_name || null,
      macros,
      source: "openfoodfacts",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("/api/food error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}


