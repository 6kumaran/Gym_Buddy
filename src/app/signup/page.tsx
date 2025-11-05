"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
import Link from "next/link";

export default function AuthDialog() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getSession() {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    }
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => setUser(session?.user ?? null)
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage("User not found or wrong password");
    else setMessage("Login successful!");
  }

  async function handleRegister() {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) setMessage(error.message);
    else setMessage("Registered successfully! Please confirm your email.");
  }

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  }

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50 transition-all duration-300">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 w-[400px] relative shadow-2xl border border-white/30">
        <Link href="/">
          <button className="absolute top-2 right-3 text-gray-500 text-lg hover:text-black transition">
            ✕
          </button>
        </Link>

        <h2 className="text-2xl font-bold mb-6 text-black text-center">
          {isRegister ? "Register" : "Log in"}
        </h2>

        {/* Google Sign-In */}
        <button
          onClick={signInWithGoogle}
          className="w-full border border-gray-300 py-2 rounded mb-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <span>🔗</span> Continue with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {isRegister && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full p-2 mb-3 rounded text-black bg-white/60 backdrop-blur-sm placeholder-gray-500"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 mb-3 rounded text-black bg-white/60 backdrop-blur-sm placeholder-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 mb-3 rounded text-black bg-white/60 backdrop-blur-sm placeholder-gray-500"
        />

        {isRegister && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border w-full p-2 mb-3 rounded text-black bg-white/60 backdrop-blur-sm placeholder-gray-500"
          />
        )}

        {message && <p className="text-red-500 mb-3">{message}</p>}

        {!isRegister ? (
          <>
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center gap-2 text-sm text-black">
                <input type="checkbox" className="accent-blue-600" /> Remember Me
              </label>
              <button className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </button>
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-green-600 text-white py-2 rounded mb-3 hover:bg-green-700 transition"
            >
              Sign In
            </button>
            <p className="text-sm text-center text-black">
              New user?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => {
                  setIsRegister(true);
                  setMessage("");
                }}
              >
                Register Now
              </span>
            </p>
          </>
        ) : (
          <>
            <button
              onClick={handleRegister}
              className="w-full bg-green-600 text-white py-2 rounded mb-3 hover:bg-green-700 transition"
            >
              Register
            </button>
            <p className="text-sm text-center text-black">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => {
                  setIsRegister(false);
                  setMessage("");
                }}
              >
                Sign In
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
