import { LuInstagram } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import ContactForm from "./(components)/form";

export default function Contact() {
  return (
    <div className="flex h-screen w-full flex-col py-10 gap-10">
      <div className="flex flex-col gap-8 px-10">
        <div className="flex items-center gap-2">
          <LuInstagram size={24} />
          <p>@kormylophotography</p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineMail size={24} />
          <p>danielle@kormylophotography.com</p>
        </div>
      </div>
      <div className="h-[1px] w-[40vw] self-start bg-ash" />
      <ContactForm />
    </div>
  );
}
