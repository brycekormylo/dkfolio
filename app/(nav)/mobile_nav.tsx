"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeButton from "../(components)/theme_button";
import { motion } from "framer-motion";
import Title from "./title";
import { useTheme } from "next-themes";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

const NavbarItems = [
  {
    name: "About Us",
    slug: "about"
  },
  {
    name: "Portfolio",
    slug: "portfolio/film"
  },
  {
    name: "Projects",
    slug: "projects/lilly"
  },
  {
    name: "Store",
    slug: "store"
  },
  {
    name: "Contact Us",
    slug: "contact"
  },
];

export default function MobileNavBar() {

  const [isExtended, setExtended] = useState<Boolean>(false);
  const [animation, setAnimation] = useState("");
  const { theme } = useTheme();
  const { rive, RiveComponent } = useRive({
    src: "menuicon.riv",
    artboard: "main",
    autoplay: true,
    animations: animation,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  useEffect(() => {
    setAnimation(theme === "dark" ? "xmenudark" : "xmenu");
   }, [theme]);

  useEffect(() => {
    if (rive) {
      rive.play(
        isExtended
          ? theme === "dark"
            ? "menuxdark"
            : "menux"
          : theme === "dark"
          ? "xmenudark"
          : "xmenu"
      );
    }
  }, [rive, theme, isExtended]);

  const handleClick = () => {
    setExtended(!isExtended);
  };

  return (
    <div className="flex h-auto w-screen flex-col items-center overflow-hidden px-8">
      <div className="z-20 flex flex-col items-center justify-start px-2 py-4">
        <Link href={`/intro`}>
          <Title />
        </Link>
        <div className="flex w-screen flex-row items-start justify-between px-2">
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
        className={`${isExtended ? "block" : "hidden"} absolute right-0 top-0 z-50 me-2 mt-[7rem] flex flex-col items-end justify-start rounded-xl bg-timber p-2 shadow-neo dark:bg-smoke dark:shadow-neodark`}
      >
        {NavbarItems.map((item, index) => {
          return (
            <Link
              key={index}
              onClick={() => setExtended(false)}
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
