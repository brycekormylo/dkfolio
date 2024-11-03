import { StaticImageData } from "next/image";
import ModalImage from "@/app/(components)/modal_image";
import { ImageData } from "@/context/image-provider";

type ImageProps = {
  images: ImageData[];
};

const PortraitRow = ({ images }: ImageProps) => {
  return (
    <div className="flex gap-1 justify-center w-screen h-auto md:gap-4">
      {images.map((image, i) => {
        return (
          <div key={i}>
            <ModalImage
              src={image.url}
              className="relative aspect-[2/3] w-[30vw]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PortraitRow;
