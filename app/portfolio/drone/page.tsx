import LandscapeRow from "@/app/(components)/landscape_row";
import PortraitRow from "@/app/(components)/portrait_row";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

import drone_shore from "../../../public/images/beach_drone.jpg";
import tiburon from "../../../public/images/tib_drone.jpg";
import lotr from "../../../public/images/lotr.jpg";
import surf_drone from "../../../public/images/surf_drone.jpg";
import trippy_road from "../../../public/images/trippy_road.jpg";

const Drone = () => {
  return (
    <div className="flex w-screen flex-col gap-1 md:gap-4">
      <LandscapeRow images={[lotr, tiburon]} />
      <PortraitRow images={[drone_shore, trippy_road, surf_drone]} />
      <div className="flex flex-col items-end justify-start gap-6 self-end py-6">
        <div className="divider" />
        <div className="self-end px-2 md:px-10 [&_*]:transition-all [&_*]:ease-linear">
          <Link
            href={"https://www.instagram.com/drone.ylo/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="neo flex items-center justify-start gap-2 rounded-xl p-2">
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
