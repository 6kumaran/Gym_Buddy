// data/exercises/homeBased.js

import { image } from "framer-motion/client";

export const homeBasedExercises = [
  {
    id: "home1",
    name: "Push-Ups",
    equipment: "None",
    muscles: [{ name: "Chest", image: "/images/muscles/chest.png" }, { name: "Triceps", image: "/images/muscles/triceps.png" }, { name: "Shoulders", image: "/images/muscles/shoulders.png" }, { name: "Core", image: "/images/muscles/core.png" }],
    image: "/images/exercises/home/pushups.png",
    video: "/videos/exercises/home/pushups.mp4",
    steps: [
      "Start in a high plank with hands under shoulders.",
      "Lower chest toward the floor while keeping elbows tucked.",
      "Push back up to starting position.",
      "Maintain a straight line from head to heels."
    ],
  },
  {
    id: "home2",
    name: "Squats",
    equipment: "None",
    muscles: [{ name: "Quads", image: "/images/muscles/quads.png" }, { name: "Glutes", image: "/images/muscles/glutes.png" }, { name: "Hamstrings", image: "/images/muscles/hamstrings.png" }],
    image: "/images/exercises/home/squats.png",
    video: "/videos/exercises/home/squats.mp4",
    steps: [
      "Stand with feet shoulder-width apart.",
      "Lower hips back and down as if sitting on a chair.",
      "Keep chest lifted and knees behind toes.",
      "Return to standing position."
    ],
  },
  {
    id: "home3",
    name: "Plank",
    equipment: "None",
    muscles: [{ name: "Core", image: "/images/muscles/core.png" }, { name: "Shoulders", image: "/images/muscles/shoulders.png" }, { name: "Back", image: "/images/muscles/back.png" }],
    image: "/images/exercises/home/plank.png",
    video: "/videos/exercises/home/plank.mp4",
    steps: [
      "Start on elbows and toes with body in a straight line.",
      "Keep core tight and avoid sagging hips.",
      "Hold for the desired time.",
    ],
  },
  {
    id: "home4",
    name: "Lunges",
    equipment: "None",
    muscles: [{ name: "Quads", image: "/images/muscles/quads.png" }, { name: "Glutes", image: "/images/muscles/glutes.png" }, { name: "Hamstrings", image: "/images/muscles/hamstrings.png" }],
    image: "/images/exercises/home/lunges.png",
    video: "/videos/exercises/home/lunges.mp4",
    steps: [
      "Step forward with one leg, lowering hips until both knees bend at 90°.",
      "Keep torso upright and front knee over ankle.",
      "Push back to starting position.",
      "Alternate legs."
    ],
  },
  {
    id: "home5",
    name: "Glute Bridges",
    equipment: "None",
    muscles: [{ name: "Glutes", image: "/images/muscles/glutes.png" }, { name: "Hamstrings", image: "/images/muscles/hamstrings.png" }, { name: "Lower Back", image: "/images/muscles/lowerback.png" }],
    image: "/images/exercises/home/glutebridges.png",
    video: "/videos/exercises/home/glutebridges.mp4",
    steps: [
      "Lie on your back with knees bent and feet flat.",
      "Press through heels to lift hips upward.",
      "Squeeze glutes at the top.",
      "Lower slowly back to ground."
    ],
  },
  {
    id: "home6",
    name: "Mountain Climbers",
    equipment: "None",
    muscles: [{ name: "Core", image: "/images/muscles/core.png" }, { name: "Shoulders", image: "/images/muscles/shoulders.png" }, { name: "Legs", image: "/images/muscles/legs.png" }],
    image: "/images/exercises/home/mountainclimbers.png",
    video: "/videos/exercises/home/mountainclimbers.mp4",
    steps: [
      "Start in a plank position.",
      "Drive one knee toward chest, then quickly switch legs.",
      "Keep core tight and maintain fast rhythm."
    ],
  },
  {
    id: "home7",
    name: "Superman",
    equipment: "None",
    muscles: [{ name: "Lower Back", image: "/images/muscles/lowerback.png" }, { name: "Glutes", image: "/images/muscles/glutes.png" }, { name: "Hamstrings", image: "/images/muscles/hamstrings.png" }],
    image: "/images/exercises/home/superman.png",
    video: "/videos/exercises/home/superman.mp4",
    steps: [
      "Lie face down with arms extended overhead.",
      "Simultaneously lift arms, chest, and legs off ground.",
      "Hold for 2–3 seconds, then lower back down."
    ],
  },
  {
    id: "home8",
    name: "Wall Sit",
    equipment: "None",
    muscles: [{ name: "Quads", image: "/images/muscles/quads.png" }, { name: "Glutes", image: "/images/muscles/glutes.png" }, { name: "Core", image: "/images/muscles/core.png" }],
    image: "/images/exercises/home/wallsit.png",
    video: "/videos/exercises/home/wallsit.mp4",
    steps: [
      "Stand with back against wall and slide down into a squat.",
      "Keep thighs parallel to floor and knees at 90°.",
      "Hold for the desired time without moving."
    ],
  },
];

