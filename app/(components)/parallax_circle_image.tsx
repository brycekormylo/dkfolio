"use client";

import Image, { StaticImageData } from "next/image";
import { off } from "process";
import { useState, useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";

type ImageProps = {
  src: StaticImageData;
  alignment: string;
};

const ParallaxCircleImage: React.FC<ImageProps> = ({ src, alignment }) => {
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
        clipPath: `circle(${isHovered ? "64%" : "36%"} at 50% 50%)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Parallax speed={-10}>
        <div
          style={{
            transition: "all 0.3s",
          }}
          className={`${alignment} relative aspect-[3/5] ${
            isHovered ? "h-[40rem]" : "h-[28rem]"
          }`}
        >
          <Image
            src={src}
            fill={true}
            alt="circle image"
            className={`object-fill`}
          />
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxCircleImage;
