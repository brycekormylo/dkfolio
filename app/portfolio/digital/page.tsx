"use client";

import Image from "next/image";
import ModalImage from "@/app/(components)/modal_image";
import ScrollUp from "@/app/(components)/scroll_up";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import down_cliff from "../../../public/images/down_cliff.jpg";
import red_sun from "../../../public/images/red_sun.jpg";
import palm from "../../../public/images/palm.jpg";
import sca_foggy_sunset from "../../../public/images/sca_foggy_sunset.jpg";
import dock_rope from "../../../public/images/dkfolio_0424/dock_rope.jpg";
import rolling_fog from "../../../public/images/dkfolio_0424/rolling_fog.jpg";
import ComingSoon from "@/app/(components)/coming_soon";
import LandscapeRow from "@/app/(components)/landscape_row";
import PortraitRow from "@/app/(components)/portrait_row";

const Digital = () => {
  return (
    <div className="flex w-screen flex-col gap-1 md:gap-4">
      <PortraitRow images={[dock_rope, down_cliff, palm]} />
      <LandscapeRow images={[sca_foggy_sunset, rolling_fog]} />
      <div className="flex flex-col items-end justify-start gap-6 self-end py-6">
        <div className="divider" />
        <div className="self-end px-2 md:px-10">
          <Link
            href={"https://www.instagram.com/kormylophotography/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="neo flex items-center justify-start gap-2 rounded-xl p-2">
              <LuInstagram size={24} />
              <p>kormylophotography</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Digital;
