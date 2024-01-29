import Image from "next/image";
import ModalImage from "@/app/(components)/modal_image";
import CircleImage from "@/app/(components)/circle_image";
import ParallaxCircleImage from "@/app/(components)/parallax_circle_image";

import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg";
import beach_cliff from "../../../public/images/beach_cliff.jpg";
import river from "../../../public/images/river.jpg";
import la_jolla_seals from "../../../public/images/la_jolla_seals.jpg";
import yosemite from "../../../public/images/yosemite.jpg";
import devils_slide from "../../../public/images/devils_slide.jpg";
import paraglider from "../../../public/images/paraglider.jpg";
import drone_shore from "../../../public/images/drone_shore.jpg";
import chimney_cow from "../../../public/images/chimney_cow.jpg";
import squirrel from "../../../public/images/squirrel.jpg";

const PreviewImages = () => {
  return (
    <div className="min-h-[60rem]">
      <div className="my-10 flex min-h-[30rem] w-screen flex-col md:flex-row items-center justify-center">
        <ParallaxCircleImage
          src={la_jolla_seals}
          alignment="justify-self-end self-center md:self-end"
        />
        <div className="relative h-[12rem] w-[12rem] self-end justify-self-center rounded-full">
          <Image
            src={river}
            fill={true}
            alt="Seals"
            className="object-cover rounded-full"
          />
        </div>
        <ParallaxCircleImage src={beach_cliff} alignment="self-center" />
      </div>
      <div className="my-10 flex min-h-[30rem] w-screen flex-col md:flex-row flex-wrap items-center justify-center">
        <div className="relative h-[10rem] w-[10rem] self-start rounded-full">
          <Image
            src={chimney_cow}
            fill={true}
            alt="Seals"
            className="object-cover rounded-full"
          />
        </div>
        <ParallaxCircleImage src={lifeguard_tower} alignment="self-center md:self-start justify-self-center" />
        <div className="relative h-[8rem] w-[8rem] self-start md:self-center md:justify-self-center rounded-full">
          <Image
            src={squirrel}
            fill={true}
            alt="Seals"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewImages;
