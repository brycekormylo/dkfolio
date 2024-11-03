import ModalImage from "@/app/(components)/modal_image";
import { ImageData } from "@/context/image-provider";

type ImageProps = {
  images: ImageData[];
};

const LandscapeRow = ({ images }: ImageProps) => {
  return (
    <div className="flex gap-1 justify-center w-screen h-auto md:gap-4">
      {images.map((image, i) => {
        return (
          <div key={i}>
            <ModalImage
              src={image.url}
              className="relative aspect-[3/2] w-[45.5vw]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default LandscapeRow;
