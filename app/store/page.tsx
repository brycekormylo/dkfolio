"use client";

import { Parallax } from "react-scroll-parallax";
import devils_slide from "../../public/images/devils_slide.jpg";
import Image from "next/image";
import ScrollUp from "../(components)/scroll_up";

export default function Store() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-20 overflow-hidden py-[4rem]">
      <ScrollUp />
      <h2 className="z-10 flex h-[25rem] w-[40rem] items-center justify-center rounded-xl bg-timber/75 px-4 py-2 text-xl shadow-neo dark:bg-smoke/75 dark:shadow-neodark">
        Store coming soon!
      </h2>
      <div className="flex flex-row justify-end">
        <Parallax speed={-15}>
          <div className="translate fixed bottom-0 right-0 z-0 h-[45rem] w-[45rem] -translate-x-40 translate-y-[22rem]">
            <Image
              src={devils_slide}
              alt="Circle Image"
              fill={true}
              className="z-0 rounded-full object-cover blur-md"
            />
          </div>
        </Parallax>
      </div>
      <div className="divider self-end" />
    </div>
  );
}
