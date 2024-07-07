"use client";

import CircleImage from "@/app/(components)/circle_image";
import { Parallax } from "react-scroll-parallax";
import millie from "../../../public/images/boat_millie.jpg";
import charlie from "../../../public/images/roadtrip_charlie.jpg";

const about_dogs = [
  "Charlie, our resident Ravenclaw, is an Australian shepherd who thrives on challenges, both physical and mental. She delights in road trips, she's a whiz at beach frisbee, loves to show off, and will do anything for top-notch snacks! As a creative genius with boundless energy, Charlie has an unmatched love for high-quality treats. She's constantly teaching herself new tricks just to indulge in her favourite snacks. This affectionate ball of joy can brighten anyone's day, forcing you to love her whether you want to or not! When Charlie isn't conquering the great outdoors or camping, she likes to kick back by watching her favourite shows and movies like Avatar The Last Airbender, Korra, Moana, and Shrek! Of course, the experience isn't complete until she peacefully dozes off with a ball in her mouth and legs stretched out like a little bear rug.",

  "While love and fairness triumph in the end, our mischievous Hufflepuff Millie might dip her toes into a bit of assholery before coming around. Sensitive and sweet, Millie is one of the most intelligent velcro dogs alive! Like any border collie, this sassy girl is always weighing her options before making a decision. Work smarter, not harder definitely applies to this one. She is Charlie's biggest fan, has been catching frisbees like a pro since she was 3.5 months old, and adores all outdoor activities... provided Bryce picks her up or she can jump into the wagon when she's ready to collapse! She loves solving puzzles and has a knack for naming and finding toys. Millie looks forward to her favourite daily routines including morning fish oil and nightly dark snackums, followed by taking her role as the middle spoon between Bryce and Danielle very seriously.",
];

const Dogs = () => {
  return (
    <div className="-mt-[4rem] flex min-h-screen flex-col items-center justify-start px-2 md:-mt-[10rem] md:flex-row-reverse md:justify-evenly">
      <Parallax speed={-10}>
        <div className="max-w-screen flex flex-col">
          <div className="flex h-[44rem] w-[36rem] flex-row justify-center md:-mt-32 md:h-[36rem] md:w-[36rem]">
            <CircleImage
              src={millie}
              alignment="self-end translate-x-12 md:translate-x-0 -translate-y-12 md:translate-y-0"
            />
            <CircleImage
              src={charlie}
              alignment="self-start -translate-x-12 md:translate-x-0 translate-y-12 md:translate-y-0"
            />
          </div>
        </div>
      </Parallax>
      <div className="-mt-10 flex flex-col justify-between gap-10 rounded-xl bg-timber/25 p-2 dark:bg-smoke/25 md:mt-0 md:max-w-[48rem] md:bg-transparent md:dark:bg-transparent">
        <h1 className="self-end text-2xl uppercase md:text-5xl">
          Woof, we&apos;re Charlie and Millie
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
