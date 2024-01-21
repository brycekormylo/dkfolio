import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuGlasses } from "react-icons/lu";
import ellie_overlook from "../../../public/images/ellie_overlook.jpg";
import { Parallax, useParallax } from "react-scroll-parallax";

const AboutMeIntro = [
  "Nestled in the vibrant San Francisco Bay Area, Danielle and Bryce, accompanied by their two dogs, Charlie and Millie, made their creative mark when they transplanted in February 2020. What sets them apart? They're not just photographers; they're perpetual creatives! Constantly immersed in building, designing, and extending their creativity beyond the lens, they infuse every aspect of their lives with a touch of innovation.",

  "Danielle and Bryce's love story began in the magical city of Bergamo, Italy, e parlano Italiano ancora! They are the definition of passionate adventurers! From hiking, cultural exploration, and music-making to sports like volleyball and surfing, excitement fuels their active lives. Engaging in 3D modelling, painting, woodwork, epoxy resin projects, and a myriad of other creative pursuits, they are forever learners at heart. Dreaming big is second nature to them and their journey never stops! When it's time to unwind, catch them kicking back watching Harry Potter or diving into the magical world of the Legend of Zelda.",
];

const About = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="translate absolute -translate-x-[-16rem] self-end">
        <Parallax rotate={[-135, -45]}>
          <div className="translate h-[78vh] w-[78vh] -translate-y-[10rem] rounded-full bg-ash/25"></div>
        </Parallax>
      </div>
      <div className="flex flex-row justify-between gap-8 p-10">
        <div className="flex max-w-[60%] flex-col justify-center">
          <div className="flex flex-col gap-8 indent-6 shadow-neo dark:shadow-neodark px-8 py-12 rounded-xl">
            {AboutMeIntro.map((section, i) => (
              <p key={i}>{section}</p>
            ))}
            <button
              onClick={() => router.push("about")}
              className="neo max-w-[10rem] self-end rounded-xl bg-ash/25 px-4 py-2"
            >
              <div className="flex items-center justify-evenly gap-2">
                <p>Read more</p>
                <LuGlasses size={24} />
              </div>
            </button>
          </div>
        </div>
        <div className="relative h-[72vh] w-[80vh] translate-x-40">
          <Image
            src={ellie_overlook}
            alt="Circle Image"
            fill={true}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
