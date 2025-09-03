export const calisthenicsExercises = {
  beginner: [
    {
      id: "push-up",
      name: "Push-Ups",
      equipment: ["Bodyweight"],
      muscles: [
        { name: "Chest", image: "/muscles/chest.png" },
        { name: "Triceps", image: "/muscles/triceps.png" },
        { name: "Shoulders", image: "/muscles/shoulders.png" },
      ],
      media: {
        image: "/exercises/push-up.jpg",
        video: "/exercises/push-up.mp4",
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
        { name: "Chest", image: "/muscles/chest.png" },
        { name: "Triceps", image: "/muscles/triceps.png" },
      ],
      media: {
        image: "/exercises/incline-push-up.jpg",
        video: "/exercises/incline-push-up.mp4",
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
        { name: "Quads", image: "/muscles/quads.png" },
        { name: "Glutes", image: "/muscles/glutes.png" },
      ],
      media: {
        image: "/exercises/bodyweight-squat.jpg",
        video: "/exercises/bodyweight-squat.mp4",
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
      muscles: [{ name: "Core", image: "/muscles/core.png" }],
      media: {
        image: "/exercises/plank.jpg",
        video: "/exercises/plank.mp4",
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
        { name: "Lats", image: "/muscles/lats.png" },
        { name: "Biceps", image: "/muscles/biceps.png" },
        { name: "Forearms", image: "/muscles/forearms.png" },
      ],
      media: {
        image: "/exercises/pull-up.jpg",
        video: "/exercises/pull-up.mp4",
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
        { name: "Triceps", image: "/muscles/triceps.png" },
        { name: "Chest", image: "/muscles/chest.png" },
        { name: "Shoulders", image: "/muscles/shoulders.png" },
      ],
      media: {
        image: "/exercises/dips.jpg",
        video: "/exercises/dips.mp4",
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
        { name: "Quads", image: "/muscles/quads.png" },
        { name: "Glutes", image: "/muscles/glutes.png" },
        { name: "Hamstrings", image: "/muscles/hamstrings.png" },
      ],
      media: {
        image: "/exercises/pistol-squat.jpg",
        video: "/exercises/pistol-squat.mp4",
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
        { name: "Core", image: "/muscles/core.png" },
        { name: "Hip Flexors", image: "/muscles/hip-flexors.png" },
      ],
      media: {
        image: "/exercises/hanging-leg-raise.jpg",
        video: "/exercises/hanging-leg-raise.mp4",
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
        { name: "Lats", image: "/muscles/lats.png" },
        { name: "Chest", image: "/muscles/chest.png" },
        { name: "Triceps", image: "/muscles/triceps.png" },
        { name: "Shoulders", image: "/muscles/shoulders.png" },
      ],
      media: {
        image: "/exercises/muscle-up.jpg",
        video: "/exercises/muscle-up.mp4",
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
        { name: "Core", image: "/muscles/core.png" },
        { name: "Lats", image: "/muscles/lats.png" },
        { name: "Shoulders", image: "/muscles/shoulders.png" },
      ],
      media: {
        image: "/exercises/front-lever.jpg",
        video: "/exercises/front-lever.mp4",
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
        { name: "Shoulders", image: "/muscles/shoulders.png" },
        { name: "Triceps", image: "/muscles/triceps.png" },
        { name: "Core", image: "/muscles/core.png" },
      ],
      media: {
        image: "/exercises/handstand-push-up.jpg",
        video: "/exercises/handstand-push-up.mp4",
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
      muscles: [{ name: "Spine", image: "/muscles/spine.png" }],
      media: {
        image: "/exercises/cat-cow.jpg",
        video: "/exercises/cat-cow.mp4",
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
      muscles: [{ name: "Hamstrings", image: "/muscles/hamstrings.png" }],
      media: {
        image: "/exercises/hamstring-stretch.jpg",
        video: "/exercises/hamstring-stretch.mp4",
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
      muscles: [{ name: "Abs", image: "/muscles/core.png" }],
      media: {
        image: "/exercises/cobra-stretch.jpg",
        video: "/exercises/cobra-stretch.mp4",
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
      muscles: [{ name: "Shoulders", image: "/muscles/shoulders.png" }],
      media: {
        image: "/exercises/shoulder-stretch.jpg",
        video: "/exercises/shoulder-stretch.mp4",
      },
      steps: [
        "Bring one arm across chest.",
        "Pull with opposite hand to stretch shoulder.",
        "Hold for 20–30 seconds, switch sides.",
      ],
    },
  ],
};
