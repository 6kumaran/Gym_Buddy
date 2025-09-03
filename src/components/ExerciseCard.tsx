"use client";
import { Exercise } from "@/types/exercise";
import Image from "next/image";

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition">
      {exercise.image && (
        <Image
          src={exercise.image}
          alt={exercise.name}
          width={400}
          height={300}
          className="rounded-lg object-cover"
        />
      )}
      <h3 className="text-lg font-semibold mt-3">{exercise.name}</h3>

      <p className="text-sm text-gray-500 mt-1">
        Equipment: {exercise.equipment.join(", ")}
      </p>

      <div className="flex gap-2 mt-2">
        {exercise.muscles.map((m) => (
          <div key={m.name} className="flex items-center gap-1 text-xs">
            {m.image && (
              <Image
                src={m.image}
                alt={m.name}
                width={30}
                height={30}
                className="rounded-full"
              />
            )}
            {m.name}
          </div>
        ))}
      </div>
    </div>
  );
}
