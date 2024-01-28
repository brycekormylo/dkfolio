"use client";

import {
  LuHome,
  LuUser2,
  LuSquareStack,
  LuLink2,
  LuMenu,
} from "react-icons/lu";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeButton from "../(components)/theme_button";
import { motion } from "framer-motion";
import Title from "./title";

const NavbarItems = [
  {
    name: "About Us",
    slug: "about",
    icon: LuHome,
  },
  {
    name: "Portfolio",
    slug: "portfolio/film",
    icon: LuUser2,
  },
  {
    name: "Projects",
    slug: "projects/lilly",
    icon: LuSquareStack,
  },
  {
    name: "Store",
    slug: "store",
    icon: LuLink2,
  },
  {
    name: "Contact Us",
    slug: "contact",
    icon: LuLink2,
  },
];

export default function MobileNavBar({
  path = "intro",
}: {
  path: string | undefined;
}) {
  const [tooltipVisibility, setTooltipVisibility] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setVisible] = useState<Boolean>(false);

  const handleTooltipVisibility = (index: number, isVisible: boolean) => {
    setTooltipVisibility((prev) => {
      const temp = [...prev];
      temp[index] = isVisible;
      return temp;
    });
  };

  return (
    <div className="top-0 flex h-auto w-screen flex-col items-center px-8">
      <div className="z-20 flex w-screen flex-row flex-wrap items-center justify-center py-4 px-2">
        <Link href={`/intro`}>
          <Title />
        </Link>
        <div className="flex flex-row w-screen justify-between items-center px-2">
          <ThemeButton />
          <button
            onClick={() => {
              isVisible ? setVisible(false) : setVisible(true);
            }}
            className="neo z-20 rounded-full flex justify-center items-center h-10 w-10 aspect-square"
          >
            <LuMenu className="h-5 w-5" />
          </button>
        </div>
      </div>
      <motion.div
        initial={{ translateX: 200}}
        animate={{translateX: isVisible ? 0 : 200}}
        transition={{type: "spring", stiffness: 100, damping: 16}}
        className={`absolute right-0 top-0 z-50 me-2 mt-[6rem] flex flex-col items-end justify-start rounded-xl bg-timber p-2 dark:bg-smoke shadow-neo dark:shadow-neodark`}
      >
        {NavbarItems.map((item, index) => {
          return (
            <Link
              key={index}
              className={`${
                activeSection === item.slug
                  ? "border-myrtle bg-space-gray"
                  : "border-transparent"
              }`}
              onMouseLeave={() => handleTooltipVisibility(index, false)}
              onMouseEnter={() => handleTooltipVisibility(index, true)}
              onClick={() => setVisible(false)}
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
