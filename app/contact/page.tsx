"use client";

import ContactForm from "./(components)/form";
import Links from "./(components)/links";
import { Parallax } from "react-scroll-parallax";
import la_jolla_seals from "../../public/images/la_jolla_seals.jpg";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex max-h-screen w-full flex-col overflow-hidden py-4">
      <div className="z-10 flex flex-row justify-evenly">
        <ContactForm />
      </div>
      <div className="self-start p-10">
        <Links />
      </div>
      <div className="flex flex-row justify-end">
        <Parallax speed={-15}>
          <div className="translate fixed bottom-0 right-0 z-0 h-[45rem] w-[45rem] translate-x-40 translate-y-[16rem]">
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
