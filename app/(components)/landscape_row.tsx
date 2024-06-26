"use client";

import { StaticImageData } from "next/image";
import ModalImage from "@/app/(components)/modal_image";

type ImageProps = {
  images: StaticImageData[];
};

const LandscapeRow: React.FC<ImageProps> = ({ images }) => {
  return (
    <div className="flex justify-center h-auto w-screen gap-1 md:gap-4">
      {images.map((image, i) => {
        return (
          <div key={i}>
            <ModalImage src={image} className="relative aspect-[7/5] w-[45.5vw]" />
          </div>
        );
      })}
    </div>
  );
};

export default LandscapeRow;
