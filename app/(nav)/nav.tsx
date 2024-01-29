"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { LuHome, LuUser2, LuSquareStack, LuLink2 } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ThemeButton from "../(components)/theme_button";
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

export default function NavBar({
  path = "intro",
}: {
  path: string | undefined;
}) {
  const router = useRouter();
  const [tooltipVisibility, setTooltipVisibility] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleTooltipVisibility = (index: number, isVisible: boolean) => {
    setTooltipVisibility((prev) => {
      const temp = [...prev];
      temp[index] = isVisible;
      return temp;
    });
  };

  return (
    <div className="[&_*]:transition-all [&_*]:ease-linear top-0 z-20 flex h-24 w-screen items-center justify-between px-8">
      <div className="flex flex-row items-center justify-start">
        <Link href={`/intro`}>
          <Title />
        </Link>
      </div>
      <ThemeButton />
      <div className="flex flex-row items-center">
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
              href={`/${item.slug}`}
              scroll={false}
            >
              <div className="text-md neo rounded-xl px-4 py-2">
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
      </div>
    </div>
  );
}
