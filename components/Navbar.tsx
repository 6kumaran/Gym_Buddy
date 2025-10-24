"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger icons
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-center py-5 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md bg-black/30" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center p-3 bg-white rounded-full shadow-lg w-[90%] max-w-5xl justify-between">
        {/* Logo or Name (Optional) */}
        <Link href="/" className="text-lg font-bold">
          FitLife
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-black">
          <Link href="/" onClick={() => setActiveTab("Home")} className={` px-2 py-1 rounded-lg whitespace-nowrap transition ${
                activeTab === "Home"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}><li>Home</li></Link>
          <Link href="/exercise" onClick={() => setActiveTab("Exercise")} className={`px-2 py-1 rounded-lg whitespace-nowrap transition ${
                activeTab === "Exercise"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}><li>Exercise</li></Link>
          <Link href="/calculator" onClick={() => setActiveTab("Calculator")} className={`px-2 py-1 rounded-lg whitespace-nowrap transition ${
                activeTab === "Calculator"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`} ><li>Calculator</li></Link>
          <Link href="/diet" onClick={() => setActiveTab("Diet")} className={`px-2 py-1 rounded-lg whitespace-nowrap transition ${
                activeTab === "Diet"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}><li>Diet</li></Link>
          <Link href="/diet/food-detector" onClick={() => setActiveTab("Macros")} className={`px-2 py-1 rounded-lg whitespace-nowrap transition ${
                  activeTab === "Macros"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}><li>Macros</li></Link>
          <Link href="/gallery" onClick={() => setActiveTab("Gallery")} className={`px-2 py-1 rounded-lg whitespace-nowrap transition ${
                activeTab === "Gallery"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}><li>Gallery</li></Link>
          <Link href="/community" onClick={() => setActiveTab("Community")} className={`px-2 py-1 rounded-lg whitespace-nowrap transition ${
                activeTab === "Community"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}><li>Community</li></Link>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:block">
          <AuthButtons />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg rounded-lg md:hidden p-6 space-y-4">
          <ul className="flex flex-col space-y-4 text-black text-lg">
            <Link href="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
            <Link href="/exercise" onClick={() => setIsOpen(false)}><li>Exercise</li></Link>
            <Link href="/calculator" onClick={() => setIsOpen(false)}><li>Calculator</li></Link>
            <Link href="/diet" onClick={() => setIsOpen(false)}><li>Diet</li></Link>
            <Link href="/diet/food-detector" onClick={() => setIsOpen(false)}><li>Macros</li></Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)}><li>Gallery</li></Link>
            <Link href="/community" onClick={() => setIsOpen(false)}><li>Community</li></Link>
          </ul>

          {/* Auth Buttons in Mobile Menu */}
          <div className="pt-4 border-t">
            <AuthButtons />
          </div>
        </div>
      )}
    </div>
  );
}
