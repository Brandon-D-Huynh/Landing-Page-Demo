"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 transition"
    >
      {currentTheme === "dark" ? (
        <BiSun className="text-white w-8 h-8 cursor-pointer"></BiSun>
      ) : (
        <BiMoon className="text-white w-8 h-8 cursor-pointer"></BiMoon>
      )}
    </button>
  );
};

export default ThemeToggle;
