"use client"
import { useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import { dietCategories } from "@/data/dietData";
import DietCard from "@/components/DietCard";

export default function DietPage() {
  const [activeCategory, setActiveCategory] = useState(dietCategories[0]);

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-10">
        <h1 className="text-3xl font-bold text-center pt-15">Diet Plans</h1>

        {/* Responsive Tabs */}
        <div className="flex justify-center">
          <div className="flex gap-4 overflow-x-auto sm:flex-wrap sm:justify-center scrollbar-hide pb-2">
            {dietCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition 
                  ${
                    activeCategory.title === cat.title
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{activeCategory.title}</h2>
          <p className="text-gray-600">{activeCategory.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {activeCategory.items.map((item) => (
              <DietCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

