import { LuInstagram } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import bee from "../../../public/images/bee.jpg";

const contact_text =
  "Whether you're yearning to recreate memories, elevate your space with unique artwork, or to simply bask in the beauty of breathtaking scenes and majestic creatures, we're your golden ticket to transforming your dreams into a reality worthy of framing!";

const Socials = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-screen h-screen">
      <div className="col-start-1 row-start-1 self-start justify-self-start">
        <Parallax speed={-15}>
          <div className="relative z-0 h-[30rem] w-[30rem] ms-[-16rem] md:ms-0 md:h-[45rem] md:w-[45rem]">
            <Image
              src={bee}
              alt="Circle Image"
              fill={true}
              className="z-0 rounded-full object-cover blur-md"
            />
          </div>
        </Parallax>
      </div>
      <div className="col-start-1 row-start-1 z-20 divider self-start justify-self-end" />
      <div className="col-start-1 row-start-1 z-10 flex flex-col justify-center gap-6 self-center md:h-[40rem] md:gap-20">
        <div className="self-center flex h-auto mx-2 flex-col rounded-2xl bg-timber/75 px-4 py-6 shadow-neo dark:bg-smoke/75 dark:shadow-neodark md:max-w-[40rem]">
          <p className="p-2 indent-6 text-xs md:p-4 md:text-base">
            {contact_text}
          </p>
          <button
            onClick={() => router.push("contact")}
            className="neo m-4 max-w-[10rem] self-center rounded-2xl bg-ash/25 px-4 py-2"
          >
            <p>Let&apos;s chat</p>
          </button>
        </div>
        <div className="max-w-screen flex flex-col items-center justify-start gap-4 text-sm md:flex-row md:self-end md:p-10 md:text-base">
          <Link
            href={"https://www.instagram.com/kormylophotography/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="neo flex items-center justify-start gap-2 rounded-xl p-2">
              <LuInstagram size={24} />
              <p>kormylophotography</p>
            </div>
          </Link>
          <Link
            href={"https://www.instagram.com/kormylopuppyproject"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="neo flex items-center justify-start gap-2 rounded-xl p-2">
              <LuInstagram size={24} />
              <p>kormylopuppyproject</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;