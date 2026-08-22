  // src/app/diet/food-detector/page.tsx
  "use client";
  import React, { useState } from "react";
import ProtectedRoute from "../../../../components/ProtectedRoute";

  type Macros = { kcal: number; protein: number; carbs: number; fat: number } | null;
  

  export default function FoodDetectorPage() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [food, setFood] = useState<string | null>(null);
    const [macros, setMacros] = useState<Macros>(null);
    const [serving, setServing] = useState<number>(100);
    const [message, setMessage] = useState<string | null>(null);
    type FoodAnalysis = {
  confidence: number;
  serving_basis_g: number;
  };
  const [confidence, setConfidence] = useState<number | null>(null);

    async function compressImage(file: File): Promise<{
      dataUrl: string;
      base64: string;
    }> {
      const MAX_DIMENSION = 1600;
      const MAX_OUTPUT_SIZE = 2.5 * 1024 * 1024; // 2.5 MB
      const INITIAL_QUALITY = 0.82;
    
      const objectUrl = URL.createObjectURL(file);
    
      try {
        const image = new Image();
      
        await new Promise<void>((resolve, reject) => {
          image.onload = () => resolve();
          image.onerror = () => reject(new Error("Unable to read this image."));
          image.src = objectUrl;
        });
      
        let width = image.naturalWidth;
        let height = image.naturalHeight;
      
        if (!width || !height) {
          throw new Error("Invalid image dimensions.");
        }
      
        const scale = Math.min(
          1,
          MAX_DIMENSION / Math.max(width, height)
        );
      
        width = Math.round(width * scale);
        height = Math.round(height * scale);
      
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
      
        const ctx = canvas.getContext("2d");
      
        if (!ctx) {
          throw new Error("Unable to process image.");
        }
      
        ctx.drawImage(image, 0, 0, width, height);
      
        let quality = INITIAL_QUALITY;
        let blob: Blob | null = null;
      
        while (quality >= 0.55) {
          blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, "image/jpeg", quality)
          );
        
          if (!blob) {
            throw new Error("Unable to compress image.");
          }
        
          if (blob.size <= MAX_OUTPUT_SIZE) {
            break;
          }
        
          quality -= 0.07;
        }
      
        if (!blob) {
          throw new Error("Unable to compress image.");
        }
      
        if (blob.size > MAX_OUTPUT_SIZE) {
          throw new Error(
            "Image is too large to process. Please choose a smaller image."
          );
        }
      
        const compressedDataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
        
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () =>
            reject(new Error("Unable to prepare image for upload."));
        
          reader.readAsDataURL(blob!);
        });
      
        const base64 = compressedDataUrl.split(",")[1];
      
        if (!base64) {
          throw new Error("Invalid processed image.");
        }
      
        console.log("Original file:", file.name);
        console.log(
          "Original size:",
          Math.round(file.size / 1024),
          "KB"
        );
        console.log(
          "Processed size:",
          Math.round(blob.size / 1024),
          "KB"
        );
        console.log("Processed dimensions:", width, "x", height);
        console.log("Processed MIME type:", blob.type);
      
        return {
          dataUrl: compressedDataUrl,
          base64,
        };
      } finally {
        URL.revokeObjectURL(objectUrl);
      }
    }

    async function handleFile(
      e: React.ChangeEvent<HTMLInputElement>
    ) {
      const file = e.target.files?.[0];
    
      if (!file) return;
    
      setMessage(null);
      setFood(null);
      setMacros(null);
      setConfidence(null);
      setLoading(true);
    
      try {
        if (!file.type.startsWith("image/")) {
          throw new Error("Please select a valid image file.");
        }
      
        const MAX_INPUT_SIZE = 15 * 1024 * 1024; // 15 MB
      
        if (file.size > MAX_INPUT_SIZE) {
          throw new Error(
            "Image is too large. Please choose an image smaller than 15 MB."
          );
        }
      
        const { dataUrl, base64 } = await compressImage(file);
      
        setImageSrc(dataUrl);
      
        await sendToServer(base64);
      } catch (error) {
        console.error("Image processing error:", error);
      
        setMessage(
          error instanceof Error
            ? error.message
            : "Unable to process this image."
        );
      } finally {
        setLoading(false);
      }
    }

    async function sendToServer(base64: string) {
      setMessage(null);
      setFood(null);
      setMacros(null);
      setConfidence(null);
      try {
        console.log("Image Base64 size:", base64.length);
        console.log(
          "Approx image size:",
          Math.round((base64.length * 3) / 4 / 1024),
          "KB"
        );
        const res = await fetch("/api/food", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imageBase64: base64,
          }),
        });
        
        const responseText = await res.text();
        
        let json: {
  success?: boolean;
  food?: string | null;
  macros?: Macros;
  confidence?: number;
  serving_basis_g?: number;
  message?: string;
  error?: string;
} = {};
        
        try {
          json = responseText
            ? JSON.parse(responseText)
            : {};
        } catch {
          console.error(
            "API returned non-JSON response:",
            responseText
          );
        
          setMessage(
            `Server error (${res.status}). ${
              responseText.slice(0, 150) || "Unexpected response."
            }`
          );
        
          return;
        }
        
        if (!res.ok) {
          setMessage(
            json?.error ||
              json?.message ||
              `Server error (${res.status})`
          );
          return;
        }
        
        if (json.success) {
  setFood(json.food || null);
  setMacros(json.macros ?? null);
  setConfidence(
    typeof json.confidence === "number"
      ? json.confidence
      : null
  );

  if (!json.macros) {
    setMessage(
      json.message || "Nutrition estimate unavailable."
    );
  }
} else {
          setMessage(
            json.error ||
              json.message ||
              "Unknown server error."
          );
        }
      } catch (err) {
        setMessage(String(err));
      } 
    }

    function scaled(m: Macros) {
      if (!m) return null;
      const r = serving / 100;
      return {
        kcal: +(m.kcal * r).toFixed(1),
        protein: +(m.protein * r).toFixed(1),
        carbs: +(m.carbs * r).toFixed(1),
        fat: +(m.fat * r).toFixed(1),
      };
    }

    return (
      <ProtectedRoute>
      <main className="min-h-screen p-6 text-white text-center justify-center items-center" style={{ padding: 20 }}>
        <h1 className="text-2xl font-bold pt-20">
  Food Detector (Gemini AI)
</h1>


        <div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {/* Take Photo - mobile */}
            <label className="sm:hidden cursor-pointer px-5 py-2 rounded-full bg-gradient-to-r from-orange-300 to-pink-500 text-white">
              📷 Take Photo
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFile}
                className="hidden"
              />
            </label>
              
            {/* Choose Image - all devices */}
            <label className="cursor-pointer px-5 py-2 rounded-full bg-gradient-to-r from-orange-300 to-pink-500 text-white">
              🖼️ Choose Image
              <input
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {imageSrc && <img src={imageSrc} alt="preview" className="text-center w-max m-auto py-4 justify-center display-block"/>}

        {loading && <div style={{ marginTop: 12 }} className="text-center">Processing image — please wait...</div>}

        {message && <div style={{ marginTop: 12, color: "crimson" }} className="text-center">{message}</div>}

        {food && (
          <div style={{ marginTop: 16, border: "1px solid #ddd" }} className="text-center w-max m-auto p-4 rounded-lg bg-white/10 backdrop-blur-md
                 border border-white/20
                 shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                 text-white">
            <div><strong>Detected:</strong> {food}</div>

            <div className="mt-8 text-center text-lg">
              <label>
                Serving (g):{" "}
                <input type="number" className="text-center border rounded-xl" value={serving} onChange={(e) => setServing(Number(e.target.value))} min={1} />
              </label>
            </div>

            <div className="mt-8 text-center text-lg">
              <strong>Estimated nutrition for {serving} g:</strong>
              {macros ? (
                <>
                {confidence !== null && (
  <div className="text-sm mt-2 opacity-80">
    AI confidence: {Math.round(confidence * 100)}%
  </div>
  )}
                <ul>
                  <li>Calories: {scaled(macros)?.kcal} kcal</li>
                  <li>Protein: {scaled(macros)?.protein} g</li>
                  <li>Carbs: {scaled(macros)?.carbs} g</li>
                  <li>Fat: {scaled(macros)?.fat} g</li>
                </ul>
                </>
              ) : (
                <div>Nutrition estimate unavailable.</div>
              )}
            </div>
          </div>
        )}
      </main>
      </ProtectedRoute>
    );
  }
