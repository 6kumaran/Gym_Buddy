import { Card, CardContent } from "@/components/ui/card";
import { DietItem } from "@/data/dietData";
import Image from "next/image";

export default function DietCard({ item }: { item: DietItem }) {
  return (
    <Card
      className="max-w-md rounded-2xl overflow-hidden 
                 bg-white/10 backdrop-blur-md 
                 border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                 text-white p-0 transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Image */}
      <div className="w-full h-48">
        <Image
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-t-2xl"
          width={400}
          height={192}
        />
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">{item.name}</h2>

        <div className="mt-1 text-sm">
          <p>Calories: {item.nutrients.calories} kcal</p>
          <p>Protein: {item.nutrients.protein} g</p>
          <p>Carbs: {item.nutrients.carbs} g</p>
          <p>Fats: {item.nutrients.fats} g</p>
        </div>

        <div className="mt-2">
          <h3 className="font-medium">Ingredients:</h3>
          <ul className="list-disc list-inside text-sm space-y-0.5">
            {item.ingredients.map((ing: string, i: number) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>

        <div className="mt-2">
          <h3 className="font-medium">Recipe:</h3>
          <p className="text-sm">{item.recipe}</p>
        </div>
      </CardContent>
    </Card>
  );
}
