import { Exercise } from "@/types/exercise";

export const pushExercises: Exercise[] = [
  {
    id: "bench-press",
    name: "Barbell Bench Press",
    image: "/images/exercises/bench-press.jpg",
    video: "/videos/exercises/bench-press.mp4",
    equipment: ["Barbell", "Bench"],
    muscles: [
      { name: "Chest", image: "/images/muscles/chest.png" },
      { name: "Triceps", image: "/images/muscles/triceps.png" },
      { name: "Shoulders", image: "/images/muscles/shoulders.png" },
    ],
    steps: [
      "Lie flat on the bench with feet on the ground.",
      "Grip the bar slightly wider than shoulder-width.",
      "Lower the bar to your chest under control.",
      "Push the bar upward until arms are fully extended.",
    ],
  },
  {
    id: "shoulder-press",
    name: "Overhead Shoulder Press",
    image: "/images/exercises/shoulder-press.jpg",
    equipment: ["Dumbbells / Barbell"],
    muscles: [
      { name: "Shoulders", image: "/images/muscles/shoulders.png" },
      { name: "Triceps", image: "/images/muscles/triceps.png" },
    ],
    steps: [
      "Hold dumbbells at shoulder height.",
      "Press upward until arms are straight.",
      "Lower slowly to the start position.",
    ],
  },
  // ... add 5-6 more
];
