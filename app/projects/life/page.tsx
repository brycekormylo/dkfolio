"use client";

import Link from "next/link";
import Image from "next/image";
import { LuInstagram } from "react-icons/lu";
import LandscapeRow from "@/app/(components)/landscape_row";
import PortraitRow from "@/app/(components)/portrait_row";
import { useImage } from "@/context/image-provider";

const text =
  "Ditch the daily 9am-5pm grind, this personal project is all about navigating life's adventures, twists and turns! Diving beyond work walls, we offer a peek into our lives and our never ending sea of interests. From breathtaking travels to delightfully quirky hobbies, and everything in between.";
const text2 =
  "Forget a one-sided story because this is an open invitation to connect! Are you a fellow adventurer who thrives on the unexpected? Do you have loads of different interests? Do you have a passion for constantly learning and improving? We see the magic in everyday moments, big or small, just like you. We capture the extraordinary hiding within the ordinary, and we're thrilled to share our journey with you.";
const text3 = [
  "Embrace life’s ever changing nature, follow us on ",
  " to connect and get the latest updates! 🌴",
];

const Life = () => {
  const { getImage } = useImage();

  const awoo = getImage("awoo");
  const be_hmb = getImage("be_hmb");
  const tunnel_view_charlie = getImage("tunnel_view_charlie");
  const ch_roadtrip = getImage("ch_roadtrip");
  const wedding_mexican_food = getImage("wedding_mexican_food");
  const ch_frisbee_wave = getImage("ch_frisbee_wave");
  const ch_ol = getImage("ch_ol");
  const millie_pup_annoy_charlie = getImage("millie_pup_annoy_charlie");
  const c_hole_1 = getImage("c_hole_1");
  const c_hole_2 = getImage("c_hole_2");
  const cm_fixation_beach = getImage("cm_fixation_beach");

  const wedding_pier_laughing = getImage("wedding_pier_laughing");
  const ch_take_the_wheel = getImage("ch_take_the_wheel");
  const bd_christian = getImage("be_close_up");
  const bd_sophia = getImage("prof_sophia");
  const ch_esa = getImage("ch_esa");
  const ch_pup_la = getImage("ch_pup_la");
  const yosemite_falls_family = getImage("yosemite_falls_family");
  const mi_305_frisbee = getImage("mi_305_frisbee");
  const annoyed_muff = getImage("annoyed_muff");
  const mi_sleeping_sd = getImage("mi_sleeping_sd");
  const ice_cream_millie = getImage("ice_cream_millie");
  const boat_millie = getImage("boat_millie");
  const fun_sophia = getImage("fun_sophia");
  const b_pup_millie = getImage("b_pup_millie");
  const millie_smile = getImage("millie_smile");
  const c_ball_couch = getImage("c_ball_couch");
  const cm_hole = getImage("cm_hole");
  const mc_frisbee_hole = getImage("mc_frisbee_hole");

  return (
    <div className="flex overflow-hidden flex-col gap-12 max-w-screen">
      <h1 className="self-end px-2 pt-10 text-2xl uppercase md:px-20 md:text-5xl">
        A Day in the Life
      </h1>
      <div className="flex flex-col gap-6 pt-8 md:gap-12 md:pt-0 [&_*]:transition-all [&_*]:ease-linear">
        <div className="flex flex-col gap-6 items-start md:flex-row md:justify-between max-w-screen">
          <div className="relative z-0 self-center md:self-start h-[16rem] w-[16rem] md:ms-36 md:h-[36rem] md:w-[36rem]">
            <Image
              priority
              src={be_hmb.url}
              alt="Circle Image"
              fill={true}
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col px-4 mt-8 w-full gap-[2rem] indent-6 md:me-48 md:mt-[5rem] md:w-[48rem]">
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
        <div className="flex flex-col gap-1 w-screen md:gap-4 mt-[2rem] md:mt-[6rem]">
          <PortraitRow
            images={[
              wedding_pier_laughing,
              ice_cream_millie,
              yosemite_falls_family,
            ]}
          />
          <LandscapeRow images={[cm_fixation_beach, ch_roadtrip]} />
          <PortraitRow images={[c_ball_couch, annoyed_muff, mc_frisbee_hole]} />
          <LandscapeRow images={[awoo, ch_ol]} />
          <PortraitRow images={[ch_take_the_wheel, millie_smile, fun_sophia]} />
          <LandscapeRow images={[tunnel_view_charlie, be_hmb]} />
          <PortraitRow images={[b_pup_millie, bd_christian, mi_305_frisbee]} />
          <LandscapeRow images={[c_hole_1, ch_frisbee_wave]} />
          <PortraitRow images={[boat_millie, mi_sleeping_sd, bd_sophia]} />
          <LandscapeRow
            images={[wedding_mexican_food, millie_pup_annoy_charlie]}
          />
          <PortraitRow images={[cm_hole, ch_pup_la, ch_esa]} />
        </div>
        <div className="flex flex-col gap-6 self-end my-10">
          <div className="divider" />
          <div className="flex flex-row gap-4 self-end text-sm md:text-base md:pe-10">
            <Link
              href={"https://www.instagram.com/kormylophotography/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex gap-2 justify-end items-center p-2 rounded-xl neo bg-timber dark:bg-smoke">
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
