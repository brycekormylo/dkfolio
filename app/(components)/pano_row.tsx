import { StaticImageData } from "next/image";
import ModalImage from "@/app/(components)/modal_image";

type ImageProps = {
  image: StaticImageData;
};

const PanoramaRow = ({ image }: ImageProps) => {
  return (
    <div className="flex h-auto w-screen justify-center gap-1 md:gap-4">
      <ModalImage src={image} className="relative aspect-[7/2] w-[92vw]" />
    </div>
  );
};

export default PanoramaRow;
