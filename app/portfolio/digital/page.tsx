import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import down_cliff from "../../../public/images/updates7-7b/down_cliff.jpg";
import palm from "../../../public/images/updates7-7b/palm.jpg";
import sca_foggy_sunset from "../../../public/images/update709/fog_marin_headlands.jpg";
import dock_rope from "../../../public/images/updates7-7b/dock_rope.jpg";
import rolling_fog from "../../../public/images/dkfolio_0424/rolling_fog.jpg";
import chimney from "../../../public/chimney/chimney_lg.jpg";
import LandscapeRow from "@/app/(components)/landscape_row";
import PortraitRow from "@/app/(components)/portrait_row";
import PanoramaRow from "@/app/(components)/pano_row";

const Digital = () => {
  return (
    <div className="flex w-screen flex-col gap-1 md:gap-4">
      <PanoramaRow image={chimney} />
      <PortraitRow images={[palm, down_cliff, dock_rope]} />
      <LandscapeRow images={[sca_foggy_sunset, rolling_fog]} />
      <div className="flex flex-col items-end justify-start gap-6 self-end py-6">
        <div className="divider" />
        <div className="self-end px-2 md:px-10 [&_*]:transition-all [&_*]:ease-linear">
          <Link
            href={"https://www.instagram.com/digikorm/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="neo flex items-center justify-start gap-2 rounded-xl p-2">
              <LuInstagram size={24} />
              <p>digikorm</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Digital;
