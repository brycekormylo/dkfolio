"use client";

import { LuHome, LuUser2, LuSquareStack, LuLink2 } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NavbarItems = [
  {
    name: "Home",
    slug: "intro",
    icon: LuHome,
  },
  {
    name: "About",
    slug: "about",
    icon: LuUser2,
  },
  {
    name: "Projects",
    slug: "projects",
    icon: LuSquareStack,
  },
  {
    name: "Links",
    slug: "links",
    icon: LuLink2,
  },
  {
    name: "Contact",
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

      NavbarItems.forEach((item) => {
        const target = document.querySelector(`#${item.slug}`);
        if (target) {
          observer.observe(target);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 z-20 flex w-screen items-center justify-between px-5">
      <div className="text-3xl">
        <p>Kormylo Photography</p>
      </div>
      <div className="flex flex-row gap-2">
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
              onClick={() => router.push(`#${item.slug}`)}
            >
              <div className="flex flex-col p-2 text-lg md:text-2xl">
                <p>{item.name}</p>
                {tooltipVisibility[index] && (
                  <div className="h-[1px] w-full bg-smoke"></div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
