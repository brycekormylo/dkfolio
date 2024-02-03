"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import bryce from "../../../public/images/bryce.jpg";

const about_bryce = [
  "I'm an iOS and web developer, but thoroughly enjoy my time working as a second shooter for my wife, Danielle. My approach to photography is to capture the distinct details that often go overlooked. I aim to produce a diverse set of captivating photos at the end of each shoot, with each image offering something unique. Film photography is particularly valuable in achieving this goal, as the mechanical interface between photographer and camera presents a fascinating challenge. Film has been increasingly interesting for me as I constantly learning about the developing and printing processes, which has been a new and exciting aspect of photography.",

  "While my interests and hobbies are constantly changing, I have a strong desire to learn and dive deeply into everything I attempt. I enjoy solving problems in creative ways, as well as designing and building things. Aside from my diverse interests, as a website designer and builder, my skills in website development and design complement our team's expertise. I find building websites to be a liberating pursuit that enables me to explore the world of design in new ways while providing new challenges to overcome. I relish the creative process and take great pride in seeing my work come to life. As a team with Danielle, I also provide a unique behind-the-scenes aid to make our clients look their best and keep them at ease during the website building process.",

  "In my free time away from the camera and computer, I also bartend, go small-boat sailing, build with various materials, play video games, and explore the outdoors. While I take pride in being versatile and having diverse interests, I also derive great satisfaction from applying my skills to each of these passions.",
];

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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        </div>
      </div>
    </div>
  );
};

export default Bryce;
