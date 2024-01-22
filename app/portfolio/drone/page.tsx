"use client";

import ModalImage from "@/app/(components)/modal_image";
import Image from "next/image";
import ScrollUp from "@/app/(components)/scroll_up";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

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
import { LuInstagram } from "react-icons/lu";

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
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-20 overflow-hidden py-[4rem]">
      <ScrollUp />
      <div className="z-10 flex h-[25rem] w-[40rem] flex-col items-center justify-center gap-4 rounded-xl bg-timber/75 px-4 py-2 text-xl shadow-neo dark:bg-smoke/75 dark:shadow-neodark">
        <h2 className="text-lg">More images coming soon!</h2>
      </div>
      <div className="flex flex-row justify-start">
        <Parallax speed={-15}>
          <div className="translate fixed bottom-0 left-0 z-0 h-[45rem] w-[45rem] translate-x-40 translate-y-[30rem]">
            <Image
              src={devils_slide}
              alt="Circle Image"
              fill={true}
              className="z-0 rounded-full object-cover blur-md"
            />
          </div>
        </Parallax>
      </div>
      <div className="flex flex-col self-start items-start gap-6">
        <div className="divider" />
        <div className=" px-10">
          <Link href={"https://www.instagram.com/drone.ylo/"}>
            <div className="neo flex justify-start gap-2 rounded-xl p-2">
              <LuInstagram size={24} />
              <p>@drone.ylo</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drone;
