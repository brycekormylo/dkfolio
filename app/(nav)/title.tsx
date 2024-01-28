"use client";

import React, {useEffect} from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useTheme } from "next-themes";


const Title = () => {
  const { theme, setTheme } = useTheme();
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
    if (rive) {``
      rive.play(theme === "dark" ? "dark" : "light");
    }
  }, [rive, theme]);
  
  return (
    <div className="neo flex items-center justify-center rounded-xl px-4 py-2 ">
      <p className="-me-0 text-3xl uppercase">Kormylo Phot</p>
      <RiveComponent
        className="h-12 w-12"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      />
      <p className="-ms-0 text-3xl uppercase">graphy</p>
    </div>
  );
};

export default Title;
