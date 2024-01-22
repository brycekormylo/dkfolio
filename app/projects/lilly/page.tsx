"use client";

import ModalImage from "@/app/(components)/modal_image";
import blackie_laid_down from "../../../public/images/puppy/blackie_laid_down.jpg";
import sunrise_portrait from "../../../public/images/puppy/sunrise_portrait.jpg";
import blackie_portrait from "../../../public/images/puppy/blackie_portrait.jpg";
import reign_sniffing from "../../../public/images/puppy/reign_sniffing.jpg";
import reign_butt_scratches from "../../../public/images/puppy/reign_butt_scratches.jpg";

import LandscapeRow from "../../(components)/landscape_row";
import PortraitRow from "../../(components)/portrait_row";
import CircleImage from "@/app/(components)/circle_image";
import ollie from "../../../public/images/ollie.jpg";
import wolfe from "../../../public/images/wolfe.jpg";

const PuppyProjectIntro = [
  "Let's join paws and make a difference together! We channel our passion into supporting dog rescues and shelters across the SF Bay Area to expedite adoptions and create lasting connections between dogs and their compatible families. The Puppy Project, inspired by our very sweet and misunderstood senior dog Wolfe, reshaped our adoption perspectives. Wolfe's reactivity issues, stemming from 9 years of abuse, led us to professional training, benefiting us even today. The unexpected loss of Ollie at just 4 years old finally initiated our project, emphasizing the urgency of placing dogs, especially seniors, into the right homes swiftly. Committed to ensuring no time is lost for pups seeking forever homes, every moment with our companions is precious!",

  "Our firm belief in the power of quality presentation drives us to volunteer, capturing personalized photos and building unique websites that tell each dog's story. The fusion of our photography expertise with unwavering dedication prioritizes the comfort of every dog, allowing us to authentically capture their shining personalities. As an iOS and web developer with an eye for design, Bryce recognizes the importance of user-friendly websites blending functionality with aesthetic appeal. We are excited to announce this service will be available soon! If you're up for a website or app revamp, hop on our waitlist via the contact us form. Let's create tails of happiness! ",
];

const LillyLegacy = () => {
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
          <CircleImage src={ollie} alignment="self-end -mx-20" mini={true} />
          <CircleImage src={wolfe} alignment="self-start -mx-20" mini={true} />
        </div>
      </div>
      <div className="-mt-20 flex flex-col gap-12">
        <div className="divider self-start" />
        <div className="flex w-screen flex-col gap-4">
          <PortraitRow
            images={[sunrise_portrait, reign_sniffing, blackie_portrait]}
          />
          <LandscapeRow images={[blackie_laid_down, reign_butt_scratches]} />
        </div>
        <div className="divider my-10 self-end" />
      </div>
    </div>
  );
};

export default LillyLegacy;
