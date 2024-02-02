import ParallaxCircleImage from "@/app/(components)/parallax_circle_image";
import { Parallax } from "react-scroll-parallax";

import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg";
import beach_cliff from "../../../public/images/beach_cliff.jpg";
import river from "../../../public/images/river.jpg";
import la_jolla_seals from "../../../public/images/la_jolla_seals.jpg";
import aspen from "../../../public/images/aspen.jpg";
import devils_slide from "../../../public/images/devils_slide.jpg";
import paraglider from "../../../public/images/paraglider.jpg";
import drone_shore from "../../../public/images/drone_shore.jpg";
import chimney_cow from "../../../public/images/chimney_cow.jpg";
import squirrel from "../../../public/images/squirrel.jpg";

const PreviewImages = () => {
  return (
    <div className="flex flex-col md:mt-[15rem]">
      <div className="flex w-screen flex-col items-center justify-center gap-4 md:flex-row">
        <ParallaxCircleImage src={beach_cliff} speed={-20} />
        <Parallax speed={-10}>
          <ParallaxCircleImage
            src={river}
            speed={-5}
            disabled={true}
            height={12}
          />
        </Parallax>
        <div className="md:-translate-y-60">
          <ParallaxCircleImage src={la_jolla_seals} speed={-20} />
        </div>
        <Parallax speed={-4}>
          <ParallaxCircleImage
            src={squirrel}
            speed={-10}
            disabled={true}
            height={20}
          />
        </Parallax>
        <div className="translate-x-20 md:-translate-y-20 md:translate-x-0">
          <Parallax speed={-10}>
            <ParallaxCircleImage
              src={drone_shore}
              speed={-5}
              disabled={true}
              height={12}
            />
          </Parallax>
        </div>
      </div>
      <div className="flex w-screen flex-col flex-wrap items-center justify-center md:mt-[-12rem] md:flex-row md:gap-[20rem]">
        <div className="-translate-x-10 md:translate-x-0">
          <Parallax speed={8}>
            <ParallaxCircleImage
              src={aspen}
              speed={-5}
              disabled={true}
              height={12}
            />
          </Parallax>
        </div>
        <div className="md:translate-y-10">
          <ParallaxCircleImage src={lifeguard_tower} speed={-15} />
        </div>
      </div>
    </div>
  );
};

export default PreviewImages;
