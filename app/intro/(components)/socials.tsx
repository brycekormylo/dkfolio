import { LuInstagram } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import bee from "../../../public/images/bee.jpg";

const contact_text =
  "Whether you're yearning to recreate memories, elevate your space with unique artwork, or to simply bask in the beauty of breathtaking scenes and majestic creatures, we're your golden ticket to transforming your dreams into a reality worthy of framing!";

const Socials = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-10">
      <Parallax speed={-5}>
        <div className="z-0 relative h-[10rem] w-[10rem] md:h-[40rem] md:w-[40rem] -translate-x-20">
          <Image
            src={bee}
            alt="Circle Image"
            fill={true}
            className="rounded-full object-cover"
          />
        </div>
      </Parallax>
      <div className="flex md:h-[40rem] flex-col justify-end gap-6 md:gap-20 z-10">
        <div className="divider self-end" />
        <div className="md:me-[10rem] flex h-auto w-screen md:w-[40rem] flex-col justify-start rounded-2xl px-4 py-6 bg-timber/75 dark:bg-smoke/75 shadow-neo dark:shadow-neodark">
          <p className="text-xs md:text-base p-4 indent-6">{contact_text}</p>
          <button
            onClick={() => router.push("contact")}
            className="neo m-4 max-w-[10rem] self-center rounded-2xl bg-ash/25 px-4 py-2"
          >
            <p>Let&apos;s chat</p>
          </button>
        </div>
        <div className="md:me-[10rem] flex md:max-w-[26.2rem] flex-col items-center md:flex-row gap-4 md:self-end md:py-10">
          <Link
            href={"https://www.instagram.com/kormylophotography/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="neo flex items-center justify-start gap-2 rounded-xl p-2">
              <LuInstagram size={24} />
              <p>@kormylophotography</p>
            </div>
          </Link>
          <Link
            href={"https://www.instagram.com/kormylopuppyproject"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="neo flex items-center justify-start gap-2 rounded-xl p-2">
              <LuInstagram size={24} />
              <p>@kormylopuppyproject</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;
