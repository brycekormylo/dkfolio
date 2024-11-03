"use client";

import { useImage } from "@/context/image-provider";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import ellie_overlook from "../../../public/images/ellie_overlook.jpg";

const about_ellie_pt1 = [
  "As the lead brain, heart, and lens behind Kormylo Photography, I’ve always been driven by a deep love for the craft. Rooted in Toronto’s maple-scented streets, my passion for film photography blossomed at 15 years old. I was obsessed with the mechanical dance and technical tango of film, from scouting locations to developing and printing in the darkroom. It’s an intricate and meditative process, one that slows down time and makes each step deliberate, allowing every moment to be fully savoured. Restless by nature, I soon expanded into digital and drone photography, revelling in the creative possibilities they opened. Although I initially focused on portraiture and weddings, my time living in Italy and California ignited a deep connection with landscapes and wildlife. After years of digital burnout, returning to nature and film felt like rediscovering my purpose, which has been a game changer for me!",

  "I believe photography isn’t just about capturing beautiful images, it’s about connecting with my subjects on a personal level. That’s why being the unconventional soul I am, I decided to fuse my twin passions for photography and kinesiology. I currently work as a PT Aide and Transitional Trainer in a sports medicine physiotherapy clinic. I have been incredibly fortunate to receive unwavering support from Bryce, which has been instrumental in advancing my career while still maintaining high honours.",
];

interface EducationItem {
  title: string;
  award?: string;
  cert?: string;
}

const education = {
  title: "Current Professional Background",

  items: [
    {
      title: "City College of San Francisco",
      award: "Associate Science Photography",
      cert: "Black and White Darkroom Certified",
    },

    {
      title: "Wilfred Laurier University - In progress",
      award: "Bachelor of Science Kinesiology with a Minor in Psychology",
    },

    {
      title: "Accredited NASM Certified Personal Trainer",
    },
    {
      title: "Nutrition Certification",
    },

    { title: "6 years of clinical background in optometry and ophthalmology" },
  ],
};

const about_ellie_pt2 = [
  "This unique combination of skills allows me to approach my work holistically with mind, body, and camera in perfect harmony. My offbeat journey merges scientific precision with artistic finesse, focusing on activating muscles, preventing injuries, and creating a more grounded, intentional presence. This awareness sharpens my ability to see light, composition, and the story behind each image, ensuring every shot is purposeful and well timed! Whether capturing wildlife in its natural element or clients in their most authentic moments, every shot is both an artistic and physical victory, anchoring me while pushing the boundaries of my creativity.",
  "At Kormylo Photography, we thrive on pushing the limits in our work! Our mission is to create meaningful connections through our lens. I’ve been fortunate to immerse myself in diverse cultures and landscapes, using my camera to tell stories that celebrate the beauty and uniqueness of each subject. I believe photography is a universal language, one that transcends limitations and brings people closer to nature, to each other, and to themselves. Through my lens, I aspire to bridge gaps and develop a deeper understanding and appreciation for our shared world.",
  "When I’m not behind the lens, I love staying active by going to the gym and hiking, playing volleyball, going paragliding, and taking the dogs out to do agility or play frisbee. I also enjoy playing piano and singing, painting in numerous mediums like oil, watercolour, acrylic, and gouache. I love building cool resin tables with my husband Bryce or diving into a good video game like Twilight Princess, Halo 3, Smash Bros, Mario Kart and more! Growing up on N64 games taught me what it’s like to play life on hard mode, which is why I choose to shoot wildlife on film. I either enjoy challenging myself too much or I hate myself. The line is fine! 😂",
  "If you're looking for a unique perspective to bring your dreams to life, whether it’s a custom wildlife snapshot, a cherished quick moment in nature, whether it's providing the perfect image to hang on your wall as a daily reminder of joy or refreshing your personal and commercial spaces with artwork that speaks to your soul, I’m here to make it happen. At Kormylo Photography we don’t just capture images, we capture the spirit and essence of each moment and build a deeper connection to the world around us.",
  "With film, the possibilities feel limitless! Check out our services page for more details on our current packages and available prints.",
  "Let's make some magic together! 📸✨",
];

const Ellie = () => {
  const { getImage } = useImage();
  const ellie_overlook = getImage("ellie_overlook").url;
  return (
    <div className="flex flex-col justify-start items-center px-2 min-h-screen md:flex-row-reverse md:justify-evenly md:py-20">
      <Parallax speed={-10}>
        <div className="relative z-0 h-[16rem] w-[16rem] md:h-[36rem] md:w-[36rem]">
          <Image
            priority
            src={ellie_overlook}
            alt="Circle Image"
            fill={true}
            className="object-cover rounded-full"
            sizes="100vw"
          />
        </div>
      </Parallax>
      <div className="flex z-10 flex-col gap-10 justify-between p-2 rounded-xl bg-timber/75 md:max-w-[42vw] dark:bg-smoke/75">
        <h1 className="self-end text-2xl uppercase md:text-5xl">
          Hiya, I&apos;m Danielle
        </h1>
        <div className="flex flex-col gap-4 justify-evenly">
          {about_ellie_pt1.map((section, i) => (
            <p key={i} className="text-xs md:text-sm indent-6">
              {section}
            </p>
          ))}
          <div className="flex flex-col gap-4 py-12">
            <h2 className="text-2xl">{education.title}</h2>
            {education.items.map((item, index) => {
              return (
                <div key={index} className="flex flex-col px-4">
                  <h3 className="py-2 text-lg">{item.title}</h3>
                  {item.award && (
                    <p className="px-4">
                      {"- "}
                      {item.award}
                    </p>
                  )}
                  {item.cert && (
                    <p className="px-4">
                      {"- "}
                      {item.cert}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          {about_ellie_pt2.map((section, i) => (
            <p key={i} className="text-xs md:text-sm indent-6">
              {section}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ellie;
