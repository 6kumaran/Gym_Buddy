// data/exercises/homeBased.js

import { image } from "framer-motion/client";

export const homeBasedExercises = [
  {
    id: "home1",
    name: "Push-Ups",
    equipment: "None",
    muscles: [{ name: "Chest", image: "/Exercises/Muscles/Chest.jpg" }, { name: "Triceps", image: "/Exercises/Muscles/Triceps.jpg" }, { name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" }, { name: "Core", image: "/Exercises/Muscles/Core.jpg" }],
    images:["/Exercises/Push/Push_Ups_1.png", "/Exercises/Push/Push_Ups_2.png"],
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
    muscles: [{ name: "Quads", image: "/Exercises/Muscles/Quads.jpg" }, { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" }, { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" }],
    images:["/Exercises/Home/Squats.jpg"],
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
    muscles: [{ name: "Core", image: "/Exercises/Muscles/Core.jpg" }, { name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" }, { name: "Back", image: "/Exercises/Muscles/Back.jpg" }],
    images:["/Exercises/Home/Plank.jpg"],
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
    muscles: [{ name: "Quads", image: "/Exercises/Muscles/Quads.jpg" }, { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" }, { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" }],
    images:["/Exercises/Leg/Walking_Lunges_1.png", "/Exercises/Leg/Walking_Lunges_2.png", "/Exercises/Leg/Walking_Lunges_3.png", "/Exercises/Leg/Walking_Lunges_4.png"],
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
    muscles: [{ name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" }, { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" }, { name: "Lower Back", image: "/Exercises/Muscles/Back.jpg" }],
      images:["/Exercises/Home/Glutes_Bridge_1.png", "/Exercises/Home/Glutes_Bridge_2.png"],
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
    muscles: [{ name: "Core", image: "/Exercises/Muscles/Core.jpg" }, { name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" }, { name: "Legs", image: "/Exercises/Muscles/Legs.jpg" }],
    images:["/Exercises/Full_Body/Mountain_Climbers_1.png", "/Exercises/Full_Body/Mountain_Climbers_2.png"],
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
    muscles: [{ name: "Lower Back", image: "/Exercises/Muscles/Back.jpg" }, { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" }, { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" }],
    images: ["/Exercises/Home/Superman_1.png", "/Exercises/Home/Superman_2.png"],
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
    muscles: [{ name: "Quads", image: "/Exercises/Muscles/Quads.jpg" }, { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" }, { name: "Core", image: "/Exercises/Muscles/Core.jpg" }],
    images:["/Exercises/Home/Wall_Sit.jpg"],
    steps: [
      "Stand with back against wall and slide down into a squat.",
      "Keep thighs parallel to floor and knees at 90°.",
      "Hold for the desired time without moving."
    ],
  },
];

