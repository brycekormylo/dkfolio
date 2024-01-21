"use client";

import ModalImage from "@/app/(components)/modal_image";
import chimney_cow from "../../../public/images/chimney_cow.jpg";
import river from "../../../public/images/river.jpg";
import cow from "../../../public/images/cow.jpg";
import la_jolla_seals from "../../../public/images/la_jolla_seals.jpg";
import squirrel from "../../../public/images/squirrel.jpg";
import aspen from "../../../public/images/aspen.jpg";
import beach_cliff from "../../../public/images/beach_cliff.jpg";
import bee from "../../../public/images/bee.jpg";
import devils_slide from "../../../public/images/devils_slide.jpg";
import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg";
import millie_ic from "../../../public/images/millie_ic.jpg";
import yosemite from "../../../public/images/yosemite.jpg";
import LandscapeRow from "../../(components)/landscape_row";
import PortraitRow from "../../(components)/portrait_row";
import CircleImage from "@/app/(components)/circle_image";
import millie from "../../../public/images/millie_ic.jpg";

const PuppyProjectIntro = [
  "Let's join paws and make a difference together! We channel our passion into supporting dog rescues and shelters across the SF Bay Area to expedite adoptions and create lasting connections between dogs and their compatible families. The Puppy Project, inspired by our very sweet and misunderstood senior dog Wolfe, reshaped our adoption perspectives. Wolfe's reactivity issues, stemming from 9 years of abuse, led us to professional training, benefiting us even today. The unexpected loss of Ollie at just 4 years old finally initiated our project, emphasizing the urgency of placing dogs, especially seniors, into the right homes swiftly. Committed to ensuring no time is lost for pups seeking forever homes, every moment with our companions is precious!",

  "Our firm belief in the power of quality presentation drives us to volunteer, capturing personalized photos and building unique websites that tell each dog's story. The fusion of our photography expertise with unwavering dedication prioritizes the comfort of every dog, allowing us to authentically capture their shining personalities. As an iOS and web developer with an eye for design, Bryce recognizes the importance of user-friendly websites blending functionality with aesthetic appeal. We are excited to announce this service will be available soon! If you're up for a website or app revamp, hop on our waitlist via the contact us form. Let's create tails of happiness! ",
];

const LillyLegacy = () => {
  const portraits = [
    river,
    cow,
    la_jolla_seals,
    squirrel,
    aspen,
    beach_cliff,
    lifeguard_tower,
    millie_ic,
  ];
  const landscapes = [devils_slide, chimney_cow, yosemite, bee];

  return (
    <div className="flex flex-col gap-12">
      <h1 className="self-end px-20 pt-10 text-6xl uppercase">Puppy Project</h1>
      <div className="flex flex-row justify-between">
        <div className="text-md flex max-w-[69rem] flex-col items-start justify-start gap-4 px-2 indent-6 md:px-12">
          {PuppyProjectIntro.map((section, i) => (
            <p key={i}>{section}</p>
          ))}
        </div>
        <div className="flex h-[36rem] w-[36rem] flex-row justify-center">
          <CircleImage src={millie} alignment="self-end" mini={true} />
          <CircleImage src={millie} alignment="self-start" mini={true} />
        </div>
      </div>
      <div className="flex flex-col gap-12 -mt-20">
        <div className="divider self-start" />
        <div className="flex w-screen flex-col gap-3">
          <PortraitRow images={[river, cow, aspen]} />
          <LandscapeRow images={[devils_slide, chimney_cow]} />
          <PortraitRow images={[la_jolla_seals, squirrel, beach_cliff]} />
          <LandscapeRow images={[yosemite, bee]} />
        </div>
        <div className="divider my-10 self-end" />
      </div>
    </div>
  );
};

export default LillyLegacy;
