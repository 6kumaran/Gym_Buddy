export const pullExercises = [
  {
    id: "deadlift",
    name: "Conventional Deadlift",
    equipment: "Barbell",
    muscles: [
      { name: "Back", image: "/Exercises/Muscles/Back.jpg" },
      { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" },
      { name: "Forearms", image: "/Exercises/Muscles/Forearms.jpg" },
    ],
    media: {
      images: ["/Exercises/Bulk/Deadlift_1.png", "/Exercises/Bulk/Deadlift_2.png" ],
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
      { name: "Lats", image: "/Exercises/Muscles/Lats.jpg" },
      { name: "Biceps", image: "/Exercises/Muscles/Biceps.jpg" },
      { name: "Forearms", image: "/Exercises/Muscles/Forearms.jpg" },
    ],
    media: {
      images: [
        "/Exercises/Bulk/Pull_Ups_1.png",
        "/Exercises/Bulk/Pull_Ups_2.png",
      ]
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
      { name: "Back", image: "/Exercises/Muscles/Back.jpg" },
      { name: "Biceps", image: "/Exercises/Muscles/Biceps.jpg" },
    ],
    media: {
      images: [
        "/Exercises/Pull/Barbell_Row_1.png",
        "/Exercises/Pull/Barbell_Row_2.png",
      ]
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
      { name: "Lats", image: "/Exercises/Muscles/Lats.jpg" },
      { name: "Biceps", image: "/Exercises/Muscles/Biceps.jpg" },
      { name: "Rear Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" },
    ],
    media: {
      images: [
        "/Exercises/Pull/Lat_Pulldown_1.jpg",
        "/Exercises/Pull/Lat_Pulldown_2.jpg"
      ]
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
    muscles: [{ name: "Biceps", image: "/Exercises/Muscles/Biceps.jpg" }],
    media: {
      images: ["Exercises/Pull/Dumbell_Curls_1.png", "Exercises/Pull/Dumbell_Curls_2.png"]
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
      { name: "Rear Delts", image: "/Exercises/Muscles/Shoulders.jpg" },
      { name: "Traps", image: "/Exercises/Muscles/Traps.jpg" },
      { name: "Biceps", image: "/Exercises/Muscles/Biceps.jpg" },
    ],
    media: {
      images: [
        "/Exercises/Pull/Face_Pull_1.png",
        "/Exercises/Pull/Face_Pull_2.png"
      ]
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
      { name: "Biceps (Brachialis)", image: "/Exercises/Muscles/Biceps.jpg" },
      { name: "Forearms", image: "/Exercises/Muscles/Forearms.jpg" },
    ],
    media: {
      images:["/Exercises/Pull/Hammer_Curls_1.png",
               "/Exercises/Pull/Hammer_Curls_2.png"]
    },
    steps: [
      "Hold dumbbells with palms facing inward.",
      "Curl weights while keeping neutral grip.",
      "Lower slowly to starting position.",
    ],
  },
];
