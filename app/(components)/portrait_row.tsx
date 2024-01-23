"use client";

import { StaticImageData } from "next/image";
import ModalImage from "@/app/(components)/modal_image";

type ImageProps = {
  images: StaticImageData[];
};

const PortraitRow: React.FC<ImageProps> = ({ images }) => {
  return (
    <div className="flex h-auto w-screen justify-center gap-1 md:gap-4">
      {images.map((image, i) => {
        return (
          <div key={i} className="relative aspect-[5/7] w-[30vw]">
            <ModalImage src={image} />
          </div>
        );
      })}
    </div>
  );
};

export default PortraitRow;
