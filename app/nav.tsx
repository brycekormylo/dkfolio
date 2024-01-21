"use client";

import { LuHome, LuUser2, LuSquareStack, LuLink2 } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ThemeButton from "./(components)/theme_button";

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
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleTooltipVisibility = (index: number, isVisible: boolean) => {
    setTooltipVisibility((prev) => {
      const temp = [...prev];
      temp[index] = isVisible;
      return temp;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      const observer = new IntersectionObserver(
        (entries) => {
          let maxVisibleRatio = 0;
          let activeSectionId = null;

          entries.forEach((entry) => {
            const visibleRatio = Math.min(1, entry.intersectionRatio);

            if (visibleRatio > maxVisibleRatio) {
              maxVisibleRatio = visibleRatio;
              activeSectionId = entry.target.id;
            }
          });
          setActiveSection(activeSectionId);
        },
        { threshold: 0.9 }
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top-0 z-20 flex h-24 w-screen items-center justify-between px-8">
      <div className="flex flex-row justify-start items-center">
        <button onClick={() => router.push(`/intro`)}>
          <div className="neo rounded-xl px-4 py-2 text-3xl uppercase">
            <p>Kormylo Photography</p>
          </div>
        </button>
        <ThemeButton />
      </div>
      <div className="flex flex-row items-center">
        {NavbarItems.map((item, index) => {
          return (
            <button
              key={index}
              className={`${
                activeSection === item.slug
                  ? "border-myrtle bg-space-gray"
                  : "border-transparent"
              }`}
              onMouseLeave={() => handleTooltipVisibility(index, false)}
              onMouseEnter={() => handleTooltipVisibility(index, true)}
              onClick={() => router.push(`/${item.slug}`, { scroll: false })}
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
            </button>
          );
        })}
      </div>
    </div>
  );
}
