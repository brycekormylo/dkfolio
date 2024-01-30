"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

type ImageProps = {
  src: StaticImageData;
  speed?: number;
  height?: number;
  disabled?: Boolean;
};

const ParallaxCircleImage: React.FC<ImageProps> = ({
  src,
  speed = -15,
  height = 20,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    disabled ? {} : setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        transition: "all 0.3s",
        clipPath: `circle(${isHovered ? "58%" : "36%"} at 50% 50%)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="shadow-inner"
    >
      <Parallax speed={speed}>
        <div
          className={`relative aspect-[3/5] transition-all duration-300 ${
            isHovered ? "h-[32rem] md:h-[40rem]" : disabled ? `h-[${height}rem]` : "h-[24rem] md:h-[32rem]"
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