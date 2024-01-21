"use client";

import React from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <div className="bg-gray-800 neo ml-2 flex h-12 w-12 justify-center rounded-full items-center">
        {theme === "dark" ? <LuSun size={20} /> : <LuMoon size={20} />}
      </div>
    </button>
  );
};

export default ThemeButton;
