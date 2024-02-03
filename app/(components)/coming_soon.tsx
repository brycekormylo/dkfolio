"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import ScrollUp from "./scroll_up";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

type Props = {
  image: StaticImageData;
  title?: string;
  text?: string;
  href: string;
  insta: string;
  reverse: boolean;
};

const ComingSoon: React.FC<Props> = ({
  image,
  text = "More images coming soon!",
  href,
  insta,
  title,
  reverse,
}) => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-20 overflow-hidden py-[3rem]">
      <ScrollUp />
      <h1
        className={`z-10 self-end pe-2 text-2xl uppercase md:pe-10 md:text-5xl`}
      >
        {title}
      </h1>
      <div className="z-10 flex h-[25rem] flex-col items-center justify-center gap-4 rounded-xl bg-timber/75 px-4 py-2 text-xl shadow-neo dark:bg-smoke/75 dark:shadow-neodark md:w-[40rem]">
        <h2 className="text-lg">{text}</h2>
      </div>
      <div className="z-0 flex flex-row justify-self-end">
        <Parallax speed={-15}>
          <div
            className={`translate fixed bottom-0 z-0 h-[45rem] w-[45rem] ${
              reverse ? "right-0 -translate-x-12" : "left-0 translate-x-12"
            } translate-y-[22rem] p-4`}
          >
            <Image
              priority
              src={image}
              alt="Circle Image"
              fill={true}
              className="z-0 rounded-full object-cover p-4 blur-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Parallax>
      </div>
      <div
        className={`z-10 flex min-w-0 flex-col gap-6 ${
          reverse ? "self-end" : "self-start"
        }`}
      >
        <div
          className={`divider ${
            reverse
              ? "translate-x-10 md:translate-x-0"
              : "-translate-x-10 md:translate-x-0"
          }`}
        />
        <div className="pe-4 md:pe-10">
          <Link href={href} rel="noopener noreferrer" target="_blank">
            <div className="neo flex items-center justify-start gap-2 rounded-xl bg-timber p-2 dark:bg-smoke">
              <LuInstagram size={24} />
              <p>{insta}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
