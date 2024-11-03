"use client";

// import chimney_cow from "../../../public/images/chimney_cow.jpg";
// import river from "../../../public/images/river.jpg";
// import cow from "../../../public/images/cow.jpg";
// import seagull from "../../../public/images/lj_seagull.jpg";
// import wave from "../../../public/images/wave.jpg";
// import paraglider from "../../../public/images/paraglider.jpg";
// import la_jolla_seals from "../../../public/images/la_jolla_seals.jpg";
// import squirrel from "../../../public/images/squirrel.jpg";
// import dead_trees from "../../../public/images/aspen.jpg";
// import beach_cliff from "../../../public/images/beach_cliff.jpg";
// import bee from "../../../public/images/bee.jpg";
// import devils_slide from "../../../public/images/devils_slide.jpg";
// import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg";
// import yosemite from "../../../public/images/yosemite.jpg";
// import chimney from "../../../public/images/chimney.jpg";
// import rainbow from "../../../public/images/vernal_rainbow.jpg";
// import elephant_seal_fight from "../../../public/images/elephant_seal_fight.jpg";

import LandscapeRow from "../../(components)/landscape_row";
import PortraitRow from "../../(components)/portrait_row";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

import { useImage } from "../../../context/image-provider";

const Film = () => {
  const { getImage } = useImage();

  const chimney_cow = getImage("chimney_cow");
  const river = getImage("river");
  const cow = getImage("cow");
  const seagull = getImage("lj_seagull");
  const wave = getImage("wave");
  const paraglider = getImage("paraglider");
  const la_jolla_seals = getImage("la_jolla_seals");
  const squirrel = getImage("squirrel");
  const dead_trees = getImage("aspen");
  const beach_cliff = getImage("beach_cliff");
  const bee = getImage("bee");
  const devils_slide = getImage("devils_slide");
  const lifeguard_tower = getImage("lifeguard_tower");
  const yosemite = getImage("yosemite");
  const chimney = getImage("chimney");
  const rainbow = getImage("vernal_rainbow");
  const elephant_seal_fight = getImage("elephant_seal_fight");

  return (
    <div className="flex flex-col gap-1 w-screen md:gap-4">
      <LandscapeRow images={[elephant_seal_fight, bee]} />
      <PortraitRow images={[beach_cliff, river, cow]} />
      <LandscapeRow images={[chimney_cow, wave]} />
      <PortraitRow images={[la_jolla_seals, dead_trees, squirrel]} />
      <LandscapeRow images={[paraglider, yosemite]} />
      <PortraitRow images={[lifeguard_tower, chimney, seagull]} />
      <LandscapeRow images={[devils_slide, rainbow]} />
      <div className="flex flex-col gap-6 justify-start items-end self-end py-6">
        <div className="divider" />
        <div className="self-end px-2 md:px-10 [&_*]:transition-all [&_*]:ease-linear">
          <Link
            href={"https://www.instagram.com/kormylophotography/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex gap-2 justify-start items-center p-2 rounded-xl neo">
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
