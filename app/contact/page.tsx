"use client";
import ContactForm from "./(components)/form";
import Links from "./(components)/links";
import Image from "next/image";
import ScrollUp from "../(components)/scroll_up";
import { useImage } from "@/context/image-provider";

export default function Contact() {
  const { getImage } = useImage();
  const la_jolla_seals = getImage("la_jolla_seals").url;
  return (
    <div className="grid overflow-hidden py-8 w-screen min-h-screen md:h-auto md:py-[4rem]">
      <ScrollUp />
      <div className="flex z-10 col-start-1 row-start-1 justify-center">
        <ContactForm />
      </div>
      <div className="col-start-1 row-start-2 self-end md:row-start-1 divider" />
      <div className="z-10 col-start-1 row-start-2 self-end pb-8 mt-16 md:row-start-1 md:px-10 md:mt-0">
        <Links />
      </div>
      <div className="col-start-1 row-start-2 justify-self-end self-end -mt-36 md:row-start-1 md:mt-0">
        <Image
          priority
          src={la_jolla_seals}
          alt="Circle Image"
          className="z-0 w-64 h-64 rounded-full object-fit blur-sm md:h-[45rem] md:w-[45rem]"
        />
      </div>
    </div>
  );
}
