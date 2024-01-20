import { LuInstagram } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import ContactForm from "./(components)/form";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex h-screen w-full flex-col py-10 gap-10">
      <div className="flex flex-col gap-8 px-10 max-w-[26.2rem]">
        <Link href={"https://www.instagram.com/kormylophotography/"}>
          <div className="flex items-center justify-start gap-2 rounded-xl p-2 neo">
            <LuInstagram size={24} />
            <p>@kormylophotography</p>
          </div>
        </Link>
        <Link href={"mailto:danielle@kormylophotography.com"}>
          <div className="flex items-center justify-start gap-2 rounded-xl p-2 neo">
            <HiOutlineMail size={24} />
            <p>danielle@kormylophotography.com</p>
          </div>
        </Link>
      </div>
      <div className="divider self-start" />
      <ContactForm />
    </div>
  );
}
