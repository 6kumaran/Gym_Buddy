"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-1 rounded-full bg-foreground text-background w-8 h-8 cursor-pointer"
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: theme === "dark" ? 180 : 0 }}
      transition={{ duration: 0.4 }}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
}
