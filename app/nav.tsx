"use client";

import { LuHome, LuUser2, LuSquareStack, LuLink2 } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NavbarItems = [
  {
    name: "About Us",
    slug: "about",
    icon: LuHome,
  },
  {
    name: "Portfolio",
    slug: "portfolio",
    icon: LuUser2,
  },
  {
    name: "Projects",
    slug: "projects",
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
    <div className="top-0 z-20 flex h-24 w-screen items-center justify-between bg-timber px-8 [&_*]:transition-all [&_*]:ease-linear">
      <button onClick={() => router.push(`/intro`)}>
        <div className="text-3xl uppercase hover:scale-[1.02] hover:shadow-neo px-4 py-2 rounded-xl">
          <p>Kormylo Photography</p>
        </div>
      </button>
      <div className="flex flex-row">
        {NavbarItems.map((item, index) => {
          return (
            <button
              key={index}
              className={`relative flex h-full w-full items-center justify-center rounded-xl border-[1.4px] p-1 duration-300 ease-in-out md:border-2 md:p-2 ${
                activeSection === item.slug
                  ? "border-myrtle bg-space-gray"
                  : "border-transparent "
              }`}
              onMouseLeave={() => handleTooltipVisibility(index, false)}
              onMouseEnter={() => handleTooltipVisibility(index, true)}
              onClick={() => router.push(`/${item.slug}`)}
            >
              <div className="text-md md:text-md flex flex-col rounded-xl px-4 py-2 hover:scale-[1.02] hover:shadow-neo">
                {item.slug == "contact" ? (
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate uppercase">{item.name}</p>
                    <p className="wave self-center">👋🏼</p>
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
