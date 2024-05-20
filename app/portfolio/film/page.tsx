"use client";

import ModalImage from "@/app/(components)/modal_image";
import chimney_cow from "../../../public/images/chimney_cow.jpg";
import river from "../../../public/images/river.jpg";
import cow from "../../../public/images/cow.jpg";
import lj_seagull from "../../../public/images/lj_seagull.jpeg";
import wave from "../../../public/images/wave.jpg";
import paraglider from "../../../public/images/paraglider.jpg";
import la_jolla_seals from "../../../public/images/la_jolla_seals.jpg";
import squirrel from "../../../public/images/squirrel.jpg";
import aspen from "../../../public/images/aspen.jpg";
import beach_cliff from "../../../public/images/beach_cliff.jpg";
import bee from "../../../public/images/bee.jpg";
import devils_slide from "../../../public/images/devils_slide.jpg";
import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg";
import millie_ic from "../../../public/images/millie_ic.jpg";
import yosemite from "../../../public/images/yosemite.jpg";
import chimney from "../../../public/images/dkfolio_0424/chimney_24.jpeg";
import dock_rope from "../../../public/images/dkfolio_0424/dock_rope.jpg";
import rainbow from "../../../public/images/dkfolio_0424/rainbow.jpeg";
import rainbow_2 from "../../../public/images/dkfolio_0424/rainbow_2.jpg";
import roaring_seal from "../../../public/images/dkfolio_0424/roaring_seal.jpg";
import roaring_seal_2 from "../../../public/images/dkfolio_0424/roaring_seal_2.jpg";
import rolling_fog from "../../../public/images/dkfolio_0424/rolling_fog.jpg";

import LandscapeRow from "../../(components)/landscape_row";
import PortraitRow from "../../(components)/portrait_row";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

const Film = () => {
  return (
    <div className="flex w-screen flex-col gap-1 md:gap-4">
      <LandscapeRow images={[roaring_seal, bee]} />
      <PortraitRow images={[beach_cliff, river, cow]} />
      <LandscapeRow images={[chimney_cow, wave]} />
      <PortraitRow images={[la_jolla_seals, aspen, squirrel]} />
      <LandscapeRow images={[paraglider, yosemite]} />
      <PortraitRow images={[lifeguard_tower, chimney, lj_seagull]} />
      <LandscapeRow images={[devils_slide, rainbow_2]} />
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

export default Film;
