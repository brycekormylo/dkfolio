"use client";

import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import LandscapeRow from "@/app/(components)/landscape_row";
import PortraitRow from "@/app/(components)/portrait_row";
import PanoramaRow from "@/app/(components)/pano_row";
import { useImage } from "@/context/image-provider";

const Digital = () => {
  const { getImage, getBanner } = useImage();

  const down_cliff = getImage("down_cliff");
  const palm = getImage("palm");
  const sca_foggy_sunset = getImage("fog_marin_headlands");
  const dock_rope = getImage("dock_rope");
  const rolling_fog = getImage("rolling_fog");
  const chimney = getImage("chimney_banner").url;

  return (
    <div className="flex flex-col gap-1 w-screen md:gap-4">
      <PanoramaRow image={chimney} />
      <PortraitRow images={[palm, down_cliff, dock_rope]} />
      <LandscapeRow images={[sca_foggy_sunset, rolling_fog]} />
      <div className="flex flex-col gap-6 justify-start items-end self-end py-6">
        <div className="divider" />
        <div className="self-end px-2 md:px-10 [&_*]:transition-all [&_*]:ease-linear">
          <Link
            href={"https://www.instagram.com/digikorm/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex gap-2 justify-start items-center p-2 rounded-xl neo">
              <LuInstagram size={24} />
              <p>digikorm</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Digital;
