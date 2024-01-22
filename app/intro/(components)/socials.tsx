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
    <div className="flex flex-row items-center justify-between gap-12 py-10">
      <Parallax speed={-15}>
        <div className="relative h-[40rem] w-[40rem] -translate-x-20">
          <Image
            src={bee}
            alt="Circle Image"
            fill={true}
            className="rounded-full object-cover"
          />
        </div>
      </Parallax>
      <div className="flex h-[40rem] flex-col justify-end gap-20">
        <div className="divider self-end" />
        <div className="me-[10rem] flex h-auto w-[40rem] flex-col justify-start rounded-2xl px-4 py-6 shadow-neo dark:shadow-neodark">
          <p className="text-md p-4 indent-6">{contact_text}</p>
          <button
            onClick={() => router.push("contact")}
            className="neo m-4 max-w-[10rem] self-center rounded-2xl bg-ash/25 px-4 py-2"
          >
            <p>Let&apos;s chat</p>
          </button>
        </div>
        <div className="me-[10rem] flex max-w-[26.2rem] flex-row gap-4 self-end py-10">
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
