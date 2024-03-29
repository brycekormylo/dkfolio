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
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

const Film = () => {
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
    <div className="flex w-screen flex-col gap-1 md:gap-4">
      <PortraitRow images={[beach_cliff, aspen, cow]} />
      <LandscapeRow images={[bee, devils_slide]} />
      <PortraitRow images={[la_jolla_seals, river, squirrel]} />
      <LandscapeRow images={[yosemite, chimney_cow]} />
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
