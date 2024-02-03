"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useRef } from "react";

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
      className={`${alignment} relative aspect-[1/1] shadow-dark ${
        isHovered
          ? "h-[30irem] w-[30rem] md:h-[40rem] md:w-[40rem]"
          : "h-[24rem] w-[24rem] md:h-[28rem] md:w-[28rem]"
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
