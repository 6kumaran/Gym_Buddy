import { Card, CardContent } from "@/components/ui/card";
import { DietItem } from "@/data/dietData";

export default function DietCard({ item }: { item: DietItem }) {
  return (
    <Card className="max-w-md shadow-lg rounded-2xl overflow-hidden">
      {/* Image with no gap */}
      <div className="w-full h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      {/* Remove unnecessary gap */}
      <CardContent className="p-3 pt-2">
        <h2 className="text-lg font-semibold">{item.name}</h2>

        {/* Nutrients */}
        <div className="mt-1 text-sm">
          <p>Calories: {item.nutrients.calories} kcal</p>
          <p>Protein: {item.nutrients.protein} g</p>
          <p>Carbs: {item.nutrients.carbs} g</p>
          <p>Fat: {item.nutrients.fat} g</p>
        </div>

        {/* Ingredients */}
        <div className="mt-2">
          <h3 className="font-medium">Ingredients:</h3>
          <ul className="list-disc list-inside text-sm">
            {item.ingredients.map((ing: string, i: number) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>

        {/* Recipe */}
        <div className="mt-2">
          <h3 className="font-medium">Recipe:</h3>
          <p className="text-sm">{item.recipe}</p>
        </div>
      </CardContent>
    </Card>
  );
}
