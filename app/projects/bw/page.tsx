"use client";

import Image from "next/image";
import ModalImage from "@/app/(components)/modal_image";
import ScrollUp from "@/app/(components)/scroll_up";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import sca from "../../../public/images/sca_foggy_sunset.jpg";

const BlackAndWhite = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-20 overflow-hidden py-[4rem]">
      <ScrollUp />
      <div className="z-10 flex h-[25rem] w-[40rem] flex-col items-center justify-center gap-4 rounded-xl bg-timber/75 px-4 py-2 text-xl shadow-neo dark:bg-smoke/75 dark:shadow-neodark">
        <h2 className="text-lg">More images coming soon!</h2>
      </div>
      <div className="flex flex-row justify-end">
        <Parallax speed={-15}>
          <div className="translate fixed bottom-0 right-0 z-0 h-[45rem] w-[45rem] translate-y-[30rem] md:-translate-x-40">
            <Image
              src={sca}
              alt="Circle Image"
              fill={true}
              className="z-0 rounded-full object-cover blur-md"
            />
          </div>
        </Parallax>
      </div>
      <div className="flex flex-col gap-6 self-end">
        <div className="divider" />
        <div className="self-end px-10">
          <Link href={"https://www.instagram.com/kormylophotography/"}>
            <div className="neo flex items-center justify-start gap-2 rounded-xl p-2">
              <LuInstagram size={24} />
              <p>kormylophotography</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlackAndWhite;
