import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuGlasses } from "react-icons/lu";
import ellie_overlook from "../../../public/images/ellie_overlook.jpg";
import { Parallax, useParallax } from "react-scroll-parallax";

const AboutMeIntro =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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
        <div className="flex max-w-[60%] flex-col justify-center gap-4 indent-6">
          <p>{AboutMeIntro}</p>
          <p>{AboutMeIntro}</p>
          <button
            onClick={() => router.push("about")}
            className="max-w-[10rem] self-end rounded-2xl bg-ash/25 px-4 py-2 neo"
          >
            <div className="flex items-center justify-evenly gap-2">
              <p>Read more</p>
              <LuGlasses size={24} />
            </div>
          </button>
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
