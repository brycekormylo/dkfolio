"use client";

import ModalImage from "@/app/(components)/modal_image";
import chimney_cow from "../../../public/images/chimney_cow.jpg";
import river from "../../../public/images/river.jpg";
import cow from "../../../public/images/cow.jpg";
import la_jolla_seals from "../../../public/images/la_jolla_seals.jpg";
import squirrel from "../../../public/images/squirrel.jpg";
import aspen from "../../../public/images/aspen.jpg";
import beach_cliff from "../../../public/images/beach_cliff.jpg";
import bee from "../../../public/images/bee.jpg";
import devils_slide from "../../../public/images/devils_slide.jpg";
import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg";
import millie_ic from "../../../public/images/millie_ic.jpg";
import yosemite from "../../../public/images/yosemite.jpg";
import LandscapeRow from "../../(components)/landscape_row";
import PortraitRow from "../../(components)/portrait_row";

const Drone = () => {
  const portraits = [
    river,
    cow,
    la_jolla_seals,
    squirrel,
    aspen,
    beach_cliff,
    lifeguard_tower,
    millie_ic,
  ];
  const landscapes = [devils_slide, chimney_cow, yosemite, bee];

  return (
    <div className="flex w-screen flex-col gap-3">
      <PortraitRow images={[la_jolla_seals, squirrel, beach_cliff]} />
      <LandscapeRow images={[yosemite, bee]} />
      <PortraitRow images={[river, cow, aspen]} />
      <LandscapeRow images={[devils_slide, chimney_cow]} />
      <div className="divider my-10 self-end" />
    </div>
  );
};

export default Drone;
