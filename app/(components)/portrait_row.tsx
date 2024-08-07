import { StaticImageData } from "next/image";
import ModalImage from "@/app/(components)/modal_image";

type ImageProps = {
  images: StaticImageData[];
};

const PortraitRow = ({ images }: ImageProps) => {
  return (
    <div className="flex h-auto w-screen justify-center gap-1 md:gap-4">
      {images.map((image, i) => {
        return (
          <div key={i}>
            <ModalImage
              src={image}
              className="relative aspect-[2/3] w-[30vw]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PortraitRow;
