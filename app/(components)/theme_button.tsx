"use client";

import React, { useState, useEffect } from "react";
import Rive, {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

const delay = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const { rive, RiveComponent } = useRive({
    src: "themeicon.riv",
    artboard: "main",
    // animations: theme === "dark" ? "sunset" : "sunrise",
    autoplay: false,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  useEffect(() => {
    if (rive) {
      rive.play(theme === "dark" ? "sunset" : "sunrise");
    }
  }, [rive, theme]);
  

  const handleHover = (entered: Boolean) => {
    if (rive) {
      entered
        ? rive.play(theme === "dark" ? "nightidle" : "dayidle")
        : rive.pause(theme === "dark" ? "nightidle" : "dayidle");
    }
  };

  const handleThemeToggle = async () => {
    if (rive) {
      if (theme === "dark") {
        rive.play("sunrise");
      } else {
        rive.play("sunset");
      }
    }
    await delay(800);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className="bg-gray-800 neo ml-2 flex h-10 w-10 items-center justify-center rounded-full md:h-12 md:w-12"
    >
      <RiveComponent className="h-8 w-8" onClick={handleThemeToggle} />
    </div>
  );
};

export default ThemeButton;

{
  /* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
<div className="bg-gray-800 neo ml-2 flex h-10 w-10 items-center justify-center rounded-full md:h-12 md:w-12">
  {theme === "dark" ? (
    <div className="flex">
      <LuSun className="md:h-5 md:w-5" />
    </div>
  ) : (
    <div className="flex">
      <LuMoon className="md:h-5 md:w-5" />
    </div>
    
  )}
</div>
</button> */
}
