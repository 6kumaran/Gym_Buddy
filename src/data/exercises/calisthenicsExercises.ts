export const calisthenicsExercises = {
  beginner: [
    {
      id: "push-up",
      name: "Push-Ups",
      equipment: ["Bodyweight"],
      muscles: [
        { name: "Chest", image: "/Exercises/Muscles/Chest.jpg" },
        { name: "Triceps", image: "/Exercises/Muscles/Triceps.jpg" },
        { name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" },
      ],
      media: {
        images: ["/Exercises/Push/Push_Ups_1.png", "/Exercises/Push/Push_Ups_2.png"]
      },
      steps: [
        "Place hands slightly wider than shoulder-width on floor.",
        "Lower body until chest nearly touches ground.",
        "Push back up to starting position.",
      ],
    },
    {
      id: "incline-push-up",
      name: "Incline Push-Ups",
      equipment: ["Bodyweight"],
      muscles: [
        { name: "Chest", image: "/Exercises/Muscles/Chest.jpg" },
        { name: "Triceps", image: "/Exercises/Muscles/Triceps.jpg" },
      ],
      media: {
        images: ["/Exercises/Calisthenics/Inclined_Push_Ups_1.png", "/Exercises/Calisthenics/Inclined_Push_Ups_2.png"]
      },
      steps: [
        "Place hands on elevated surface.",
        "Lower chest towards the surface.",
        "Push back up until arms are straight.",
      ],
    },
    {
      id: "bodyweight-squat",
      name: "Bodyweight Squat",
      equipment: ["Bodyweight"],
      muscles: [
        { name: "Quads", image: "/Exercises/Muscles/Quads.jpg" },
        { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" },
      ],
      media: {
        images: ["/Exercises/Home/Squats.jpg"]
      },
      steps: [
        "Stand with feet shoulder-width apart.",
        "Lower hips until thighs parallel to floor.",
        "Push through heels to return upright.",
      ],
    },
    {
      id: "plank",
      name: "Plank",
      equipment: ["Bodyweight"],
      muscles: [{ name: "Core", image: "/Exercises/Muscles/Core.jpg" }],
      media: {
        images: ["/Exercises/Home/Plank.jpg"]
      },
      steps: [
        "Keep forearms on ground, elbows under shoulders.",
        "Maintain straight body line from head to heels.",
        "Hold position without sagging hips.",
      ],
    },
  ],

  intermediate: [
    {
      id: "pull-up",
      name: "Pull-Ups",
      equipment: ["Bar"],
      muscles: [
        { name: "Lats", image: "/Exercises/Muscles/Lats.jpg" },
        { name: "Biceps", image: "/Exercises/Muscles/Biceps.jpg" },
        { name: "Forearms", image: "/Exercises/Muscles/Forearms.jpg" },
      ],
      media: {
        images: ["/Exercises/Bulk/Pull_Ups_1.png", "/Exercises/Bulk/Pull_Ups_2.png"]
      },
      steps: [
        "Hang from bar with overhand grip.",
        "Pull body upward until chin clears bar.",
        "Lower back down slowly.",
      ],
    },
    {
      id: "dips",
      name: "Dips",
      equipment: ["Parallel Bars"],
      muscles: [
        { name: "Triceps", image: "/Exercises/Muscles/Triceps.jpg" },
        { name: "Chest", image: "/Exercises/Muscles/Chest.jpg" },
        { name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" },
      ],
      media: {
        images:["/Exercises/Push/Chest_Dips_1.png", "/Exercises/Push/Chest_Dips_2.png"]
      },
      steps: [
        "Support body on parallel bars.",
        "Lower until elbows at 90°.",
        "Push back up to lockout.",
      ],
    },
    {
      id: "pistol-squat",
      name: "Pistol Squat",
      equipment: ["Bodyweight"],
      muscles: [
        { name: "Quads", image: "/Exercises/Muscles/Quads.jpg" },
        { name: "Glutes", image: "/Exercises/Muscles/Glutes.jpeg" },
        { name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" },
      ],
      media: {
        images:["/Exercises/Calisthenics/Pistol_Squat_1.png", "/Exercises/Calisthenics/Pistol_Squat_2.png"]
      },
      steps: [
        "Balance on one leg with other extended forward.",
        "Lower hips into squat while keeping balance.",
        "Push back up without letting foot touch floor.",
      ],
    },
    {
      id: "hanging-leg-raise",
      name: "Hanging Leg Raises",
      equipment: ["Pull-up Bar"],
      muscles: [
        { name: "Core", image: "/Exercises/Muscles/Core.jpg" },
        { name: "Hip Flexors", image: "/Exercises/Muscles/Quads.jpg" },
      ],
      media: {
        images:["/Exercises/Calisthenics/Hanging_Leg_Raises_1.png", "/Exercises/Calisthenics/Hanging_Leg_Raises_2.png"]
      },
      steps: [
        "Hang from bar with straight arms.",
        "Raise legs until parallel to floor.",
        "Lower slowly without swinging.",
      ],
    },
  ],

  advanced: [
    {
      id: "muscle-up",
      name: "Muscle-Up",
      equipment: ["Bar", "Rings"],
      muscles: [
        { name: "Lats", image: "/Exercises/Muscles/Lats.jpg" },
        { name: "Chest", image: "/Exercises/Muscles/Chest.jpg" },
        { name: "Triceps", image: "/Exercises/Muscles/Triceps.jpg" },
        { name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" },
      ],
      media: {
        images:["/Exercises/Calisthenics/Muscle_Up_1.png", "/Exercises/Calisthenics/Muscle_Up_2.png", "/Exercises/Calisthenics/Muscle_Up_3.png"]
      },
      steps: [
        "Explosively pull body above bar.",
        "Transition chest over bar.",
        "Press down to straighten arms.",
      ],
    },
    {
      id: "front-lever",
      name: "Front Lever Hold",
      equipment: ["Bar", "Rings"],
      muscles: [
        { name: "Core", image: "/Exercises/Muscles/Core.jpg" },
        { name: "Lats", image: "/Exercises/Muscles/Lats.jpg" },
        { name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" },
      ],
      media: {
        images: ["/Exercises/Calisthenics/Front_Lever_Hold.png"]
      },
      steps: [
        "Hang from bar with straight arms.",
        "Lift body into horizontal position.",
        "Hold without arching lower back.",
      ],
    },
    {
      id: "handstand-push-up",
      name: "Handstand Push-Ups",
      equipment: ["Bodyweight"],
      muscles: [
        { name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" },
        { name: "Triceps", image: "/Exercises/Muscles/Triceps.jpg" },
        { name: "Core", image: "/Exercises/Muscles/Core.jpg" },
      ],
      media: {
        images: ["/Exercises/Calisthenics/Headstand_Push_Ups_1.png", "/Exercises/Calisthenics/Headstand_Push_Ups_2.png"]
      },
      steps: [
        "Kick up into a wall-supported handstand.",
        "Lower until head nearly touches ground.",
        "Press back up to lockout.",
      ],
    },
  ],

  stretching: [
    {
      id: "cat-cow",
      name: "Cat-Cow Stretch",
      equipment: ["Bodyweight"],
      muscles: [{ name: "Spine", image: "/Exercises/Muscles/Back.jpg" }],
      media: {
        images:["/Exercises/Calisthenics/Cat_Cow_Stretch_1.png", "/Exercises/Calisthenics/Cat_Cow_Stretch_2.png", "/Exercises/Calisthenics/Cat_Cow_Stretch_3.png"]
      },
      steps: [
        "Start on hands and knees.",
        "Arch back upwards (Cat).",
        "Dip back downwards (Cow).",
      ],
    },
    {
      id: "hamstring-stretch",
      name: "Seated Hamstring Stretch",
      equipment: ["Bodyweight"],
      muscles: [{ name: "Hamstrings", image: "/Exercises/Muscles/Hamstrings.jpg" }],
      media: {
        images: ["/Exercises/Calisthenics/Hamstring_Stretch_1.png", "/Exercises/Calisthenics/Hamstring_Stretch_2.png"]
      },
      steps: [
        "Sit with one leg extended.",
        "Reach forward towards toes.",
        "Hold stretch without bouncing.",
      ],
    },
    {
      id: "cobra-stretch",
      name: "Cobra Stretch",
      equipment: ["Bodyweight"],
      muscles: [{ name: "Abs", image: "/Exercises/Muscles/Core.jpg" }],
      media: {
        images: ["/Exercises/Calisthenics/Cobra_Stretch.png"]
      },
      steps: [
        "Lie face down with palms under shoulders.",
        "Press chest upwards, extending spine.",
        "Hold without shrugging shoulders.",
      ],
    },
    {
      id: "shoulder-stretch",
      name: "Cross-Body Shoulder Stretch",
      equipment: ["Bodyweight"],
      muscles: [{ name: "Shoulders", image: "/Exercises/Muscles/Shoulders.jpg" }],
      media: {
        images: ["/Exercises/Calisthenics/Shoulder_Stretch.png"]
      },
      steps: [
        "Bring one arm across chest.",
        "Pull with opposite hand to stretch shoulder.",
        "Hold for 20–30 seconds, switch sides.",
      ],
    },
  ],
};
