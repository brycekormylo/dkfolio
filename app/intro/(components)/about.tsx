"use client";

import Image from "next/image";
import { BsEyeglasses } from "react-icons/bs";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import { useImage } from "@/context/image-provider";

const AboutMeIntro = [
  "Nestled in the beautiful and vibrant San Francisco Bay Area, Danielle made her creative mark when she, accompanied by her husband Bryce and their two dogs, transplanted to the area in February 2020. What sets her apart? Specializing in film, Danielle blends her unique perspective and boundless creativity to every project she undertakes. She's not just a photographer, she's a perpetual creative! Constantly immersed in building, designing, and extending her creativity beyond the lens, she infuses every aspect of her life with a touch of innovation.",

  "Danielle and Bryce's love story began in the magical city of Bergamo, Italy, e parlano Italiano ancora! They are the definition of passionate adventurers! Their span of interests includes hiking, cultural exploration, music-making, sports, sailing, painting, woodworking, and a myriad of other creative pursuits. They are truly forever learners at heart. Dreaming big is second nature to them and their journey never stops! When it's time to unwind, catch them kicking back to Harry Potter or wilfully suffering through old Legend of Zelda games.",
];

const About = () => {
  const { getImage } = useImage();

  const us_photo = getImage("be_close_up");
  return (
    <div className="flex flex-col">
      <div className="absolute self-end translate -translate-x-[-16rem]">
        <Parallax rotate={[-135, -45]}>
          <div className="rounded-full translate h-[36rem] w-[36rem] -translate-y-[10rem] bg-ash/25"></div>
        </Parallax>
      </div>
      <div className="flex flex-row gap-8 justify-between px-2 md:p-10">
        <div className="flex flex-col justify-center md:max-w-[60%] [&_*]:transition-all [&_*]:ease-linear">
          <div className="flex flex-col gap-8 py-6 px-2 rounded-xl md:py-12 md:px-8 bg-timber/75 indent-6 shadow-neo dark:bg-smoke/75 dark:shadow-neodark">
            {AboutMeIntro.map((section, i) => (
              <p key={i} className="text-xs md:text-base">
                {section}
              </p>
            ))}
            <Link
              href="about"
              className="z-10 self-end py-2 px-4 rounded-xl neo bg-ash/25"
            >
              <div className="flex gap-2 justify-start items-center -ms-5">
                <p>Read more</p>
                <BsEyeglasses size={24} />
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden relative md:block md:translate-x-40 h-[20rem] w-[20rem] md:h-[32rem] md:w-[32rem]">
          <Image
            src={us_photo.url}
            alt="Circle Image"
            fill={true}
            className="object-cover rounded-full"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
