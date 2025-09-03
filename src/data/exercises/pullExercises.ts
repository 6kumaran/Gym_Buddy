export const pullExercises = [
  {
    id: "deadlift",
    name: "Conventional Deadlift",
    equipment: "Barbell",
    muscles: [
      { name: "Back", image: "/muscles/back.png" },
      { name: "Hamstrings", image: "/muscles/hamstrings.png" },
      { name: "Forearms", image: "/muscles/forearms.png" },
    ],
    media: {
      image: "/exercises/deadlift.jpg",
      video: "/exercises/deadlift.mp4",
    },
    steps: [
      "Stand with feet hip-width apart, bar over mid-foot.",
      "Grip the bar just outside knees.",
      "Keep back straight, push through heels to lift.",
      "Lock out hips and knees at the top.",
    ],
  },
  {
    id: "pull-ups",
    name: "Pull-Ups",
    equipment: "Pull-Up Bar",
    muscles: [
      { name: "Lats", image: "/muscles/lats.png" },
      { name: "Biceps", image: "/muscles/biceps.png" },
      { name: "Forearms", image: "/muscles/forearms.png" },
    ],
    media: {
      image: "/exercises/pull-ups.jpg",
      video: "/exercises/pull-ups.mp4",
    },
    steps: [
      "Hang on a pull-up bar with overhand grip.",
      "Pull yourself up until chin passes bar.",
      "Lower slowly to starting position.",
    ],
  },
  {
    id: "barbell-row",
    name: "Barbell Row",
    equipment: "Barbell",
    muscles: [
      { name: "Back", image: "/muscles/back.png" },
      { name: "Biceps", image: "/muscles/biceps.png" },
    ],
    media: {
      image: "/exercises/barbell-row.jpg",
      video: "/exercises/barbell-row.mp4",
    },
    steps: [
      "Bend forward at hips with barbell in hands.",
      "Pull barbell towards lower chest/upper stomach.",
      "Lower under control and repeat.",
    ],
  },
  {
    id: "lat-pulldown",
    name: "Lat Pulldown",
    equipment: "Cable Machine",
    muscles: [
      { name: "Lats", image: "/muscles/lats.png" },
      { name: "Biceps", image: "/muscles/biceps.png" },
      { name: "Rear Shoulders", image: "/muscles/shoulders-rear.png" },
    ],
    media: {
      image: "/exercises/lat-pulldown.jpg",
      video: "/exercises/lat-pulldown.mp4",
    },
    steps: [
      "Sit on machine with thighs locked under pads.",
      "Pull bar down to upper chest.",
      "Slowly release bar upward with control.",
    ],
  },
  {
    id: "dumbbell-curl",
    name: "Dumbbell Bicep Curl",
    equipment: "Dumbbells",
    muscles: [{ name: "Biceps", image: "/muscles/biceps.png" }],
    media: {
      image: "/exercises/dumbbell-curl.jpg",
      video: "/exercises/dumbbell-curl.mp4",
    },
    steps: [
      "Stand holding dumbbells at sides, palms forward.",
      "Curl weights upward while keeping elbows still.",
      "Lower slowly back to sides.",
    ],
  },
  {
    id: "face-pull",
    name: "Face Pull",
    equipment: "Cable Machine",
    muscles: [
      { name: "Rear Delts", image: "/muscles/shoulders-rear.png" },
      { name: "Traps", image: "/muscles/traps.png" },
      { name: "Biceps", image: "/muscles/biceps.png" },
    ],
    media: {
      image: "/exercises/face-pull.jpg",
      video: "/exercises/face-pull.mp4",
    },
    steps: [
      "Attach rope to high pulley and grab ends.",
      "Pull rope towards face, elbows high.",
      "Squeeze shoulders, return slowly.",
    ],
  },
  {
    id: "hammer-curl",
    name: "Hammer Curl",
    equipment: "Dumbbells",
    muscles: [
      { name: "Biceps (Brachialis)", image: "/muscles/biceps.png" },
      { name: "Forearms", image: "/muscles/forearms.png" },
    ],
    media: {
      image: "/exercises/hammer-curl.jpg",
      video: "/exercises/hammer-curl.mp4",
    },
    steps: [
      "Hold dumbbells with palms facing inward.",
      "Curl weights while keeping neutral grip.",
      "Lower slowly to starting position.",
    ],
  },
  {
    id: "shrugs",
    name: "Dumbbell Shrugs",
    equipment: "Dumbbells",
    muscles: [{ name: "Traps", image: "/muscles/traps.png" }],
    media: {
      image: "/exercises/shrugs.jpg",
      video: "/exercises/shrugs.mp4",
    },
    steps: [
      "Stand upright holding dumbbells at sides.",
      "Shrug shoulders as high as possible.",
      "Hold briefly, then lower.",
    ],
  },
];
