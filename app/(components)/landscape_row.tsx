import { StaticImageData } from "next/image";
import ModalImage from "@/app/(components)/modal_image";

type ImageProps = {
  images: StaticImageData[];
};

const LandscapeRow = ({ images }: ImageProps) => {
  return (
    <div className="flex h-auto w-screen justify-center gap-1 md:gap-4">
      {images.map((image, i) => {
        return (
          <div key={i}>
            <ModalImage
              src={image}
              className="relative aspect-[3/2] w-[45.5vw]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default LandscapeRow;
