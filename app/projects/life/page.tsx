import charlie_car from "../../../public/images/charlie_car.jpeg";
import ch_double_wave from "../../../public/images/update709/ch_double_wave.jpg";
import awoo from "../../../public/images/update709/awoo.jpg";
import ice_cream_millie from "../../../public/images/update709/ice_cream_millie.jpg";
import boat_millie from "../../../public/images/update709/boat_millie.jpg";
import ch_muddy from "../../../public/images/update709/ch_muddy.jpg";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import LandscapeRow from "@/app/(components)/landscape_row";
import PortraitRow from "@/app/(components)/portrait_row";

const Life = () => {
  return (
    <div className="max-w-screen flex flex-col gap-12 overflow-hidden">
      <h1 className="self-end px-2 pt-10 text-2xl uppercase md:px-20 md:text-5xl">
        A Day in the Life
      </h1>
      <div className="flex flex-col gap-6 pt-8 md:gap-12 md:pt-0 [&_*]:transition-all [&_*]:ease-linear">
        <div className="flex w-screen flex-col gap-1 md:gap-4">
          <LandscapeRow images={[awoo, ch_double_wave]} />
          <PortraitRow images={[ice_cream_millie, ch_muddy, boat_millie]} />
        </div>
        <div className="my-10 flex flex-col gap-6 self-end">
          <div className="divider" />
          <div className="flex flex-row gap-4 self-end text-sm md:pe-10 md:text-base">
            <Link
              href={"https://www.instagram.com/kormylophotography/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="neo flex items-center justify-end gap-2 rounded-xl bg-timber p-2 dark:bg-smoke">
                <LuInstagram size={24} />
                <p>kormylphotography</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Life;
