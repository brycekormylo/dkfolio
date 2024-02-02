"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";

type ImageProps = {
  src: StaticImageData;
  alignment: string;
};

const CircleImage: React.FC<ImageProps> = ({ src, alignment }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        transition: "all 0.3s",
        clipPath: `circle(${isHovered ? "33%" : "30%"} at 50%)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${alignment} relative aspect-[1/1] ${
        isHovered ? "h-[40rem] w-[40rem]" : "h-[28rem] w-[28rem]"
      }`}
    >
      <Image
        src={src}
        fill={true}
        className={`object-contain`}
        alt="Portfolio Image"
      />
    </div>
  );
};

export default CircleImage;
