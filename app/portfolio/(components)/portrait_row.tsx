"use client";

import { StaticImageData } from "next/image";
import ModalImage from "@/app/(components)/modal_image";

type ImageProps = {
  images: StaticImageData[];
};

const PortraitRow: React.FC<ImageProps> = ({ images }) => {
  return (
    <div className="flex h-[44rem] w-screen justify-center px-10">
      {images.map((image, i) => {
        return (
          <div key={i} className="relative aspect-[7/5] w-[50%]">
            <ModalImage src={image} />
          </div>
        );
      })}
    </div>
  );
};

export default PortraitRow;
