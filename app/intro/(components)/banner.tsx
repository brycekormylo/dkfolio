import Image from "next/image";
import chimney_lg from "../../../public/chimney/chimney_lg.jpg";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const Banner = () => {
  return (
    <ParallaxBanner className="h-[24rem]">
      <ParallaxBannerLayer speed={-20}>
        <div className="w-screen shadow-inner">
          <Image
            priority
            src={chimney_lg}
            fill={true}
            objectFit="contain"
            alt="Banner Image"
          />
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Banner;
