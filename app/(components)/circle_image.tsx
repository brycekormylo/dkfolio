"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";

type ImageProps = {
  src: StaticImageData;
  alignment: string;
};

const CircleImage: React.FC<ImageProps> = ({
  src,
  alignment,
}) => {
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
        clipPath: `circle(${isHovered ? "33%" : "30%"} at 50%)`
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${alignment} relative aspect-[1/1] rounded-md ${
        isHovered ? "h-[40rem]" : "h-[28rem]"
      }`}
    >
      <div>
        <Image
          src={src}
          fill={true}
          className={`rounded-md object-contain`}
          alt="Portfolio Image"
        />
      </div>
    </div>
  );
};

export default CircleImage;
