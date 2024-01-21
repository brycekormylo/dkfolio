"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

type ImageProps = {
  src: StaticImageData;
  alignment: string;
  mini?: boolean;
};

const CircleImage: React.FC<ImageProps> = ({ src, alignment, mini = false }) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        transition: "all 0.3s",
        clipPath: mini ? `circle(${isHovered ? "34%" : "30%"} at 50%)` : `circle(${isHovered ? "48%" : "30%"} at 50% ${
          scrollPosition / 40
        }%)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${alignment} relative aspect-[3/5] rounded-md ${
        isHovered ? "h-[40rem] w-[40rem]" : "h-[28rem] w-[28rem]"
      }`}
    >
      <Image
        src={src}
        fill={true}
        className="object-contain rounded-md"
        alt="Portfolio Image"
      />
    </div>
  );
};

export default CircleImage;
