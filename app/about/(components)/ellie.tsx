"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import ellie_overlook from "../../../public/images/ellie_overlook.jpg";

const about_ellie = [
  "The lead brain, heart, and lens behind Kormylo Photography! Originating from Toronto maple roots, my excitement for film photography blossomed when I was 15 years old. I'm obsessed with the mechanical dance and technical tango of film, from scouting locations to developing and printing in the darkroom, it's a process that makes you savour each step by slowing down time in the best way possible! As a restless spirit, I naturally expanded into digital and drone photography, revelling in the varied ways I could approach my subjects. Initially I dabbled in portraiture and weddings, but during my adventures living in Italy and California, I gravitated to the serene strength of landscapes and wildlife. After feeling burnout from years of soley shooting digital portraiture, this transition reignited my passion and has been a game changer for me!",

  "Being the unconventional soul that I am, I decided to fuse my twin passions for photography and kinesiology. I'm currently wrapping up my AS Photography degree at CCSF and I am darkroom certified. Simultaneously, I work as a PT aide and Transitional Trainer in physiotherapy and am progressing towards completing my NASM-CPT licence, Bachelor of Kinesiology, Minor in Psychology, and AS Physiotherapy Assistant degrees. I have been incredibly fortunate to receive unwavering support from Bryce, which has been instrumental in advancing my career while still maintaining my 4.0 GPA. My offbeat journey also includes a clincial background in optics, and combines scientific precision with artistic finesse. This unique blend isn't just about taking stunning shots for me, it's about activating muscles, preventing injuries, and making space for a more grounded, intentional presence. The clearer my mind, the better I can understand yours. Landscape and wildlife photography is not just a creative outlet, but a physical and mental rejuvenation, making every shot feel like a victory!",

  "I thrive on pushing the limits in my work, aiming to encapsulate the essence and significance of each moment. In my travels I've immersed myself in diverse cultures and traditions, using my camera as a storyteller to showcase the beauty of each place and its people. I make it my mission to bring out the authentic you by immersing myself into your world and perspective, capturing moments that truly represent the spark within you. I believe photography is a universal language that transcends cultural boundaries, bringing people together. Through my lens, I aspire to bridge gaps and develop a deeper understanding and appreciation for our shared world. The natural beauty surrounding us with it's diverse wildlife constantly fuels my inspiration, propelling me to explore and capture the wonder through my lens. Whether you're longing for a custom snapshot of your spirit animal, just want to relive those cozy camping escapades or simply crave a space uplift, we're honoured to embark on this special journey with you and bring your dreams to life. Let's make some magic together! 📸✨",
];

const Ellie = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-2 md:flex-row-reverse md:justify-evenly md:py-20">
      <Parallax speed={-10}>
        <div className="relative z-0 h-[16rem] w-[16rem] md:h-[36rem] md:w-[36rem]">
          <Image
            priority
            src={ellie_overlook}
            alt="Circle Image"
            fill={true}
            className="rounded-full object-cover"
            sizes="100vw"
          />
        </div>
      </Parallax>
      <div className="z-10 flex flex-col justify-between gap-10 rounded-xl bg-timber/75 p-2 dark:bg-smoke/75 md:max-w-[42vw]">
        <h1 className="self-end text-2xl uppercase md:text-5xl">
          Hiya, I&apos;m Danielle
        </h1>
        <div className="flex flex-col justify-evenly gap-4">
          {about_ellie.map((section, i) => (
            <p key={i} className="indent-6 text-xs md:text-sm">
              {section}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ellie;
