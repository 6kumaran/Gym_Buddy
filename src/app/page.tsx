"use client";
import Navbar from "../../components/Navbar";
import AuthButtons from "../../components/AuthButtons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <div className="shadow-sm bg-white flex justify-between items-center">
        <Navbar />
        <AuthButtons />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Personal Fitness Companion
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          Explore structured workout categories, track progress, and achieve
          your fitness goals — whether at the gym, home, or outdoors.
        </p>
        <Link
          href="/exercise"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Browse Exercises
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-16 max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Daywise Workouts</h3>
          <p className="text-gray-600">
            Push, pull, legs, and more — follow structured day plans to balance
            strength and recovery.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Train Anywhere</h3>
          <p className="text-gray-600">
            Choose from gym-based or home-friendly exercises with minimal to no
            equipment.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Custom Goals</h3>
          <p className="text-gray-600">
            Cut, bulk, strength training, or calisthenics — target your fitness
            journey the way you want.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">
          Ready to start your fitness journey?
        </h2>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition"
        >
          Join Now
        </Link>
      </section>
    </div>
  );
}
