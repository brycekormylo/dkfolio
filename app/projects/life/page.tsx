import awoo from "../../../public/images/update709/awoo.jpg";
import be_hmb from "../../../public/images/update709/be_hmb.jpg";
import tunnel_view_charlie from "../../../public/images/update709/tunnel_view_charlie.jpg";
import ch_roadtrip from "../../../public/images/update709/ch_roadtrip.jpg";
import wedding_mexican_food from "../../../public/images/update709/wedding_mexican_food.jpg";
import ch_frisbee_wave from "../../../public/images/update709/ch_frisbee_wave.jpg";
import ch_ol from "../../../public/images/update709/ch_ol.jpg";
import millie_pup_annoy_charlie from "../../../public/images/update709/millie_pup_annoy_charlie.jpg";

import wedding_pier_laughing from "../../../public/images/update709/wedding_pier_laughing.jpg";
import ch_take_the_wheel from "../../../public/images/update709/ch_take_the_wheel.jpg";
import bd_christian from "../../../public/images/bryce_and_danielle_christian.jpg";
import bd_sophia from "../../../public/images/bryce_and_danielle_sophia.jpg";
import ch_esa from "../../../public/images/update709/ch_esa.jpg";
import ch_pup_la from "../../../public/images/update709/ch_pup_la.jpg";
import yosemite_falls_family from "../../../public/images/update709/yosemite_falls_family.jpg";
import mi_305_frisbee from "../../../public/images/update709/mi_305_frisbee.jpg";
import annoyed_muff from "../../../public/images/update709/annoyed_muff.jpg";
import mi_sleeping_sd from "../../../public/images/update709/mi_sleeping_sd.jpg";
import ice_cream_millie from "../../../public/images/update709/ice_cream_millie.jpg";
import boat_millie from "../../../public/images/update709/boat_millie.jpg";
import fun_sophia from "../../../public/images/update709/fun_sophia.jpg";
import b_pup_millie from "../../../public/images/update709/b_pup_millie.jpg";
import millie_smile from "../../../public/images/update709/millie_smile.jpg";

import Link from "next/link";
import Image from "next/image";
import { LuInstagram } from "react-icons/lu";
import LandscapeRow from "@/app/(components)/landscape_row";
import PortraitRow from "@/app/(components)/portrait_row";

const text =
  "Ditch the daily 9am-5pm grind, this personal project is all about navigating life's adventures, twists and turns! Diving beyond work walls, we offer a peek into our lives and our never ending sea of interests. From breathtaking travels to delightfully quirky hobbies, and everything in between.";
const text2 =
  "Forget a one-sided story because this is an open invitation to connect! Are you a fellow adventurer who thrives on the unexpected? Do you have loads of different interests? Do you have a passion for constantly learning and improving? We see the magic in everyday moments, big or small, just like you. We capture the extraordinary hiding within the ordinary, and we're thrilled to share our journey with you.";
const text3 = [
  "Embrace life’s ever changing nature, follow us on ",
  " to connect and get the latest updates! 🌴",
];

const Life = () => {
  return (
    <div className="max-w-screen flex flex-col gap-12 overflow-hidden">
      <h1 className="self-end px-2 pt-10 text-2xl uppercase md:px-20 md:text-5xl">
        A Day in the Life
      </h1>
      <div className="flex flex-col gap-6 pt-8 md:gap-12 md:pt-0 [&_*]:transition-all [&_*]:ease-linear">
        <div className="max-w-screen flex flex-row items-start justify-between gap-6">
          <div className="relative z-0 ms-36 h-[16rem] w-[16rem] md:h-[36rem] md:w-[36rem]">
            <Image
              priority
              src={be_hmb}
              alt="Circle Image"
              fill={true}
              className="rounded-full object-cover"
              sizes="100vw"
            />
          </div>
          <div className="mt-[5rem] flex w-full flex-col gap-[2rem] indent-6 md:me-48 md:w-[48rem] ">
            <p>{text}</p>
            <p>{text2}</p>
            <p>
              {text3[0]}
              <a
                className="font-regular border-b-[1px] border-b-smoke dark:border-b-timber"
                href={"https://www.instagram.com/kormylophotography/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
              {text3[1]}
            </p>
          </div>
        </div>
        <div className="mt-[2rem] flex w-screen flex-col gap-1 md:mt-[6rem] md:gap-4">
          <PortraitRow
            images={[
              wedding_pier_laughing,
              ice_cream_millie,
              yosemite_falls_family,
            ]}
          />
          <LandscapeRow images={[millie_pup_annoy_charlie, ch_roadtrip]} />
          <PortraitRow images={[millie_smile, fun_sophia, mi_305_frisbee]} />
          <LandscapeRow images={[tunnel_view_charlie, be_hmb]} />
          <PortraitRow
            images={[ch_take_the_wheel, bd_christian, b_pup_millie]}
          />
          <LandscapeRow images={[awoo, ch_frisbee_wave]} />
          <PortraitRow images={[boat_millie, mi_sleeping_sd, ch_esa]} />
          <LandscapeRow images={[ch_ol, wedding_mexican_food]} />
          <PortraitRow images={[ch_pup_la, bd_sophia, annoyed_muff]} />
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
                <p>kormylophotography</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Life;
