'use client';

import React from 'react'
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from 'next-themes';

const ThemeButton = () => {
const { theme, setTheme } = useTheme();

  return (
    <div className="h-12 w-12 flex justify-center rounded-full ml-2 bg-gray-800 neo">
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <LuSun size={20} />
      ) : (
        <LuMoon size={20} />
      )}
    </button>
  </div>
  )
}

export default ThemeButton
