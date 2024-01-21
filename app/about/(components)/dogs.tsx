"use client";

import Image from "next/image";
import CircleImage from "@/app/(components)/circle_image";
import { Parallax } from "react-scroll-parallax";
import millie from "../../../public/images/millie_ic.jpg";

const about_dogs = [
  "Charlie, our resident Ravenclaw, is an Australian shepherd who thrives on challenges, both physical and mental. She delights in road trips, beach frisbee, and tricks with top-notch snacks! A creative genius and super intelligent, Charlie's love for high-quality treats will forever be unmatched. This affectionate ball of joy can brighten anyone's day, making us proud pet parents. When Charlie isn't conquering the great outdoors, she kicks back by indulging in her favourite shows; Avatar, Moana, and Shrek! And of course, the experience isn't complete until she peacefully dozes off with a ball in her mouth.",

  "While love and fairness triumph in the end, our mischievous Hufflepuff Millie might dabble in a bit of assholery before coming around. Millie, sensitive and sweet, is one of the most intelligent velcro dogs alive! Like any border collie, she is always weighing her options before making a decision. She's Charlie's biggest fan, adores park outings, and beach frisbee frolics! Millie looks froward to her favourite daily routine including morning fish oil and nightly dark snackums, followed by taking her role as the nightly middle spoon between Bryce and Danielle very seriously."
];

const Dogs = () => {
  return (
    <div className="flex h-screen items-center justify-evenly py-20">
      <div className="flex flex-col justify-between gap-10 md:max-w-[48rem]">
        <h1 className="self-end text-5xl uppercase">Hi, we&apos;re Charlie and Millie</h1>
        <div className="flex flex-col justify-evenly gap-4">
          {about_dogs.map((section, i) => (
            <p key={i} className="indent-6 text-sm">
              {section}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center w-[36rem] h-[36rem]">
        <CircleImage src={millie} alignment="self-start" mini={true}/>
        <CircleImage src={millie} alignment="self-end" mini={true}/>
      </div>
    </div>
  );
};

export default Dogs;
