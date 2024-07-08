import ContactForm from "./(components)/form";
import Links from "./(components)/links";
import la_jolla_seals from "../../public/images/la_jolla_seals_sm.jpg";
import Image from "next/image";
import ScrollUp from "../(components)/scroll_up";

export default function Contact() {
  return (
    <div className="grid h-[200vh] w-screen flex-col overflow-hidden py-[4rem] md:h-auto">
      <ScrollUp />
      <div className="z-10 col-start-1 row-start-1 flex flex-row items-start justify-center">
        <ContactForm />
      </div>
      <div className="divider col-start-1 row-start-1 self-end" />
      <div className="z-10 col-start-1 row-start-1 self-end pb-8 md:px-10">
        <Links />
      </div>
      <div className="col-start-1 row-start-1 mb-16 self-end justify-self-end md:mb-0 md:mt-24">
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
