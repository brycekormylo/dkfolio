"use client";

import { LuInstagram } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { useImage } from "@/context/image-provider";

const contact_text =
  "Whether you're yearning to recreate memories, elevate your space with unique artwork or to simply bask in the beauty of breathtaking scenes with majestic creatures, we're your golden ticket to transforming your dreams into a reality worth framing!";

const Socials = () => {
  const router = useRouter();
  const { getImage } = useImage();

  const bee = getImage("bee").url;
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-screen h-screen">
      <div className="col-start-1 row-start-1 justify-self-start self-start">
        <Parallax speed={-15}>
          <div className="relative z-0 ms-[-16rem] h-[30rem] w-[30rem] md:ms-0 md:h-[45rem] md:w-[45rem]">
            <Image
              src={bee}
              alt="Circle Image"
              fill={true}
              className="object-cover z-0 rounded-full blur-md"
            />
          </div>
        </Parallax>
      </div>
      <div className="divider z-20 col-start-1 row-start-1 self-start justify-self-end [&_*]:transition-all [&_*]:ease-linear" />
      <div className="flex z-10 flex-col col-start-1 row-start-1 gap-6 justify-center self-center md:gap-20 md:h-[40rem]">
        <div className="mx-2 flex h-auto flex-col self-center rounded-2xl bg-timber/75 px-4 py-6 shadow-neo dark:bg-smoke/75 dark:shadow-neodark md:max-w-[40rem] [&_*]:transition-all [&_*]:ease-linear">
          <p className="p-2 text-xs md:p-4 md:text-base indent-6">
            {contact_text}
          </p>
          <button
            onClick={() => router.push("contact")}
            className="self-center py-2 px-4 m-4 rounded-2xl neo max-w-[10rem] bg-ash/25"
          >
            <p>Let&apos;s chat</p>
          </button>
        </div>
        <div className="max-w-screen flex flex-col items-center justify-start gap-4 self-end p-2 text-sm md:flex-row md:p-10 md:text-base [&_*]:transition-all [&_*]:ease-linear">
          <Link
            href={"https://www.instagram.com/kormylophotography/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex gap-2 justify-start items-center p-2 rounded-xl neo">
              <LuInstagram size={24} />
              <p>kormylophotography</p>
            </div>
          </Link>
          <Link
            href={"https://www.instagram.com/kormylopuppyproject"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex gap-2 justify-start items-center p-2 rounded-xl neo">
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
