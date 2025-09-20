// data/exercises/gymBased.js

export const gymBasedExercises = [
  {
    id: "gym1",
    name: "Bench Press",
    equipment: "Barbell / Bench",
    muscles: [{ name: "Chest", image: "/Exercises/Muscles/Chest.jpg" }, { name: "Triceps", image: "/Exercises/Muscles/Triceps.jpg" }, { name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" }],
    images:["/Exercises/Push/Barbell_Bench_Press_1.jpg", "/Exercises/Push/Barbell_Bench_Press_2.jpg", "/Exercises/Push/Barbell_Bench_Press_3.jpg"],
    steps: [
      "Lie flat on a bench with feet planted on the ground.",
      "Grip the bar slightly wider than shoulder-width.",
      "Unrack and lower bar slowly to mid-chest.",
      "Press the bar upward until arms are fully extended."
    ],
  },
  {
    id: "gym2",
    name: "Lat Pulldown",
    equipment: "Pulldown Machine",
    muscles: [{ name: "Back", image: "/Exercises/Muscles/Back.jpg" }, { name: "Lats", image: "/Exercises/Muscles/Lats.jpg" }, { name: "Biceps", image: "/Exercises/Muscles/Biceps.jpg" }],
    images:["/Exercises/Pull/Lat_Pulldown_1.jpg", "/Exercises/Pull/Lat_Pulldown_2.jpg", "/Exercises/Pull/Lat_Pulldown_3.jpg"],
    steps: [
      "Sit at the machine, adjust thigh pad securely.",
      "Grip the bar wider than shoulder width.",
      "Pull bar down to upper chest while squeezing back.",
      "Slowly return to starting position."
    ],
  },
  {
    id: "gym3",
    name: "Leg Press",
    equipment: "Leg Press Machine",
    muscles: [{ name: "Quads", image: "/Exercises/Muscles/Quads.jpg" }, { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" }, { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" }],
    images:["/Exercises/Leg/Leg_Press_1.png", "/Exercises/Leg/Leg_Press_2.png"],
    steps: [
      "Sit on the machine with feet shoulder-width on platform.",
      "Unlock safety handles and lower weight slowly.",
      "Press platform upward by extending legs.",
      "Do not lock knees at the top."
    ],
  },
  {
    id: "gym4",
    name: "Seated Row",
    equipment: "Cable Row Machine",
    muscles: [{ name: "Back", image: "/Exercises/Muscles/Back.jpg" }, { name: "Biceps", image: "/Exercises/Muscles/Biceps.jpg" }, { name: "Rear Delts", image: "/Exercises/Muscles/Shoulders.jpg" }],
    images:["/Exercises/Gym/Seated_Row_1.jpg", "/Exercises/Gym/Seated_Row_2.jpg"],
    steps: [
      "Sit at machine with feet braced on platform.",
      "Hold the handle with arms extended forward.",
      "Pull handle toward torso while keeping chest upright.",
      "Slowly extend arms back to starting position."
    ],
  },
  {
    id: "gym5",
    name: "Shoulder Press (Machine)",
    equipment: "Shoulder Press Machine",
    muscles: [{ name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" }, { name: "Triceps", image: "/Exercises/Muscles/Triceps.jpg" }],
    images:["/Exercises/Gym/Shoulder_Press_1.png", "/Exercises/Gym/Shoulder_Press_2.png"],
    steps: [
      "Sit with back against pad, grip handles at shoulder level.",
      "Press handles upward until arms are extended.",
      "Lower slowly back to shoulder height.",
      "Keep core braced throughout."
    ],
  },
  {
    id: "gym6",
    name: "Cable Crossover",
    equipment: "Cable Machine",
    muscles: [{ name: "Chest", image: "/Exercises/Muscles/Chest.jpg" }, { name: "Front Delts", image: "/Exercises/Muscles/Shoulders.jpg" }],
    images: ["/Exercises/Gym/Cable_Crossover_1.png", "/Exercises/Gym/Cable_Crossover_2.png"],
    steps: [
      "Set pulleys above shoulder height and grab handles.",
      "Step forward with one foot for stability.",
      "Bring hands together in front of chest in an arc motion.",
      "Slowly return arms to starting position."
    ],
  },
  {
    id: "gym7",
    name: "Hack Squat",
    equipment: "Hack Squat Machine",
    muscles: [{ name: "Quads", image: "/Exercises/Muscles/Quads.jpg" }, { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" }, { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" }],
    images: ["/Exercises/Gym/Hack_Squat_1.jpg", "/Exercises/Gym/Hack_Squat_2.jpg"],
    steps: [
      "Position shoulders under pads and feet on platform.",
      "Unlock safety handles and squat down slowly.",
      "Drive back up through heels to starting position."
    ],
  },
  {
    id: "gym8",
    name: "Tricep Pushdown",
    equipment: "Cable Machine (Rope/Bar Attachment)",
    muscles: [{ name: "Triceps", image: "/Exercises/Muscles/Triceps.jpg" }],
    images: ["/Exercises/Gym/Tricep_Pushdown_1.png", "/Exercises/Gym/Tricep_Pushdown_2.png"],
    steps: [
      "Stand at cable machine with rope/bar at chest level.",
      "Grip handle and pull downward while extending elbows.",
      "Pause at full extension, then return slowly."
    ],
  },
];

