import ContactForm from "./(components)/form";
import Links from "./(components)/links";
import la_jolla_seals from "../../public/images/la_jolla_seals_sm.jpg";
import Image from "next/image";
import ScrollUp from "../(components)/scroll_up";

export default function Contact() {
  return (
    <div className="grid min-h-screen w-screen overflow-hidden py-8 md:h-auto md:py-[4rem]">
      <ScrollUp />
      <div className="z-10 col-start-1 row-start-1 flex justify-center">
        <ContactForm />
      </div>
      <div className="divider col-start-1 row-start-2 self-end md:row-start-1" />
      <div className="z-10 col-start-1 row-start-2 mt-16 self-end pb-8 md:row-start-1 md:mt-0 md:px-10">
        <Links />
      </div>
      <div className="col-start-1 row-start-2 -mt-36 self-end justify-self-end md:row-start-1 md:mt-0 ">
        <Image
          priority
          src={la_jolla_seals}
          alt="Circle Image"
          className="object-fit z-0 h-64 w-64 rounded-full blur-sm md:h-[45rem] md:w-[45rem]"
        />
      </div>
    </div>
  );
}
