export const legsExercises = [
  {
    id: "squat",
    name: "Barbell Back Squat",
    equipment: "Barbell",
    muscles: [
      { name: "Quads", image: "/Exercises/Muscles/Quads.jpg" },
      { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" },
      { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" },
    ],
    media: {
      images: ["/Exercises/Leg/Barbell_Squats_1.png", "/Exercises/Leg/Barbell_Squats_2.png"],
    },
    steps: [
      "Rack barbell on upper back, feet shoulder-width apart.",
      "Lower hips until thighs are parallel to floor.",
      "Push through heels to return upright.",
    ],
  },
  {
    id: "romanian-deadlift",
    name: "Romanian Deadlift",
    equipment: "Barbell",
    muscles: [
      { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" },
      { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" },
      { name: "Lower Back", image: "/Exercises/Muscles/Back.jpg" },
    ],
    media: {
      images: ["/Exercises/Leg/Romanian_Deadlift_1.png", "/Exercises/Leg/Romanian_Deadlift_2.png"],
    },
    steps: [
      "Stand with barbell at thighs.",
      "Lower bar by hinging hips, keeping back flat.",
      "Stretch hamstrings, then return to standing.",
    ],
  },
  {
    id: "leg-press",
    name: "Leg Press",
    equipment: "Machine",
    muscles: [
      { name: "Quads", image: "/Exercises/Muscles/Quads.jpg" },
      { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" },
      { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" },
    ],
    media: {
      images: ["/Exercises/Leg/Leg_Press_1.png", "/Exercises/Leg/Leg_Press_2.png"],
    },
    steps: [
      "Sit on machine with feet shoulder-width on platform.",
      "Push weight up, then lower slowly.",
      "Do not lock knees fully at top.",
    ],
  },
  {
    id: "lunges",
    name: "Walking Lunges",
    equipment: "Dumbbells (optional)",
    muscles: [
      { name: "Quads", image: "/Exercises/Muscles/Quads.jpg" },
      { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" },
      { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" },
    ],
    media: {
      images: ["/Exercises/Leg/Walking_Lunges_1.png", "/Exercises/Leg/Walking_Lunges_2.png" , "/Exercises/Leg/Walking_Lunges_3.png", "/Exercises/Leg/Walking_Lunges_4.png"],
    },
    steps: [
      "Take a step forward, lowering back knee close to ground.",
      "Push through front heel to step forward.",
      "Alternate legs while moving forward.",
    ],
  },
  {
    id: "calf-raise",
    name: "Standing Calf Raise",
    equipment: "Bodyweight / Machine",
    muscles: [{ name: "Calves", image: "/Exercises/Muscles/Calves.jpg" }],
    media: {
      images: ["/Exercises/Leg/Standing_Calf_Raises_1.png", "/Exercises/Leg/Standing_Calf_Raises_2.png"],
    },
    steps: [
      "Stand with feet flat on floor.",
      "Raise heels as high as possible.",
      "Lower slowly under control.",
    ],
  },
  {
    id: "bulgarian-split-squat",
    name: "Bulgarian Split Squat",
    equipment: "Dumbbells / Barbell",
    muscles: [
      { name: "Quads", image: "/Exercises/Muscles/Quads.jpg" },
      { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" },
    ],
    media: {
      images: ["/Exercises/Leg/Bulgarian_Squats_1.png", "/Exercises/Leg/Bulgarian_Squats_2.png"],
    },
    steps: [
      "Place one foot behind on a bench.",
      "Lower front thigh until parallel to floor.",
      "Push through front heel to rise back up.",
    ],
  },
  {
    id: "hip-thrust",
    name: "Barbell Hip Thrust",
    equipment: "Barbell",
    muscles: [
      { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" },
      { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" },
    ],
    media: {
      images:["/Exercises/Leg/Barbell_Hip_Thrust_1.png", "/Exercises/Leg/Barbell_Hip_Thrust_2.png"],
    },
    steps: [
      "Sit with upper back on bench, barbell on hips.",
      "Drive hips upward until glutes fully contract.",
      "Lower hips under control and repeat.",
    ],
  },
  {
    id: "step-up",
    name: "Step Ups",
    equipment: "Dumbbells (optional)",
    muscles: [
      { name: "Quads", image: "/Exercises/Muscles/Quads.jpg" },
      { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" },
      { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" },
    ],
    media: {
      images:["/Exercises/Leg/Step_Ups_1.png", "/Exercises/Leg/Step_Ups_2.png"],
    },
    steps: [
      "Step onto a bench or platform with one foot.",
      "Push through heel to lift body upward.",
      "Step down and repeat with other leg.",
    ],
  },
];
