export const dietCategories = [
  {
    title: "High Protein",
    description: "Foods rich in protein for muscle growth and repair.",
    items: [
      {
        id: "chicken-breast",
        name: "Grilled Chicken Breast",
        nutrients: {
          calories: 165,
          protein: "31g",
          carbs: "0g",
          fats: "3.6g",
        },
        ingredients: ["Chicken breast", "Olive oil", "Salt", "Pepper", "Lemon juice"],
        recipe: "Marinate chicken with spices, grill for 6-7 mins each side.",
        image: "/images/high_protein/chicken_breasts.jpg",
      },
      {
        id: "paneer-bhurji",
        name: "Paneer Bhurji",
        nutrients: {
          calories: 250,
          protein: "18g",
          carbs: "8g",
          fats: "16g",
        },
        ingredients: ["Paneer", "Onion", "Tomato", "Green chilies", "Turmeric", "Salt"],
        recipe: "Scramble paneer with sautéed onion, tomato, and spices.",
        image: "/images/high_protein/Paneer-Bhurji.jpg",
      },
      {
        id: "dal-tadka",
        name: "Dal Tadka",
        nutrients: {
          calories: 190,
          protein: "12g",
          carbs: "26g",
          fats: "4g",
        },
        ingredients: ["Toor dal", "Onion", "Tomato", "Ghee", "Cumin seeds", "Garlic"],
        recipe: "Boil dal, temper with ghee, garlic, cumin, and add to dal.",
        image: "/images/high_protein/Dal-Tadka.jpg",
      },
      {
        id: "greek-yogurt",
        name: "Greek Yogurt with Nuts",
        nutrients: {
          calories: 150,
          protein: "12g",
          carbs: "6g",
          fats: "8g",
        },
        ingredients: ["Greek yogurt", "Almonds", "Walnuts", "Honey"],
        recipe: "Mix yogurt with chopped nuts and drizzle honey.",
        image: "/images/high_protein/Greek-Yogurt.jpg",
      },
      {
        id: "egg-omelette",
        name: "Egg Omelette",
        nutrients: {
          calories: 155,
          protein: "13g",
          carbs: "1.1g",
          fats: "11g",
        },
        ingredients: ["Eggs", "Onion", "Green chili", "Coriander", "Salt"],
        recipe: "Beat eggs with spices and cook in non-stick pan.",
        image: "/images/high_protein/Egg_Omelette.jpg",
      },
    ],
  },

  {
    title: "High Calories (Bulking)",
    description: "Energy-dense foods for healthy weight and muscle gain.",
    items: [
      {
        id: "banana-shake",
        name: "Banana Shake",
        nutrients: {
          calories: 280,
          protein: "10g",
          carbs: "45g",
          fats: "8g",
        },
        ingredients: ["Banana", "Milk", "Peanut butter", "Honey"],
        recipe: "Blend all ingredients until smooth.",
        image: "/images/bulk/Banana_Shake.jpg",
      },
      {
        id: "chole-bhature",
        name: "Chole Bhature",
        nutrients: {
          calories: 450,
          protein: "14g",
          carbs: "55g",
          fats: "20g",
        },
        ingredients: ["Chickpeas", "Tomato", "Onion", "Spices", "Flour"],
        recipe: "Cook spicy chole curry, serve with fried bhature.",
        image: "/images/bulk/Chole_Bhature.jpg",
      },
      {
        id: "avocado-toast",
        name: "Avocado Toast",
        nutrients: {
          calories: 240,
          protein: "8g",
          carbs: "20g",
          fats: "15g",
        },
        ingredients: ["Whole wheat bread", "Avocado", "Lemon juice", "Chili flakes"],
        recipe: "Mash avocado, spread on toasted bread, top with chili flakes.",
        image: "/images/bulk/Avacado_Toast.jpg",
      },
      {
        id: "chicken-biryani",
        name: "Chicken Biryani",
        nutrients: {
          calories: 500,
          protein: "25g",
          carbs: "65g",
          fats: "18g",
        },
        ingredients: ["Chicken", "Basmati rice", "Spices", "Onion", "Yogurt"],
        recipe: "Layer rice with chicken curry and slow cook.",
        image: "/images/bulk/Chicken_Biriyani.jpg",
      },
      {
        id: "dry-fruits-mix",
        name: "Dry Fruits Mix",
        nutrients: {
          calories: 300,
          protein: "9g",
          carbs: "26g",
          fats: "20g",
        },
        ingredients: ["Almonds", "Cashews", "Walnuts", "Raisins"],
        recipe: "Mix nuts and raisins, consume as snack.",
        image: "/images/bulk/Dry_Fruits.jpg",
      },
    ],
  },

  {
    title: "Cutting / Weight Loss",
    description: "Low-calorie nutrient-dense meals for fat loss.",
    items: [
      {
        id: "oats-porridge",
        name: "Oats Porridge",
        nutrients: { calories: 200, protein: "8g", carbs: "30g", fats: "4g" },
        ingredients: ["Oats", "Skim milk", "Apple", "Cinnamon"],
        recipe: "Cook oats in milk, add chopped apple and cinnamon.",
        image: "/images/cut/Oat-porridge.jpg",
      },
      {
        id: "sprouts-salad",
        name: "Sprouts Salad",
        nutrients: { calories: 120, protein: "9g", carbs: "18g", fats: "1g" },
        ingredients: ["Moong sprouts", "Onion", "Tomato", "Coriander", "Lemon"],
        recipe: "Mix sprouts with veggies and lemon juice.",
        image: "/images/cut/Sprouts-salad.jpg",
      },
      {
        id: "grilled-fish",
        name: "Grilled Fish",
        nutrients: { calories: 200, protein: "22g", carbs: "0g", fats: "8g" },
        ingredients: ["Fish fillet", "Garlic", "Olive oil", "Lemon"],
        recipe: "Marinate fish with spices, grill until cooked.",
        image: "/images/cut/Grilled_Fish.jpg",
      },
      {
        id: "vegetable-soup",
        name: "Vegetable Soup",
        nutrients: { calories: 80, protein: "3g", carbs: "15g", fats: "1g" },
        ingredients: ["Carrot", "Beans", "Peas", "Cabbage", "Salt", "Pepper"],
        recipe: "Boil chopped veggies, season with pepper and salt.",
        image: "/images/cut/Vegetable_Soup.jpg",
      },
      {
        id: "fruit-bowl",
        name: "Fruit Bowl",
        nutrients: { calories: 150, protein: "2g", carbs: "35g", fats: "0g" },
        ingredients: ["Apple", "Banana", "Papaya", "Pomegranate"],
        recipe: "Chop all fruits and serve fresh.",
        image: "/images/cut/Fruit_Bowl.png",
      },
    ],
  },
  {
    title: "Pre-Workout",
    description: "Energizing foods before workout.",
    items: [
      {
        id: "banana-peanut",
        name: "Banana + Peanut Butter",
        nutrients: { calories: 210, protein: "6g", carbs: "30g", fats: "8g" },
        ingredients: ["Banana", "Peanut butter"],
        recipe: "Slice banana, spread peanut butter on top.",
        image: "/images/pre_workout/Peanut-butter-toast.jpg",
      },
      {
        id: "oats-banana",
        name: "Oats with Banana",
        nutrients: { calories: 220, protein: "7g", carbs: "40g", fats: "3g" },
        ingredients: ["Oats", "Milk", "Banana"],
        recipe: "Cook oats in milk, top with banana.",
        image: "/images/pre_workout/Oatmeal_with_banana.jpg",
      },
      {
        id: "boiled-potato",
        name: "Boiled Potato",
        nutrients: { calories: 150, protein: "4g", carbs: "34g", fats: "0.2g" },
        ingredients: ["Potato", "Salt", "Pepper"],
        recipe: "Boil potato, season lightly with salt and pepper.",
        image: "/images/pre_workout/boiled-potatoes.png",
      },
      {
        id: "brown-bread-honey",
        name: "Brown Bread + Honey",
        nutrients: { calories: 180, protein: "5g", carbs: "38g", fats: "2g" },
        ingredients: ["Brown bread", "Honey"],
        recipe: "Toast bread and drizzle honey.",
        image: "/images/pre_workout/Honey-wheat-bread.jpg",
      },
    ],
  },

  {
    title: "Post-Workout",
    description: "High-protein meals for recovery.",
    items: [
      {
        id: "protein-shake",
        name: "Protein Shake",
        nutrients: { calories: 180, protein: "25g", carbs: "8g", fats: "2g" },
        ingredients: ["Protein powder", "Milk/Water"],
        recipe: "Mix protein powder with water/milk.",
        image: "/images/post_workout/post-workout-shake.jpg",
      },
      {
        id: "chicken-salad",
        name: "Chicken Salad",
        nutrients: { calories: 220, protein: "28g", carbs: "12g", fats: "6g" },
        ingredients: ["Chicken", "Lettuce", "Cucumber", "Tomato"],
        recipe: "Mix grilled chicken with veggies.",
        image: "/images/post_workout/Chicken_Salad.jpeg",
      },
      {
        id: "paneer-salad",
        name: "Paneer Salad",
        nutrients: { calories: 210, protein: "18g", carbs: "10g", fats: "12g" },
        ingredients: ["Paneer", "Cucumber", "Onion", "Coriander"],
        recipe: "Mix paneer cubes with veggies.",
        image: "/images/post_workout/Paneer-Salad.jpg",
      },
    ],
  },
  {
  title: "Breakfast",
  description: "Healthy and energizing breakfast options to kickstart your day.",
  items: [
    {
      id: 1,
      name: "Oats Upma",
      nutrients: { calories: 250, protein: "8g", fats: "6g", carbs: "45g" },
      recipe: "Roast oats, sauté with veggies, add spices, and steam cook.",
      ingredients: ["Oats", "Carrots", "Beans", "Onion", "Green chilies", "Salt"],
      image: "/images/breakfast/Oats_Upma.jpg"
    },
    {
      id: 2,
      name: "Paneer Paratha",
      nutrients: { calories: 320, protein: "12g", fats: "10g", carbs: "50g" },
      recipe: "Stuff whole wheat dough with spiced paneer and cook on tawa.",
      ingredients: ["Whole wheat flour", "Paneer", "Coriander", "Spices", "Ghee"],
      image: "/images/breakfast/Paneer-paratha.jpg"
    },
    {
      id: 3,
      name: "Idli with Sambar",
      nutrients: { calories: 280, protein: "9g", fats: "4g", carbs: "55g" },
      recipe: "Steam fermented rice batter, serve with sambar and chutney.",
      ingredients: ["Rice", "Urad dal", "Vegetables", "Tamarind", "Spices"],
      image: "/images/breakfast/Idli_Sambar.jpg"
    },
    {
      id: 4,
      name: "Boiled Eggs with Whole Wheat Toast",
      nutrients: { calories: 210, protein: "13g", fats: "8g", carbs: "20g" },
      recipe: "Boil eggs, slice toast, and serve with pepper and salt.",
      ingredients: ["Eggs", "Whole wheat bread", "Salt", "Pepper"],
      image: "/images/breakfast/Bread_with_Eggs.jpg"
    },
    {
      id: 5,
      name: "Poha",
      nutrients: { calories: 270, protein: "6g", fats: "7g", carbs: "45g" },
      recipe: "Cook flattened rice with onions, peas, turmeric, and lemon.",
      ingredients: ["Poha", "Onion", "Peas", "Turmeric", "Lemon"],
      image: "/images/breakfast/Poha.jpg"
    }
  ]
},
{
  title: "Lunch",
  description: "Balanced meals for sustained energy throughout the day.",
  items: [
    {
      id: 1,
      name: "Brown Rice with Dal",
      nutrients: { calories: 350, protein: "14g", fats: "5g", carbs: "65g" },
      recipe: "Cook brown rice and serve with protein-rich dal.",
      ingredients: ["Brown rice", "Toor dal", "Tomato", "Onion", "Spices"],
      image: "/images/lunch/BlackRice_Dal.jpg"
    },
    {
      id: 2,
      name: "Grilled Chicken with Roti",
      nutrients: { calories: 400, protein: "30g", fats: "10g", carbs: "45g" },
      recipe: "Grill chicken with spices and serve with whole wheat roti.",
      ingredients: ["Chicken breast", "Whole wheat flour", "Spices", "Coriander"],
      image: "/images/lunch/GrilledChicken_Roti.jpg"
    },
    {
      id: 3,
      name: "Rajma Chawal",
      nutrients: { calories: 420, protein: "16g", fats: "9g", carbs: "70g" },
      recipe: "Cook rajma curry and serve with steamed rice.",
      ingredients: ["Kidney beans", "Rice", "Tomato", "Onion", "Spices"],
      image: "/images/lunch/Rajma-chawal.jpg"
    },
    {
      id: 4,
      name: "Curd Rice",
      nutrients: { calories: 300, protein: "8g", fats: "6g", carbs: "55g" },
      recipe: "Mix cooked rice with curd, temper with curry leaves and mustard.",
      ingredients: ["Rice", "Curd", "Curry leaves", "Mustard seeds"],
      image: "/images/lunch/Curd_Rice.jpg"
    },
    {
      id: 5,
      name: "Paneer Butter Masala with Roti",
      nutrients: { calories: 450, protein: "18g", fats: "20g", carbs: "50g" },
      recipe: "Cook paneer in tomato-butter gravy and serve with roti.",
      ingredients: ["Paneer", "Tomato", "Butter", "Spices", "Cream"],
      image: "/images/lunch/Paneer_butter_roti.JPG"
    }
  ]
},
{
  title: "Dinner",
  description: "Light yet nutritious meals to end your day well.",
  items: [
    {
      id: 1,
      name: "Grilled Fish with Veggies",
      nutrients: { calories: 350, protein: "28g", fats: "12g", carbs: "25g" },
      recipe: "Grill fish with herbs and serve with sautéed vegetables.",
      ingredients: ["Fish", "Bell peppers", "Broccoli", "Garlic", "Olive oil"],
      image: "/images/dinner/Grilled_Fish_Veggies.jpg"
    },
    {
      id: 2,
      name: "Khichdi",
      nutrients: { calories: 320, protein: "11g", fats: "7g", carbs: "55g" },
      recipe: "Cook rice and dal with spices, tempered with ghee.",
      ingredients: ["Rice", "Moong dal", "Turmeric", "Ghee"],
      image: "/images/dinner/Khichdi.jpg"
    },
    {
      id: 3,
      name: "Palak Paneer with Roti",
      nutrients: { calories: 380, protein: "16g", fats: "14g", carbs: "45g" },
      recipe: "Cook paneer with spinach puree and spices.",
      ingredients: ["Paneer", "Spinach", "Onion", "Garlic", "Spices"],
      image: "/images/dinner/palak_paneer.jpg"
    },
    {
      id: 4,
      name: "Vegetable Soup with Bread",
      nutrients: { calories: 250, protein: "6g", fats: "5g", carbs: "40g" },
      recipe: "Boil vegetables with stock and serve with toasted bread.",
      ingredients: ["Carrots", "Beans", "Peas", "Vegetable stock", "Bread"],
      image: "/images/dinner/Vegetable_Soup.jpg"
    }
  ]
},
{
  title: "Snack",
  description: "Quick, healthy snacks for energy boosts.",
  items: [
    {
      id: 1,
      name: "Sprouts Salad",
      nutrients: { calories: 180, protein: "12g", fats: "2g", carbs: "25g" },
      recipe: "Mix sprouts with onion, tomato, lemon, and spices.",
      ingredients: ["Sprouts", "Onion", "Tomato", "Lemon", "Chili powder"],
      image: "/images/snack/Sprouts-salad.jpg"
    },
    {
      id: 2,
      name: "Peanut Chikki",
      nutrients: { calories: 210, protein: "6g", fats: "10g", carbs: "28g" },
      recipe: "Melt jaggery, add roasted peanuts, and set into bars.",
      ingredients: ["Peanuts", "Jaggery", "Ghee"],
      image: "/images/snack/Peanut-chikki.jpg"
    },
    {
      id: 3,
      name: "Fruit Bowl",
      nutrients: { calories: 150, protein: "2g", fats: "1g", carbs: "35g" },
      recipe: "Cut seasonal fruits and mix with a pinch of chaat masala.",
      ingredients: ["Apple", "Banana", "Papaya", "Orange", "Pomegranate"],
      image: "/images/snack/Fruit_Bowl.png"
    },
    {
      id: 4,
      name: "Roasted Chana",
      nutrients: { calories: 120, protein: "6g", fats: "3g", carbs: "20g" },
      recipe: "Dry roast chana and season with salt and pepper.",
      ingredients: ["Chana", "Salt", "Pepper"],
      image: "/images/snack/Salted-chana.jpg"
    },
    {
      id: 5,
      name: "Yogurt with Berries",
      nutrients: { calories: 160, protein: "6g", fats: "4g", carbs: "28g" },
      recipe: "Mix yogurt with fresh seasonal berries.",
      ingredients: ["Yogurt", "Blueberries", "Strawberries", "Honey"],
      image: "/images/snack/Yogurt_with_berries.jpg"
    }
  ]
}
];
export interface DietItem {
  name: string;
  image: string;
  nutrients: {
    calories: number;
    protein: string;
    carbs: string;
    fats: string;
  };
  ingredients: string[];
  recipe: string;
}