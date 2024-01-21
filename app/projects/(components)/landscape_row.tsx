"use client";

import { StaticImageData } from "next/image";
import ModalImage from "@/app/(components)/modal_image";

type ImageProps = {
  images: StaticImageData[];
};

const LandscapeRow: React.FC<ImageProps> = ({ images }) => {
  return (
    <div className="flex h-[30rem] w-screen gap-4 px-12">
      {images.map((image, i) => {
        return (
          <div key={i} className="relative aspect-[5/7] w-[50%]">
            <ModalImage src={image} />
          </div>
        );
      })}
    </div>
  );
};

export default LandscapeRow;
