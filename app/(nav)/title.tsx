"use client";

import React, { useEffect } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useTheme } from "next-themes";

const Title = () => {
  const { theme } = useTheme();
  const { rive, RiveComponent } = useRive({
    src: "camera.riv",
    artboard: "main",
    autoplay: true,
    animations: theme === "dark" ? "drawdark" : "drawlight",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const handleHover = (entered: Boolean) => {
    if (rive) {
      entered ? rive.play("idle") : rive.pause("idle");
    }
  };

  useEffect(() => {
    if (rive) {
      rive.play(theme === "dark" ? "dark" : "light");
    }
  }, [rive, theme]);

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className="neo flex flex-wrap items-center justify-start rounded-xl px-2 py-1 md:px-4 md:py-2 text-lg md:text-3xl uppercase"
    >
      <p className="-me-0">Kormylo Phot</p>
      <RiveComponent className="h-8 w-8 md:h-12 md:w-12" />
      <p className="-ms-0">graphy</p>
    </div>
  );
};

export default Title;
