"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import millie from "../../../public/images/millie_ic.jpg";

const about_dogs = [
  "My name is Danielle Kormylo and I am the proud owner of our family business Kormylo Photography! In my early days as a photographer, I focused mainly on portrait photography, however over time I found myself increasingly drawn to the beauty and serenity of landscapes. I discovered that I had a natural talent for capturing the grandeur and uniqueness of different landscapes and I fell in love with the process of exploring new locations and discovering hidden gems. With honours in my Associate Science Photography degree and Bachelor of Kinesiology degree in the making, my skill set has drastically expanded and this combination of art and science is what sets my photography apart. I am constantly striving to push the boundaries of what is possible through my work. From scouting out locations to developing and printing film, I enjoy each step of the photography process!",

  "I'm always inspired by the natural beauty of my surroundings and have plans to explore the world and capture its wonders through my camera lens. Through my travels, I have been fortunate enough to experience and appreciate different cultures and traditions around the world. I enjoy using my camera as a way to document and showcase the beauty of these cultures and the people who make them special. Whether it's a portrait of a local artisan, a sweeping landscape dotted with ancient architecture, or a bustling city street filled with vibrant colours, I strive to capture the essence of the place and its meaning. I truly believe that photography is a universal language that can bring people from different cultures and backgrounds together. Through my work, I hope to bridge gaps and foster greater understanding and appreciation for the world we all share.",

  "Please join me on my journey as I roam the world expressing my passion for film photography and document my explorations into the breathtaking natural world. From towering mountain ranges to serene sunset seascapes, I aim to convey the magnificence of our planet and inspire others to appreciate its wonders.",
];

const Dogs = () => {
  return (
    <div className="flex h-screen items-center justify-evenly py-20">
      <div className="flex flex-col justify-between gap-10 md:max-w-[42vw]">
        <h1 className="self-end text-5xl uppercase">Hi, I&apos;m Millie</h1>
        <div className="flex flex-col justify-evenly gap-4">
          {about_dogs.map((section, i) => (
            <p key={i} className="indent-6 text-sm">
              {section}
            </p>
          ))}
        </div>
      </div>
      <Parallax speed={-15}>
        <div className="relative z-0 h-[36rem] w-[36rem]">
          <Image
            src={millie}
            alt="Circle Image"
            fill={true}
            className="rounded-full object-cover"
          />
        </div>
      </Parallax>
    </div>
  );
};

export default Dogs;
