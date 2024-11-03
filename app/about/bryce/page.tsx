"use client";

import { useImage } from "@/context/image-provider";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import bryce from "../../../public/images/bryce.jpg";

const about_bryce = [
  "As a San Diego native, I’m a very opinionated burrito critic and l feel most alive near the ocean!  The California coastline has always felt like home, making my relocation to San Francisco to further my career as a software developer an easy transition.  My love of natural beauty beside my long-standing interest in photography makes me thrive as a second shooter for Danielle.  Photography enables me to focus on the details that often get missed and film is a perfect medium to create truly unique results.  The mechanical interface between photographer and camera presents a fascinating challenge, making every image a true measure of skill.  My goal is to show a new perspective, broaden the horizons of everyone I interact with, and learn from every experience.  Whether it’s a new angle on a shot, a unique solution to a problem, or creating a cocktail recipe tuned to your personal tastes, I’ve got you covered.",

  "Wherever I am, I have always gravitated toward problem solving, naturally guiding me to a technical career.  I have found a passion for software development, focused on web and iOS applications. I find it to be the perfect combination of logic and design, enabling me to explore limitless potential in new ways.  My other interests honestly range over too many different topics.  Luckily, I have a strong drive to learn and dive deeply into each of them.  In my time away from photography and software development, I’m usually found cooking Italian food, small-boat sailing, bartending, planning new projects, building tables, playing Titanfall 2 or out with our dogs.  I take pride in being versatile and having diverse interests,  combining them gives me my unique creative flavor!",
];

const conclusionPt1 =
  "I’m equipped to fill a variety of roles and build projects with both detail and scale in mind.  Beyond the assistance I provide as a second shooter, my skills in website development and design complement our business, helping showcase Danielle’s photography and services.  I built and maintain this website among several other larger scale projects, ";
const conclusionPt2 =
  "! If you’ve got a project, I’m always looking for new opportunities.";

const Bryce = () => {
  const { getImage } = useImage();
  const bryce = getImage("bryce").url;
  return (
    <div className="flex flex-col justify-start items-center py-20 px-2 min-h-screen md:flex-row md:justify-evenly">
      <Parallax speed={-10}>
        <div className="flex flex-col gap-6 max-w-screen">
          <div className="relative z-0 h-[16rem] w-[16rem] md:h-[36rem] md:w-[36rem]">
            <Image
              priority
              src={bryce}
              alt="Circle Image"
              fill={true}
              className="object-cover rounded-full"
              sizes="100vw"
            />
          </div>
        </div>
      </Parallax>
      <div className="flex z-10 flex-col gap-10 justify-between p-2 rounded-xl bg-timber/75 md:max-w-[42vw] dark:bg-smoke/75">
        <h1 className="self-end text-2xl uppercase md:text-5xl">
          Hi, I&apos;m Bryce
        </h1>
        <div className="flex flex-col gap-4 justify-evenly">
          {about_bryce.map((section, i) => (
            <p key={i} className="text-xs md:text-sm indent-6">
              {section}
            </p>
          ))}
          <p className="text-xs md:text-sm indent-6">
            {conclusionPt1}
            <a
              className="font-regular border-b-[1px] border-b-smoke dark:border-b-timber"
              href={"https://www.brycekormylo.me/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              check out my work
            </a>
            {conclusionPt2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bryce;
