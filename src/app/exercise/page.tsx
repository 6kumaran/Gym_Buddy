"use client";
import React, { useState, useEffect } from "react";

// datasets
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

const categories = [
  { title: "Push", key: "push", data: pushExercises },
  { title: "Pull", key: "pull", data: pullExercises },
  { title: "Leg Day", key: "legs", data: legsExercises },
  { title: "Full Body", key: "fullbody", data: fullBodyExercises },
  { title: "Gym Based", key: "gym", data: gymBasedExercises },
  { title: "At Home", key: "home", data: homeBasedExercises },
  { title: "Cut Training", key: "cut", data: cutBasedExercises },
  { title: "Bulk Training", key: "bulk", data: bulkBasedExercises },
  { title: "Strength Training", key: "strength", data: strengthBasedExercises },
  { title: "Calisthenics", key: "calisthenics", data: allCalisthenics },
];

type Muscle = { name: string; image?: string };
export interface Exercise {
  id: string;
  name: string;
  // support both top-level and media.* locations:
  image?: string;
  images?: string[]; // optional array of images
  video?: string;
  media?: { image?: string; images?: string[]; video?: string };
  equipment?: string | string[]; // be flexible
  muscles: Muscle[];
  steps: string[];
}

function ExerciseCard({ exercise }: { exercise: Exercise }) {
  // Resolve media sources from multiple possible shapes
  const videoSrc = exercise.video ?? exercise.media?.video ?? undefined;

  const images: string[] = (() => {
    if (Array.isArray(exercise.images) && exercise.images.length) return exercise.images;
    if (Array.isArray(exercise.media?.images) && exercise.media!.images!.length)
      return exercise.media!.images!;
    if (exercise.image) return [exercise.image];
    if (exercise.media?.image) return [exercise.media.image];
    return [];
  })();
 
  const [activeIndex, setActiveIndex] = useState(0);

  // reset index for new exercise
  useEffect(() => setActiveIndex(0), [exercise.id]);

  const equipmentText =
    Array.isArray(exercise.equipment) ? exercise.equipment.join(", ") : exercise.equipment ?? "None";

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">{exercise.name}</h2>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* LEFT: media (video or images) */}
        <div className="w-full md:w-1/2">
          {videoSrc ? (
        <video
      controls
      className="rounded-lg shadow-md w-full"
      src={videoSrc}
    />
  ) : images.length ? (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${exercise.name} step ${i + 1}`}
      className="rounded-lg shadow-md w-full object-cover"
      loading="lazy"
      decoding="async"
      onError={(e) =>
        ((e.currentTarget as HTMLImageElement).src = "/images/placeholder.png")
      }
    />
  ))}
</div>

  ) : (
    <div className="rounded-lg bg-gray-100 w-full h-48 flex items-center justify-center text-gray-500">
      No media available
    </div>
  )}
</div>


        {/* RIGHT: details */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-medium mb-2">Muscles Focused</h3>
          <ul className="flex flex-wrap gap-4 text-gray-700">
            {exercise.muscles.map((mus, i) => (
              <li key={i} className="flex flex-col items-center w-28">
                {mus.image ? (
                  <img
                    src={mus.image}
                    alt={mus.name}
                    className="w-24 h-16 object-cover rounded-md shadow-sm"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => (e.currentTarget as HTMLImageElement).src = "/images/muscle-placeholder.png"}
                  />
                ) : (
                  <div className="w-24 h-16 bg-gray-100 rounded-md" />
                )}
                <span className="mt-1 text-center text-sm">{mus.name}</span>
              </li>
            ))}
          </ul>

          {exercise.equipment && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-1">Equipment Needed</h3>
              <p className="text-gray-700">{equipmentText}</p>
            </div>
          )}

          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Steps</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {exercise.steps.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

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
                ${activeCategory.key === cat.key ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Exercises list */}
      <div className="space-y-12">
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {activeCategory.data.map((exercise: any) => (
          <ExerciseCard key={exercise.id} exercise={exercise as Exercise} />
        ))}
      </div>
    </div>
  );
}
