"use client";
import { useState } from "react";

// Import datasets
import { pushExercises } from "../../data/exercises/pushExercises";
import { legsExercises } from "../../data/exercises/legsExercises";
import { pullExercises } from "../../data/exercises/pullExercises";
import { fullBodyExercises } from "../../data/exercises/fullBodyExercises";
import { gymBasedExercises } from "../../data/exercises/gymExercises";
import { homeBasedExercises } from "../../data/exercises/homeExercises";
import { cutBasedExercises } from "../../data/exercises/cutExercises";
import { bulkBasedExercises } from "../../data/exercises/bulkExercises";
import { strengthBasedExercises } from "../../data/exercises/strengthExercises";
import { calisthenicsExercises } from "../../data/exercises/calisthenicsExercises";
const allCalisthenics = [
  ...calisthenicsExercises.beginner,
  ...calisthenicsExercises.intermediate,
  ...calisthenicsExercises.advanced,
  ...calisthenicsExercises.stretching,
];
// ...
const categories = [
  { title: "Push (Daywise)", key: "push", data: pushExercises },
  { title: "Pull (Daywise)", key: "pull", data: pullExercises },
  { title: "Leg Day", key: "legs", data: legsExercises },
  { title: "Full Body", key: "fullbody", data: fullBodyExercises },
  { title: "Gym Based", key: "gym", data: gymBasedExercises },
  { title: "At Home (No Equipment)", key: "home", data: homeBasedExercises },
  { title: "Cut Training", key: "cut", data: cutBasedExercises },
  { title: "Bulk Training", key: "bulk", data: bulkBasedExercises },
  { title: "Strength Training", key: "strength", data: strengthBasedExercises },
  { title: "Calisthenics", key: "calisthenics", data: allCalisthenics },
];

export default function ExercisePage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">Exercises</h1>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="flex gap-4 overflow-x-auto sm:flex-wrap sm:justify-center scrollbar-hide pb-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition 
                ${
                  activeCategory.key === cat.key
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Exercises */}
      <div className="space-y-12">
        {activeCategory.data.map((exercise: any) => (
          <div
            key={exercise.id}
            className="p-6 bg-white rounded-2xl shadow-lg space-y-6"
          >
            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-800">{exercise.name}</h2>

            {/* Image/Video */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {exercise.video ? (
                <video
                  controls
                  className="rounded-lg shadow-md w-full md:w-1/2"
                  src={exercise.video}
                />
              ) : (
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="rounded-lg shadow-md w-full md:w-1/2"
                />
              )}

              {/* Muscles Focused */}
              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-medium mb-2">Muscles Focused</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exercise.muscles.map((muscle: any, i: number) => (
                    <li key={i}>
                      {muscle.name}
                      {muscle.image && (
                        <img
                          src={muscle.image}
                          alt={muscle.name}
                          className="mt-1 w-24 rounded-md shadow"
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Equipment */}
            {exercise.equipment && (
              <div>
                <h3 className="text-lg font-medium mb-2">Equipment Needed</h3>
                <p className="text-gray-700">{exercise.equipment}</p>
              </div>
            )}

            {/* Steps */}
            <div>
              <h3 className="text-lg font-medium mb-2">Steps</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {exercise.steps.map((step: string, i: number) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
