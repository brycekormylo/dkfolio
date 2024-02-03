import Image from "next/image";
import chimney_lg from "../../../public/chimney/chimney_lg.jpg";
import chimney_lg_cropped from "../../../public/chimney/chimney_lg_cropped.jpg";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const Banner = () => {
  return (
    <ParallaxBanner className="-my-0 h-[12rem] md:my-0 md:h-[22.5rem]">
      <ParallaxBannerLayer speed={-15}>
        <div className="relative hidden h-full w-screen shadow-inner md:block">
          <Image
            priority
            src={chimney_lg}
            fill={true}
            className="object-contain"
            alt="Banner Image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          />
        </div>
        <div className="relative block h-full w-screen shadow-inner md:hidden">
          <Image
            priority
            src={chimney_lg_cropped}
            fill={true}
            className="object-contain"
            alt="Banner Image"
            sizes="(max-width: 768px) 100vw"

          />
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Banner;
