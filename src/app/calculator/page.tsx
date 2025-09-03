"use client";
import { useState } from "react";

const tabs = [
  "BMI",
  "Calorie Burn",
  "One-Rep Max",
  "Protein Intake",
  "Macro Calculator",
  "Calorie Calculator",
];

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState("BMI");

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold pt-15 mb-6 text-center">
        Fitness & Gym Calculators
      </h1>

      {/* Tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 min-w-max px-2 sm:justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg shadow-md whitespace-nowrap transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-lg mx-auto bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
        {activeTab === "BMI" && <BMICalculator />}
        {activeTab === "Calorie Burn" && <CalorieBurnCalculator />}
        {activeTab === "One-Rep Max" && <OneRepMaxCalculator />}
        {activeTab === "Protein Intake" && <ProteinCalculator />}
        {activeTab === "Macro Calculator" && <MacroCalculator />}
        {activeTab === "Calorie Calculator" && <CalorieCalculator />}
      </div>
    </div>
  );
}


/* ---------------- BMI ---------------- */
function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const bmi =
    weight && height
      ? (Number(weight) / ((Number(height) / 100) ** 2)).toFixed(1)
      : null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">BMI Calculator</h2>
      <p className="text-gray-600 mb-4">
        Body Mass Index (BMI) estimates body fat using height and weight. A
        healthy range is usually 18.5 – 24.9.
      </p>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full border p-2 rounded"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          className="w-full border p-2 rounded"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      {bmi && (
        <p className="mt-4 font-medium">
          Your BMI: {bmi}{" "}
          {Number(bmi) < 18.5
            ? "Underweight"
            : Number(bmi) < 25
            ? "Normal"
            : Number(bmi) < 30
            ? "Overweight"
            : "Obese"}
        </p>
      )}
      
      <p className="mt-4 text-sm text-gray-500">
        💡 Suggestion: For underweight, include calorie-dense foods like nuts &
        avocados. For overweight, focus on cardio & portion control.
      </p>
    </div>
  );
}

/* ---------------- Calorie Burn ---------------- */
function CalorieBurnCalculator() {
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");
  const [exercise, setExercise] = useState("");

  // Exercise options with MET values
  const exercises:Record<string, number> =  {
    "Walking (slow)": 2.8,
    "Walking (brisk)": 3.8,
    Running: 9,
    "Running (fast)": 11.5,
    Cycling: 8,
    "Cycling (vigorous)": 10,
    "Jump Rope": 12,
    "Push-ups": 8,
    "Pull-ups": 8,
    Squats: 5,
    "Weight Training": 6,
    "Yoga (light)": 2.5,
    "Swimming (moderate)": 6,
    "Swimming (fast)": 9.5,
    "Football / Soccer": 10,
    Basketball: 8,
    Tennis: 7.3,
    "Dancing (fast)": 7.8,
    "Household chores": 3.5,
  };

  const selectedMet = exercise ? exercises[exercise] : null;

  // Formula: Calories burned = MET × weight (kg) × duration (hours)
  const calories =
    weight && duration && selectedMet
      ? (selectedMet * Number(weight) * (Number(duration) / 60)).toFixed(1)
      : null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Calorie Burn Calculator</h2>
      <p className="text-gray-600 mb-4">
        Select your exercise, enter your weight and duration, and we’ll calculate the calories burned.  
        Formula used: <b>Calories = MET × Weight (kg) × Duration (hours)</b>.
      </p>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full border p-2 rounded"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          className="w-full border p-2 rounded"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <select
          className="w-full border p-2 rounded"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        >
          <option value="">Select Exercise</option>
          {Object.keys(exercises).map((ex) => (
            <option key={ex} value={ex} className=" text-black">
              {ex}
            </option>
          ))}
        </select>
      </div>

      {calories && (
        <p className="mt-4 font-medium">
          Calories Burned: {calories} kcal <br />
          Exercise: {exercise} (MET: {selectedMet})
        </p>
      )}

      <p className="mt-4 text-sm text-gray-500">
        💡 Tip: Choose the activity closest to what you’re doing.  
        Example: Walking (3–4 METs), Running (9–12 METs), Jump rope (12 METs).
      </p>
    </div>
  );
}

/* ---------------- One-Rep Max ---------------- */
function OneRepMaxCalculator() {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  // Epley formula: 1RM = weight × (1 + reps/30)
  const oneRepMax =
    weight && reps
      ? (Number(weight) * (1 + Number(reps) / 30)).toFixed(1)
      : null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">One-Rep Max (1RM)</h2>
      <p className="text-gray-600 mb-4">
        1RM is the maximum weight you can lift for one repetition. This helps
        set training loads (e.g., 70% of 1RM for hypertrophy).
      </p>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Weight lifted (kg)"
          className="w-full border p-2 rounded"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Reps performed"
          className="w-full border p-2 rounded"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>

      {oneRepMax && (
        <p className="mt-4 font-medium">Estimated 1RM: {oneRepMax} kg</p>
      )}

      <p className="mt-4 text-sm text-gray-500">
        💡 Suggestion: Use 60–80% of 1RM for muscle growth, 85–95% for strength.
      </p>
    </div>
  );
}

/* ---------------- Protein Intake ---------------- */
function ProteinCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const activityMultipliers: any = {
  sedentary: [1.2, 1.6],
  moderate: [1.6, 2.0],
  athlete: [2.0, 2.5],
};


  // Protein: 1.6–2.2 g per kg body weight
  const [minMultiplier, maxMultiplier] = activityMultipliers[activity];
const proteinMin = weight ? (Number(weight) * minMultiplier).toFixed(1) : null;
const proteinMax = weight ? (Number(weight) * maxMultiplier).toFixed(1) : null;

  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Protein Intake Calculator</h2>
      <p className="text-gray-600 mb-4">
        Protein is essential for muscle growth and repair. Recommended intake
        for active people is <b>1.6–2.2 g per kg</b> of body weight.
      </p>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full border p-2 rounded"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <select
  className="w-full border p-2 rounded"
  value={activity}
  onChange={(e) => setActivity(e.target.value)}
>
  <option value="sedentary" className="text-black">Sedentary (little/no exercise)</option>
  <option value="moderate" className="text-black">Moderate (3-4 workouts/week)</option>
  <option value="athlete" className="text-black">Athlete (intense training)</option>
</select>

      </div>

      {proteinMin && proteinMax && (
        <p className="mt-4 font-medium">
          Daily Protein: {proteinMin} – {proteinMax} g
        </p>
      )}

      <p className="mt-4 text-sm text-gray-500">
        🍗 Food sources: Chicken, eggs, lentils, tofu, fish, whey protein.
      </p>
    </div>
  );
}

/* ---------------- Macro Calculator ---------------- */
function MacroCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2"); // sedentary default
  const [goal, setGoal] = useState("maintain");

  // Macro split % based on goal
  const splits: any = {
    maintain: { protein: 30, carbs: 40, fats: 30 },
    cut: { protein: 40, carbs: 30, fats: 30 },
    bulk: { protein: 25, carbs: 50, fats: 25 },
  };

  // Calculate BMR using Mifflin-St Jeor
  const calcBMR = () => {
    if (!weight || !height || !age) return 0;
    let bmr =
      10 * parseFloat(weight) +
      6.25 * parseFloat(height) -
      5 * parseFloat(age) +
      (gender === "male" ? 5 : -161);
    return bmr * parseFloat(activity); // TDEE
  };

  const calories = calcBMR();
  const macros = splits[goal];

  // Convert % to grams (protein=4, carbs=4, fats=9 kcal/g)
  const grams = calories
    ? {
        protein: ((calories * (macros.protein / 100)) / 4).toFixed(0),
        carbs: ((calories * (macros.carbs / 100)) / 4).toFixed(0),
        fats: ((calories * (macros.fats / 100)) / 9).toFixed(0),
      }
    : null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Macro Calculator</h2>
      <p className="text-gray-600 mb-4">
        Enter your details to calculate daily calories and macronutrient needs
        based on your goal.
      </p>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full border p-2 rounded"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          className="w-full border p-2 rounded"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age (years)"
          className="w-full border p-2 rounded"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select
          className="w-full border p-2 rounded"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male" className="text-black">Male</option>
          <option value="female" className="text-black">Female</option>
        </select>

        <select
          className="w-full border p-2 rounded"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="1.2" className="text-black">Sedentary (little/no exercise)</option>
          <option value="1.375" className="text-black">Lightly active (1-3 days/wk)</option>
          <option value="1.55" className="text-black">Moderately active (3-5 days/wk)</option>
          <option value="1.725" className="text-black">Very active (6-7 days/wk)</option>
          <option value="1.9" className="text-black">Super active (hard exercise/physical job)</option>
        </select>

        <select
          className="w-full border p-2 rounded"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="maintain" className="text-black">Maintain</option>
          <option value="cut" className="text-black">Cut (Fat Loss)</option>
          <option value="bulk" className="text-black">Bulk (Muscle Gain)</option>
        </select>
      </div>

      {grams && (
        <div className="mt-4">
          <p className="font-medium">Estimated Calories: {calories.toFixed(0)} kcal/day</p>
          <p className="font-medium mt-2">
            Macro Split → {macros.protein}% Protein, {macros.carbs}% Carbs, {macros.fats}% Fats
          </p>
          <p className="mt-2">
            🍗 Protein: {grams.protein}g <br />
            🍚 Carbs: {grams.carbs}g <br />
            🥑 Fats: {grams.fats}g
          </p>
        </div>
      )}

      <p className="mt-4 text-sm text-gray-500">
        🥗 Example foods:  
        Protein → Chicken, eggs, beans  
        Carbs → Rice, oats, fruits  
        Fats → Olive oil, nuts, avocado
      </p>
    </div>
  );
}

/* ---------------- Calorie Calculator ---------------- */
function CalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");

  // Mifflin-St Jeor BMR
  const bmr =
    weight && height && age
      ? gender === "male"
        ? 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5
        : 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161
      : null;

  const calories = bmr ? (bmr * Number(activity)).toFixed(0) : null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Calorie Calculator</h2>
      <p className="text-gray-600 mb-4">
        Calculates daily calories using{" "}
        <b>Mifflin-St Jeor equation</b>, adjusted for activity level.
      </p>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full border p-2 rounded"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          className="w-full border p-2 rounded"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age (years)"
          className="w-full border p-2 rounded"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select
          className="w-full border p-2 rounded"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          className="w-full border p-2 rounded"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="1.2">Sedentary (little/no exercise)</option>
          <option value="1.375">Lightly active (1-3 days/week)</option>
          <option value="1.55">Moderately active (3-5 days/week)</option>
          <option value="1.725">Very active (6-7 days/week)</option>
          <option value="1.9">Super active (twice daily training)</option>
        </select>
      </div>

      {calories && (
        <p className="mt-4 font-medium">
          Maintenance Calories: {calories} kcal/day
        </p>
      )}

      <p className="mt-4 text-sm text-gray-500">
        🍽️ Suggestion: To lose weight, eat ~500 kcal less. To gain weight, eat
        ~300–500 kcal more.  
        Food choices: lean protein, complex carbs, veggies.
      </p>
    </div>
  );
}
