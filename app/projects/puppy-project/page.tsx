"use client";

import blackie_laid_down from "../../../public/images/puppy/blackie_laid_down.jpg";
import sunrise_portrait from "../../../public/images/puppy/sunrise_portrait.jpg";
import blackie_portrait from "../../../public/images/puppy/blackie_portrait.jpg";
import reign_sniffing from "../../../public/images/puppy/reign_sniffing.jpg";
import reign_butt_scratches from "../../../public/images/puppy/reign_butt_scratches.jpg";

import LandscapeRow from "../../(components)/landscape_row";
import PortraitRow from "../../(components)/portrait_row";
import CircleImage from "@/app/(components)/circle_image";
import ollie from "../../../public/images/o2.jpg";
import wolfe from "../../../public/images/wolfe_pt.jpg";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import { Parallax } from "react-scroll-parallax";

const PuppyProjectIntro = [
  "We channel our passions into supporting dog rescues and shelters across the SF Bay Area, creating lasting connections between dogs and their compatible families to speed up adoptions. Our firm belief in the power of quality presentation drives us to volunteer, capturing personalized photos and building custom websites that tell everyone's story. Understanding dog psychology and body language is essential for ensuring their comfort during this confusing and often challenging period. Building trust and forming bonds is our top priority. With our photography expertise fused with a steadfast commitment to each dog's well-being, we authentically capture their shining personalities! As a web and iOS developer with an eye for design, Bryce further recognizes the importance of user-friendly websites while combining functionality with aesthetic appeal to facilitate smoother adoption processes.",

  "The Puppy Project was inspired by our very affectionate and misunderstood senior dog Wolfe, who reshaped our perspectives on adoption. Wolfe's reactivity issues, stemming from 9 years of abuse, led us to receiving professional training, which continues to benefit us to this day! In 2022 we unexpectedly lost Ollie, our sweet and sassy 4 year old Border Collie, after a week long battle in the hospital. This experience emphasized the urgency of placing dogs, especially seniors, into the right homes swiftly, which finally initiated our project. We are committed to ensuring no time is lost for pups seeking forever homes because we understand that every moment with our companions is precious!",
];

const PuppyConcl1 =
  "If you're seeking a refreshed look with professional images for your rescue, please reach out through our ";
const PuppyConcl2 =
  ", we would be thrilled to work alongside you. Let's join paws and create tales of happiness because creating tails of happiness is what truly brings us joy!";

const LilyIntro = [
  "Lily's Legacy isn't your average dog sanctuary, it's a haven for senior pups where love and care flow as freely as frozen Kongs! Whether they waltzed in as strays or came in through the surrender door, these golden oldies are craving heaps of attention and affection. Lily's Legacy not only understands this, but exceeds expectations by showering these wise woofers with second, third, and fourth chances! As long as they're under Lily's care you can expect happy, healthy, wagging tails and cozy cuddles!",

  "Brace yourself because adopting a senior dog will totally flip your perspective and these seasoned pups? Well they'll just leave paw prints on your heart that rival a mural! Ready for some furry joy in your life? Take a peek at Lily's Legacy and think about giving a senior pup the cozy home they've been dreaming of!",
];

const PuppyProject = () => {
  return (
    <div className="max-w-screen flex flex-col gap-12 overflow-hidden">
      <h1 className="self-end px-2 pt-10 text-2xl uppercase md:px-20 md:text-5xl">
        Puppy Project
      </h1>
      <div className="-my-[6rem] flex flex-col justify-start px-2 pb-[10rem] md:my-0 md:flex-row md:justify-between md:pb-10 md:ps-[6rem]">
        <Parallax speed={-6}>
          <div className="flex h-[48rem] max-w-[100vw] flex-col justify-center md:-mt-32 md:h-[36rem] md:w-[36rem] md:translate-x-0 md:flex-row">
            <CircleImage
              src={ollie}
              alignment="self-center translate-x-8 md:translate-x-0 md:self-end translate-y-16 md:translate-y-0"
            />
            <CircleImage
              src={wolfe}
              alignment="self-center -translate-x-8 md:translate-x-0 md:self-start -translate-y-16 md:translate-y-0"
            />
          </div>
        </Parallax>
        <div className="z-10 -my-[7.5rem] md:my-0 md:ms-20 md:max-w-[48rem]">
          <div className="flex flex-col gap-6 rounded-xl bg-timber/50 p-2 indent-6 dark:bg-smoke/50">
            {PuppyProjectIntro.map((section, i) => (
              <p key={i} className="indent-6 text-xs md:text-sm">
                {section}
              </p>
            ))}
            <p className="indent-6 text-xs md:text-sm">
              {PuppyConcl1}
              <Link
                href={"../../contact"}
                className="font-regular border-b-[1px] border-b-smoke dark:border-b-timber"
              >
                contact form
              </Link>
              {PuppyConcl2}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 pt-8 md:-mt-20 md:gap-12 md:pt-0">
        <div className="divider self-start" />
        <h1 className="mx-4 self-start text-2xl uppercase md:mx-20 md:text-5xl">
          Lily&apos;s Legacy
        </h1>
        <div className="flex justify-start px-2">
          <div className="flex w-screen flex-col justify-start md:mx-20 md:flex-row md:justify-between">
            <div className="z-10 flex flex-col gap-6 rounded-xl bg-timber/50 p-2 dark:bg-smoke/50">
              {LilyIntro.map((section, i) => (
                <p
                  key={i}
                  className="self-center indent-6 text-xs md:max-w-[44rem] md:text-sm"
                >
                  {section}
                </p>
              ))}
            </div>
            <div className="relative z-0 -my-[18rem] md:hidden">
              <Parallax speed={-15}>
                <div className="h-[36rem] w-[36rem] rounded-full bg-ash/25" />
              </Parallax>
            </div>
            <div className="z-10 flex flex-col items-center justify-center gap-4 pt-6 text-sm md:pe-[10rem] md:pt-0 md:text-base">
              <Link
                href={"https://www.lilyslegacy.org"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="neo flex items-center justify-start gap-2 rounded-xl bg-ash/25 p-2">
                  <p>Lily&apos;s Legacy Website</p>
                </div>
              </Link>
              <Link
                href={"https://www.instagram.com/lilyslegacyseniordogs/"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="neo flex items-center justify-start gap-2 rounded-xl bg-timber p-2 dark:bg-smoke">
                  <LuInstagram size={24} />
                  <p>lilyslegacyseniordogs</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-screen flex-col gap-1 md:gap-4">
          <PortraitRow
            images={[sunrise_portrait, reign_sniffing, blackie_portrait]}
          />
          <LandscapeRow images={[blackie_laid_down, reign_butt_scratches]} />
        </div>
        <div className="my-10 flex flex-col gap-6 self-end">
          <div className="divider" />
          <div className="flex flex-row gap-4 self-end text-sm md:pe-10 md:text-base">
            <Link
              href={"https://www.instagram.com/kormylopuppyproject/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="neo flex items-center justify-end gap-2 rounded-xl bg-timber p-2 dark:bg-smoke">
                <LuInstagram size={24} />
                <p>kormylopuppyproject</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyProject;
