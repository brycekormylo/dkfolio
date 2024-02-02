"use client";

import ContactForm from "./(components)/form";
import Links from "./(components)/links";
import { Parallax } from "react-scroll-parallax";
import la_jolla_seals from "../../public/images/la_jolla_seals_sm.jpg";
import Image from "next/image";
import ScrollUp from "../(components)/scroll_up";

export default function Contact() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-start overflow-hidden py-[4rem]">
      <ScrollUp />
      <div className="z-10 flex flex-row justify-evenly">
        <ContactForm />
      </div>
      <div className="divider mb-4 mt-12 self-start" />
      <div className="z-10 px-10 md:self-start">
        <Links />
      </div>
      <div className="flex flex-row justify-end">
        <Parallax speed={-15}>
          <div className="translate fixed bottom-0 left-0 z-0 h-[45rem] w-[45rem] translate-y-[22rem] md:translate-x-40">
            <Image
              src={la_jolla_seals}
              alt="Circle Image"
              fill={true}
              className="z-0 rounded-full object-cover blur-md"
            />
          </div>
        </Parallax>
      </div>
    </div>
  );
}
