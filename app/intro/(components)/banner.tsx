"use client";
import Image from "next/image";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useImage } from "@/context/image-provider";

const Banner = () => {
  const { getImage, getBanner } = useImage();
  const chimney_lg = getImage("chimney_lg").url;
  const chimney_lg_cropped = getBanner("chimney_lg_cropped").url;

  return (
    <ParallaxBanner className="-my-0 md:my-0 h-[12rem] md:h-[22.5rem]">
      <ParallaxBannerLayer speed={-15}>
        <div className="hidden relative w-screen h-full shadow-inner md:block">
          <Image
            priority
            src={chimney_lg}
            fill={true}
            className="object-contain"
            alt="Banner jmage"
            sizes="100vw"
          />
        </div>
        <div className="block relative w-screen h-full shadow-inner md:hidden">
          <Image
            priority
            src={chimney_lg}
            fill={true}
            className="object-contain"
            alt="Banner Image"
            sizes="100vw"
          />
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Banner;
