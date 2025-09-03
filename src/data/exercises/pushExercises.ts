export const pushExercises = [
  {
    id: "bench-press",
    name: "Barbell Bench Press",
    equipment: "Barbell, Bench",
    muscles: [
      { name: "Chest", image: "/muscles/chest.png" },
      { name: "Triceps", image: "/muscles/triceps.png" },
      { name: "Shoulders", image: "/muscles/shoulders.png" },
    ],
    media: {
      image: "/exercises/bench-press.jpg",
      video: "/exercises/bench-press.mp4",
    },
    steps: [
      "Lie down on a flat bench with feet flat on the ground.",
      "Grip the bar slightly wider than shoulder-width.",
      "Lower the bar slowly to your mid-chest.",
      "Push the bar upward until arms are fully extended.",
    ],
  },
  {
    id: "incline-bench-press",
    name: "Incline Dumbbell Press",
    equipment: "Dumbbells, Incline Bench",
    muscles: [
      { name: "Upper Chest", image: "/muscles/chest-upper.png" },
      { name: "Triceps", image: "/muscles/triceps.png" },
      { name: "Shoulders", image: "/muscles/shoulders.png" },
    ],
    media: {
      image: "/exercises/incline-dumbbell-press.jpg",
      video: "/exercises/incline-dumbbell-press.mp4",
    },
    steps: [
      "Set bench to 30–45° incline.",
      "Hold dumbbells at chest level.",
      "Press upward and together over chest.",
      "Lower slowly until arms at 90°.",
    ],
  },
  {
    id: "overhead-press",
    name: "Overhead Shoulder Press",
    equipment: "Barbell or Dumbbells",
    muscles: [
      { name: "Shoulders", image: "/muscles/shoulders.png" },
      { name: "Triceps", image: "/muscles/triceps.png" },
    ],
    media: {
      image: "/exercises/overhead-press.jpg",
      video: "/exercises/overhead-press.mp4",
    },
    steps: [
      "Stand upright holding bar/dumbbells at shoulder level.",
      "Press overhead until arms are locked out.",
      "Lower slowly to shoulder height and repeat.",
    ],
  },
  {
    id: "push-ups",
    name: "Push-Ups",
    equipment: "Bodyweight",
    muscles: [
      { name: "Chest", image: "/muscles/chest.png" },
      { name: "Shoulders", image: "/muscles/shoulders.png" },
      { name: "Triceps", image: "/muscles/triceps.png" },
    ],
    media: {
      image: "/exercises/push-ups.jpg",
      video: "/exercises/push-ups.mp4",
    },
    steps: [
      "Start in a high plank position.",
      "Lower chest close to the floor while keeping body straight.",
      "Push back up until arms are extended.",
    ],
  },
  {
    id: "dips",
    name: "Chest Dips",
    equipment: "Parallel Bars",
    muscles: [
      { name: "Chest", image: "/muscles/chest.png" },
      { name: "Triceps", image: "/muscles/triceps.png" },
      { name: "Front Shoulders", image: "/muscles/shoulders.png" },
    ],
    media: {
      image: "/exercises/dips.jpg",
      video: "/exercises/dips.mp4",
    },
    steps: [
      "Hold yourself up on parallel bars.",
      "Lean slightly forward and lower body until elbows at 90°.",
      "Push back up until arms are extended.",
    ],
  },
  {
    id: "arnold-press",
    name: "Arnold Press",
    equipment: "Dumbbells",
    muscles: [
      { name: "Shoulders", image: "/muscles/shoulders.png" },
      { name: "Triceps", image: "/muscles/triceps.png" },
    ],
    media: {
      image: "/exercises/arnold-press.jpg",
      video: "/exercises/arnold-press.mp4",
    },
    steps: [
      "Hold dumbbells in front of shoulders, palms facing you.",
      "Rotate palms outward while pressing overhead.",
      "Reverse the motion slowly.",
    ],
  },
  {
    id: "pec-deck",
    name: "Pec Deck Fly",
    equipment: "Pec Deck Machine",
    muscles: [{ name: "Chest", image: "/muscles/chest.png" }],
    media: {
      image: "/exercises/pec-deck.jpg",
      video: "/exercises/pec-deck.mp4",
    },
    steps: [
      "Sit on the pec deck machine with arms at 90°.",
      "Bring handles together in front of chest.",
      "Slowly return to starting position.",
    ],
  },
];
