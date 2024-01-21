import Image from "next/image";
import ModalImage from "@/app/(components)/modal_image";
import CircleImage from "@/app/(components)/circle_image";
import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg";
import beach_cliff from "../../../public/images/beach_cliff.jpg";
import river from "../../../public/images/river.jpg";
import la_jolla_seals from "../../../public/images/la_jolla_seals.jpg";
import yosemite from "../../../public/images/yosemite.jpg";
import devils_slide from "../../../public/images/devils_slide.jpg";
import mussel_paraglider from "../../../public/images/mussel_paraglider.jpg";

const PreviewImages = () => {
  return (
    <div className="min-h-[60rem]">
      <div className="my-10 min-h-[30rem] w-screen flex flex-row items-center justify-center">
        <CircleImage src={la_jolla_seals} alignment="justify-self-end self-end" />
        <div className="relative h-[12rem] w-[12rem] self-end justify-self-center rounded-full">
          <Image
            src={yosemite}
            fill={true}
            alt="Seals"
            className="rounded-full object-cover"
          />
        </div>
        <CircleImage src={beach_cliff} alignment="self-center" />
      </div>
      <div className="my-10 min-h-[30rem] flex flex-row flex-wrap w-screen items-center justify-center">
        <div className="relative h-[10rem] w-[10rem] rounded-full self-start">
          <Image
            src={devils_slide}
            fill={true}
            alt="Seals"
            className="rounded-full object-cover"
          />
        </div>
        <CircleImage src={river} alignment="self-start justify-self-center" />
        <div className="relative h-[8rem] w-[8rem] rounded-full self-center justify-self-center">
          <Image
            src={mussel_paraglider}
            fill={true}
            alt="Seals"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewImages;
