"use client";

import Image from "next/image";
import { BsEyeglasses } from "react-icons/bs";
import us_photo from "../../../public/images/be_close_up.jpg";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

const AboutMeIntro = [
  "Nestled in the beautiful and vibrant San Francisco Bay Area, Danielle made her creative mark when she, accompanied by her husband Bryce and their two dogs, transplanted to the area in February 2020. What sets her apart? Specializing in film, Danielle blends her unique perspective and boundless creativity to every project she undertakes. She's not just a photographer, she's a perpetual creative! Constantly immersed in building, designing, and extending her creativity beyond the lens, she infuses every aspect of her life with a touch of innovation.",

  "Danielle and Bryce's love story began in the magical city of Bergamo, Italy, e parlano Italiano ancora! They are the definition of passionate adventurers! Their span of interests includes hiking, cultural exploration, music-making, sports, sailing, painting, woodworking, and a myriad of other creative pursuits. They are truly forever learners at heart. Dreaming big is second nature to them and their journey never stops! When it's time to unwind, catch them kicking back to Harry Potter or wilfully suffering through old Legend of Zelda games.",
];

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="translate absolute -translate-x-[-16rem] self-end">
        <Parallax rotate={[-135, -45]}>
          <div className="translate h-[36rem] w-[36rem] -translate-y-[10rem] rounded-full bg-ash/25"></div>
        </Parallax>
      </div>
      <div className="flex flex-row justify-between gap-8 px-2 md:p-10">
        <div className="flex flex-col justify-center md:max-w-[60%] [&_*]:transition-all [&_*]:ease-linear">
          <div className="flex flex-col gap-8 rounded-xl bg-timber/75 px-2 py-6 indent-6 shadow-neo dark:bg-smoke/75 dark:shadow-neodark md:px-8 md:py-12">
            {AboutMeIntro.map((section, i) => (
              <p key={i} className="text-xs md:text-base">
                {section}
              </p>
            ))}
            <Link
              href="about"
              className="neo z-10 self-end rounded-xl bg-ash/25 px-4 py-2"
            >
              <div className="-ms-5 flex items-center justify-start gap-2">
                <p>Read more</p>
                <BsEyeglasses size={24} />
              </div>
            </Link>
          </div>
        </div>
        <div className="relative hidden h-[20rem] w-[20rem] md:block md:h-[32rem] md:w-[32rem] md:translate-x-40">
          <Image
            src={us_photo}
            alt="Circle Image"
            fill={true}
            className="rounded-full object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
