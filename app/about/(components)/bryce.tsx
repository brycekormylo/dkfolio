"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import bryce from "../../../public/images/bryce.jpg";

const about_bryce = [
  "Having grown up in San Diego,  I’m a very opinionated burrito critic and l feel most alive near the ocean!  The California coastline has always felt like home, making my relocation to San Francisco to further my career as a software developer an easy transition.  My love of natural beauty beside my long-standing interest in photography makes me thrive as a second shooter for Danielle.  Photography enables me to focus on the details that often get missed and film is a perfect medium to create truly unique results.  The mechanical interface between photographer and camera presents a fascinating challenge, making every image a true measure of skill.  My goal is to show a new perspective, broaden the horizons of everyone I interact with, and learn from every experience.  Whether it’s a new angle on a shot, a unique solution to a problem, or creating a cocktail recipe tuned to your personal tastes, I’ve got you covered.",

  "Wherever I am, I have always gravitated toward problem solving, naturally guiding me to a technical career.  I have found a passion for software development, focused on web and iOS applications. I find it to be the perfect combination of logic and design, enabling me to explore limitless potential in new ways.  My other interests honestly range over too many different topics.  Luckily, I have a strong drive to learn and dive deeply into each of them.  In my time away from photography and software development, I’m usually found cooking italian food, small-boat sailing, bartending, planning new projects, building tables, playing Titanfall 2 or out with our dogs.  I take pride in being versatile and having diverse interests,  combining them gives me my unique creative flavor!",

  "I’m equipped to fill a variety of roles and build projects with both detail and scale in mind.  Beyond the assistance I provide as a second shooter, my skills in website development and design complement our business, helping showcase Danielle’s photography and services.  I built and maintain this website among several other larger scale projects, check out my work!  If you’ve got a project, I’m always looking for new opportunities.",
];

const conclusionPt1 =
  "I’m equipped to fill a variety of roles and build projects with both detail and scale in mind.  Beyond the assistance I provide as a second shooter, my skills in website development and design complement our business, helping showcase Danielle’s photography and services.  I built and maintain this website among several other larger scale projects, ";
const conclusionPt2 =
  " If you’ve got a project, I’m always looking for new opportunities.";

const Bryce = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-2 py-20 md:flex-row md:justify-evenly">
      <Parallax speed={-10}>
        <div className="max-w-screen flex flex-col gap-6">
          <div className="relative z-0 h-[16rem] w-[16rem] md:h-[36rem] md:w-[36rem]">
            <Image
              priority
              src={bryce}
              alt="Circle Image"
              fill={true}
              className="rounded-full object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </Parallax>
      <div className="z-10 flex flex-col justify-between gap-10 rounded-xl bg-timber/75 p-2 dark:bg-smoke/75 md:max-w-[42vw]">
        <h1 className="self-end text-2xl uppercase md:text-5xl">
          Hi, I&apos;m Bryce
        </h1>
        <div className="flex flex-col justify-evenly gap-4">
          {about_bryce.map((section, i) => (
            <p key={i} className="indent-6 text-xs md:text-sm">
              {section}
            </p>
          ))}
          <p className="indent-6 text-xs md:text-sm">
            {conclusionPt1}
            <a
              className="font-regular border-b-[1px] border-b-smoke dark:border-b-timber"
              href={"https://www.brycekormylo.me/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              check out my work!
            </a>
            {conclusionPt2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bryce;
