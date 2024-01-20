import Image from "next/image";
import ModalImage from "@/app/(components)/modal_image";
import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg";
import beach_cliff from "../../../public/images/beach_cliff.jpg";
import river from "../../../public/images/river.jpg";
import la_jolla_seals from "../../../public/images/la_jolla_seals.jpg";
import yosemite from "../../../public/images/yosemite.jpg";
import devils_slide from "../../../public/images/devils_slide.jpg";
import mussel_paraglider from "../../../public/images/mussel_paraglider.jpg";

const PreviewImages = () => {
  return (
    <div className="my-10 grid w-screen grid-cols-3 gap-2">
      <div className="flex flex-col gap-2">
        <div className="relative aspect-[3/2] w-full">
          <ModalImage src={yosemite} />
        </div>
        <div className="relative aspect-[2/3] w-full">
          <ModalImage src={la_jolla_seals} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative aspect-[2/3] w-full">
          <ModalImage src={beach_cliff} />
        </div>
        <div className="relative aspect-[3/2] w-full">
          <ModalImage src={devils_slide} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative aspect-[3/2] w-full">
          <ModalImage src={mussel_paraglider} />
        </div>
        <div className="relative aspect-[2/3] w-full">
          <ModalImage src={river} />
        </div>
      </div>
    </div>
  );
};

export default PreviewImages;
