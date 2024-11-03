"use client";

import LandscapeRow from "@/app/(components)/landscape_row";
import PortraitRow from "@/app/(components)/portrait_row";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

import { useImage } from "@/context/image-provider";

const Drone = () => {
  const { getImage } = useImage();

  const drone_shore = getImage("beach_drone");
  const tiburon = getImage("tib_drone");
  const lotr = getImage("lotr");
  const surf_drone = getImage("surf_drone");
  const trippy_road = getImage("trippy_road");

  return (
    <div className="flex flex-col gap-1 w-screen md:gap-4">
      <LandscapeRow images={[lotr, tiburon]} />
      <PortraitRow images={[drone_shore, trippy_road, surf_drone]} />
      <div className="flex flex-col gap-6 justify-start items-end self-end py-6">
        <div className="divider" />
        <div className="self-end px-2 md:px-10 [&_*]:transition-all [&_*]:ease-linear">
          <Link
            href={"https://www.instagram.com/drone.ylo/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex gap-2 justify-start items-center p-2 rounded-xl neo">
              <LuInstagram size={24} />
              <p>drone.ylo</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drone;
