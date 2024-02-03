"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeButton from "../(components)/theme_button";
import { motion } from "framer-motion";
import Title from "./title";
import { useTheme } from "next-themes";
import {
  useRive,
  Layout,
  Fit,
  Alignment,
  useStateMachineInput,
} from "@rive-app/react-canvas";

const NavbarItems = [
  {
    name: "About Us",
    slug: "about",
  },
  {
    name: "Portfolio",
    slug: "portfolio/film",
  },
  {
    name: "Projects",
    slug: "projects/lilly",
  },
  {
    name: "Store",
    slug: "store",
  },
  {
    name: "Contact Us",
    slug: "contact",
  },
];

export default function MobileNavBar() {
  const [isExtended, setExtended] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const { rive, RiveComponent } = useRive({
    src: "/riv/menuicon.riv",
    stateMachines: "default",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const extendInput = useStateMachineInput(rive, "default", "extend", false);
  const themeInput = useStateMachineInput(
    rive,
    "default",
    "dark",
    theme === "dark"
  );

  const handleClick = () => {
    setExtended(!isExtended);
    if (extendInput) {
      extendInput.value = !isExtended;
    }
  };

  useEffect(() => {
    if (themeInput) {
      themeInput.value = theme === "dark";
    }
  }, [theme, themeInput]);

  return (
    <div className="flex h-auto w-screen flex-col items-center overflow-hidden px-8 pt-4">
      <div className="z-20 flex flex-col items-center justify-start px-2 py-4">
        <Link href={`/intro`}>
          <Title />
        </Link>
        <div className="flex w-screen flex-row items-start justify-between px-4 pt-4">
          <ThemeButton />
          <div
            onClick={handleClick}
            className="neo z-20 flex aspect-square min-h-10 min-w-10 items-center justify-center rounded-full"
          >
            <RiveComponent className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isExtended ? 200 : 0, opacity: isExtended ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
        className={`${
          isExtended ? "block" : "hidden"
        } absolute right-0 top-0 z-50 me-2 mt-[7rem] flex flex-col items-end justify-start rounded-xl bg-timber p-2 shadow-neo dark:bg-smoke dark:shadow-neodark`}
      >
        {NavbarItems.map((item, index) => {
          return (
            <Link
              key={index}
              onClick={handleClick}
              href={`/${item.slug}`}
              scroll={false}
            >
              <div className="neo rounded-xl px-3 py-2 text-sm">
                {item.slug == "contact" ? (
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate uppercase">{item.name}</p>
                    <p className="wave">👋🏼</p>
                  </div>
                ) : (
                  <p className="truncate uppercase">{item.name}</p>
                )}
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
