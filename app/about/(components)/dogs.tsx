"use client";

import Image from "next/image";
import CircleImage from "@/app/(components)/circle_image";
import { Parallax } from "react-scroll-parallax";
import millie from "../../../public/images/boat_millie.jpg";
import charlie from "../../../public/images/roadtrip_charlie.jpg";

const about_dogs = [
  "Charlie, our resident Ravenclaw, is an Australian shepherd who thrives on challenges, both physical and mental. She delights in road trips, beach frisbee, and tricks with top-notch snacks! A creative genius and super intelligent, Charlie's love for high-quality treats will forever be unmatched. This affectionate ball of joy can brighten anyone's day, making us proud pet parents. When Charlie isn't conquering the great outdoors, she kicks back by indulging in her favourite shows; Avatar, Moana, and Shrek! And of course, the experience isn't complete until she peacefully dozes off with a ball in her mouth.",

  "While love and fairness triumph in the end, our mischievous Hufflepuff Millie might dabble in a bit of assholery before coming around. Millie, sensitive and sweet, is one of the most intelligent velcro dogs alive! Like any border collie, she is always weighing her options before making a decision. She's Charlie's biggest fan, adores park outings, and beach frisbee frolics! Millie looks forward to her favourite daily routines including morning fish oil and nightly dark snackums, followed by taking her role as the nightly middle spoon between Bryce and Danielle very seriously.",
];

const Dogs = () => {
  return (
    <div className="mt-[10rem] flex h-screen flex-col items-center justify-start px-2 md:-mt-[10rem] md:flex-row-reverse md:justify-evenly">
      <Parallax speed={-10}>
        <div className="flex h-[30rem] w-[30rem] flex-row justify-center md:-mt-32 md:h-[36rem] md:w-[36rem]">
          <CircleImage src={millie} alignment="self-end" />
          <CircleImage src={charlie} alignment="self-start" />
        </div>
      </Parallax>
      <div className="flex flex-col justify-between gap-10 rounded-xl bg-timber/25 p-2 dark:bg-smoke/25 md:max-w-[48rem]">
        <h1 className="self-end text-2xl uppercase md:text-5xl">
          Hi, we&apos;re Charlie and Millie
        </h1>
        <div className="flex flex-col justify-evenly gap-4">
          {about_dogs.map((section, i) => (
            <p key={i} className="indent-6 text-xs md:text-sm">
              {section}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dogs;
