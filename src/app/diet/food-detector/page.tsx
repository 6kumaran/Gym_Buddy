  // src/app/diet/food-detector/page.tsx
  "use client";
  import React, { useState } from "react";

  type Macros = { kcal: number; protein: number; carbs: number; fat: number } | null;

  export default function FoodDetectorPage() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [username, setUsername] = useState<string>(() => typeof window !== "undefined" ? localStorage.getItem("fitlife_user") || "" : "");
    const [loading, setLoading] = useState(false);
    const [food, setFood] = useState<string | null>(null);
    const [macros, setMacros] = useState<Macros>(null);
    const [serving, setServing] = useState<number>(100);
    const [message, setMessage] = useState<string | null>(null);

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
      const f = e.target.files?.[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setImageSrc(dataUrl);
        const base64 = dataUrl.split(",")[1];
        sendToServer(base64);
      };
      reader.readAsDataURL(f);
    }

    async function sendToServer(base64: string) {
      setLoading(true);
      setMessage(null);
      setFood(null);
      setMacros(null);
      try {
        const res = await fetch("/api/food", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: base64, username: username || "guest" }),
        });
        const json = await res.json();
        if (!res.ok) {
          setMessage(json?.error || "Server error");
        } else if (json.success) {
          setFood(json.food || json.product_name || null);
          setMacros(json.macros ?? null);
          if (!json.macros) setMessage(json.message || "No nutrition found");
        } else {
          setMessage(json.error || json.message || "Unknown error");
        }
      } catch (err) {
        setMessage(String(err));
      } finally {
        setLoading(false);
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
      <main className="min-h-screen p-6 text-white text-center" style={{ padding: 20 }}>
        <h1 className="text-2xl font-bold pt-20">Food Detector (Gemini + OpenFoodFacts)</h1>

        <div style={{ marginBottom: 10 }}>
          <label>
            Username:{" "}
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (typeof window !== "undefined") localStorage.setItem("fitlife_user", e.target.value);
              }}
              placeholder="guest"
            />
          </label>
        </div>

        <div>
          <input type="file" accept="image/*" className="px-4 py-2 rounded-xl bg-blue-600" onChange={handleFile} />
        </div>

        {imageSrc && <img src={imageSrc} alt="preview" className="text-center w-max m-auto py-4 justify-center display-block"/>}

        {loading && <div style={{ marginTop: 12 }} className="text-center">Processing image — please wait...</div>}

        {message && <div style={{ marginTop: 12, color: "crimson" }} className="text-center">{message}</div>}

        {food && (
          <div style={{ marginTop: 16, border: "1px solid #ddd" }} className="text-center w-max m-auto p-4 rounded-lg bg-gray-800">
            <div><strong>Detected:</strong> {food}</div>

            <div style={{ marginTop: 8 }}>
              <label>
                Serving (g):{" "}
                <input type="number" value={serving} onChange={(e) => setServing(Number(e.target.value))} min={1} />
              </label>
            </div>

            <div style={{ marginTop: 8 }}>
              <strong>Estimated nutrition for {serving} g:</strong>
              {macros ? (
                <ul>
                  <li>Calories: {scaled(macros)?.kcal} kcal</li>
                  <li>Protein: {scaled(macros)?.protein} g</li>
                  <li>Carbs: {scaled(macros)?.carbs} g</li>
                  <li>Fat: {scaled(macros)?.fat} g</li>
                </ul>
              ) : (
                <div>Nutrition not found on OpenFoodFacts.</div>
              )}
            </div>
          </div>
        )}
      </main>
    );
  }
