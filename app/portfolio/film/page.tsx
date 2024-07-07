"use client";

import chimney_cow from "../../../public/images/chimney_cow.jpg";
import river from "../../../public/images/river.jpg";
import cow from "../../../public/images/cow.jpg";
import seagull from "../../../public/images/updates7-7/seagull.jpg";
import wave from "../../../public/images/wave.jpg";
import paraglider from "../../../public/images/paraglider.jpg";
import la_jolla_seals from "../../../public/images/la_jolla_seals.jpg";
import squirrel from "../../../public/images/squirrel.jpg";
import dead_trees from "../../../public/images/updates7-7/dead_trees.jpg";
import beach_cliff from "../../../public/images/beach_cliff.jpg";
import bee from "../../../public/images/bee.jpg";
import devils_slide from "../../../public/images/devils_slide.jpg";
import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg";
import yosemite from "../../../public/images/yosemite.jpg";
import chimney from "../../../public/images/updates7-7/chimney.jpg";
import rainbow from "../../../public/images/updates7-7/vernal-falls-rainbow.jpg";
import elephant_seal_fight from "../../../public/images/updates7-7/elephant_seal_fight.jpg";

import LandscapeRow from "../../(components)/landscape_row";
import PortraitRow from "../../(components)/portrait_row";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

const Film = () => {
  return (
    <div className="flex w-screen flex-col gap-1 md:gap-4">
      <LandscapeRow images={[elephant_seal_fight, bee]} />
      <PortraitRow images={[beach_cliff, river, cow]} />
      <LandscapeRow images={[chimney_cow, wave]} />
      <PortraitRow images={[la_jolla_seals, dead_trees, squirrel]} />
      <LandscapeRow images={[paraglider, yosemite]} />
      <PortraitRow images={[lifeguard_tower, chimney, seagull]} />
      <LandscapeRow images={[devils_slide, rainbow]} />
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
