"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import ellie_img from "../../../public/images/aspen.jpg";
import ellie_overlook from "../../../public/images/ellie_overlook.jpg";

const about_ellie = [
  "The lead brain, heart, and lens behind Kormylo Photography! Originating from maple roots, my voyage with film photography blossomed back in high school in Toronto, Canada. I'm obsessed with the mechanical dance and technical tango of film, from scouting locations to developing and printing, it's a process that makes you savour each step by slowing down time in the best way possible. As a restless spirit, I naturally expanded into digital and drone photography, revelling in the varied ways I could approach my subjects. Initially I dabbled in portraiture and weddings, but during my adventures living in Italy and the San Fransisco Bay Area life's twists and turns led me to the serene strength of landscape and wildlife photography. After feeling the burnout from years of digital portraiture, this transition reignited my passion and has been a game changer!",

  "Being the unconventional soul that I am, I decided to fuse my twin passions for photography and kinesiology into the captivating world of landscape and wildlife photography. Currently wrapping up my AS photography degree with high honours, I'm also on the track to completing my Bachelor of Kinesiology and AS Physiotherapy Assistant degrees. My offbeat journey also includes a background in optics, injecting my work with a blend of scientific precision and artistic finesse. This unique blend isn't just about capturing stunning shots for me, it's about activating muscles, preventing injuries, and creating space for a grounded, more intentional presence.  Landscape and wildlife photography is not just a creative outlet for me, but a physical and mental rejuvenation, making every shot feel like a triumph!",

  "I thrive on pushing the limits in my work, I aim to encapsulate the essence and significance of each moment. In my travels I've immersed myself in diverse cultures and traditions, using my camera as a storyteller to showcase the unique beauty of each place and its people. I believe photography is a universal language that transcends cultural boundaries, bringing people together. Through my lens, I aspire to bridge gaps, fostering a deeper understanding and appreciation for our shared world. The world's natural beauty constantly fuels my inspiration, propelling me to explore and capture its wonders through my lens. Whether you're yearning for a custom snapshot of your spirit animal, want to relive those cozy camping escapades, or simply crave a space uplift, we're honoured to embark on this special journey with you and bring your dreams to life. Let's make some photographic magic together! 📸✨",
];

const Ellie = () => {
  return (
    <div className="flex h-screen items-center justify-evenly py-20">
      <div className="flex flex-col justify-between gap-10 md:max-w-[42vw]">
        <h1 className="self-end text-5xl uppercase">Hiya, I&apos;m Danielle </h1>
        <div className="flex flex-col justify-evenly gap-4">
          {about_ellie.map((section, i) => (
            <p key={i} className="indent-6 text-sm">
              {section}
            </p>
          ))}
        </div>
      </div>
      <Parallax speed={-15}>
        <div className="relative z-0 h-[36rem] w-[36rem]">
          <Image
            src={ellie_overlook}
            alt="Circle Image"
            fill={true}
            className="rounded-full object-cover"
          />
        </div>
      </Parallax>
    </div>
  );
};

export default Ellie;
