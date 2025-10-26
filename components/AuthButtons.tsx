"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";


export default function AuthDialog() {


  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [showAccount, setShowAccount] = useState(false);

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
    else setIsOpen(false);
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
      data: { name }, // stores name in user_metadata
    },
  });

  if (error) setMessage(error.message);
  else setMessage("Registered successfully! Please confirm your mail to complete Registration!");
}


  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setShowAccount(false);
    window.location.reload();
  }

  return (
    <div>
      {!user ? (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-4 right-6 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign In
        </button>
      ) : (
        <div className="absolute top-4 right-6">
          <button
            onClick={() => setShowAccount(!showAccount)}
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden"
          >
            {user.user_metadata?.avatar_url ? (
              <Image
  src={user.user_metadata.avatar_url}
  alt="Avatar"
  width={100}
  height={100}
  className="w-full h-full object-cover cursor-pointer"
/>
            ) : (
              <span className="text-lg font-bold">
                {user.email?.[0].toUpperCase()}
              </span>
            )}
          </button>

          {showAccount && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg p-4 z-50">
              <p className="font-semibold text-black">{user.user_metadata?.full_name || "User"}</p>
              <p className="text-sm text-black">{user.email}</p>

              <hr className="my-2" />
              <p className="text-sm font-semibold mb-1 text-black">Settings</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm text-black">Theme</span>
                  <ThemeToggle/>
                </div>
                <button className="text-left text-black hover:underline">Language</button>
              </div>
              <hr className="my-2" />
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded cursor-pointer"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      )}

      {isOpen && !user && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[400px] relative shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 text-lg"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-black text-center">
              {isRegister ? "Register" : "Log in"}
            </h2>

            {/* OAuth buttons */}
            <button
              onClick={signInWithGoogle}
              className="w-full border border-gray-300 py-2 rounded mb-3 flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <span>🔗</span> Continue with Google
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="px-2 text-gray-500 text-sm">or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Manual form */}
            {isRegister && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border w-full p-2 mb-3 rounded text-black"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full p-2 mb-3 rounded text-black"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full p-2 mb-3 rounded text-black"
            />

            {isRegister && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border w-full p-2 mb-3 rounded text-black"
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
                  className="w-full bg-green-600 text-white py-2 rounded mb-3"
                >
                  Sign In
                </button>
                <p className="text-sm text-center text-black">
                  New user?{" "}
                  <span
                    className="text-blue-600 cursor-pointer"
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
                  className="w-full bg-green-600 text-white py-2 rounded mb-3"
                >
                  Register
                </button>
                <p className="text-sm text-center text-black">
                  Already have an account?{" "}
                  <span
                    className="text-blue-600 cursor-pointer"
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
      )}
    </div>
  );
}
