import Image from "next/image";
import { LuGlasses } from "react-icons/lu";

const AboutMeIntro =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="h-[1px] w-[40%] self-start rounded-full bg-smoke"></div>
      <div className="flex flex-row justify-evenly gap-12 p-10">
        <div className="flex max-w-[60%] flex-col justify-center gap-4 indent-6">
          <p>{AboutMeIntro}</p>
          <p>{AboutMeIntro}</p>
          <button className="max-w-[10rem] self-end rounded-2xl bg-ash/25 p-4 hover:scale-[1.02] hover:shadow-neo [&_*]:transition-all [&_*]:ease-linear">
            <div className="flex items-center justify-evenly gap-2">
              <p>Read more</p>
              <LuGlasses size={24} />
            </div>
          </button>
        </div>
        <div className="">
          <Image
            src={"https://source.unsplash.com/random/400x600/?pretty,lady"}
            width={400}
            height={600}
            alt="Circle Image"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
