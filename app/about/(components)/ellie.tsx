"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import ellie_overlook from "../../../public/images/ellie_overlook.jpg";

const about_ellie = [
  "The lead brain, heart, and lens behind Kormylo Photography! Originating from maple roots, my voyage with film photography blossomed back in high school in Toronto, Canada. I'm obsessed with the mechanical dance and technical tango of film, from scouting locations to developing and printing in the darkroom, it's a process that makes you savour each step by slowing down time in the best way possible! As a restless spirit, I naturally expanded into digital and drone photography, revelling in the varied ways I could approach my subjects. Initially I dabbled in portraiture and weddings, but during my adventures living in Italy and the San Fransisco Bay Area life's twists and turns led me to the serene strength of landscapes and wildlife. After feeling the burnout from years of digital portraiture, this transition reignited my passion and has been a game changer!",

  "Being the unconventional soul that I am, I decided to fuse my twin passions for photography and kinesiology. Currently wrapping up my AS Photography degree at CCSF, I'm darkroom certified, and I'm also on the track to completing my Bachelor of Kinesiology and AS Physiotherapy Assistant degrees with high honours. My offbeat journey also includes a background in optics, injecting my work with a blend of scientific precision and artistic finesse. This unique blend isn't just about capturing stunning shots for me, it's about activating muscles, preventing injuries, and creating space for a grounded, more intentional presence. Landscape and wildlife photography is not just a creative outlet, but a physical and mental rejuvenation, making every shot feel like a triumph!",

  "I thrive on pushing the limits in my work, aiming to encapsulate the essence and significance of each moment. In my travels I've immersed myself in diverse cultures and traditions, using my camera as a storyteller to showcase the beauty of each place and its people. I make it my mission to bring out the authentic you by immersing myself in your world and perspective, capturing moments that truly represent the spark within you. I believe photography is a universal language that transcends cultural boundaries, bringing people together. Through my lens, I aspire to bridge gaps, developing a deeper understanding and appreciation for our shared world. The world's natural beauty and diverse wildlife constantly fuel my inspiration, propelling me to explore and capture the wonder through my lens. Whether you're yearning for a custom snapshot of your spirit animal, want to relive those cozy camping escapades, or simply crave a space uplift, we're honoured to embark on this special journey with you and bring your dreams to life. Let's make some magic! 📸✨",
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
