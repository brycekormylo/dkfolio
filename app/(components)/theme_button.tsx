"use client";

import React from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <div className="bg-gray-800 neo ml-2 flex h-10 w-10 md:h-12 md:w-12 justify-center rounded-full items-center">
        {theme === "dark" ? <LuSun className="md:w-5 md:h-5" /> : <LuMoon className="md:w-5 md:h-5" />}
      </div>
    </button>
  );
};

export default ThemeButton;
