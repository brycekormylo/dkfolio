import { LuInstagram } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Socials = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-evenly items-center py-10 [&_*]:transition-all [&_*]:ease-linear">
      <div className="flex flex-col gap-8">
        <Link href={"https://www.instagram.com/kormylophotography/"}>
          <div className="flex items-center justify-start gap-2 rounded-xl p-2 hover:scale-[1.02] hover:shadow-neo">
            <LuInstagram size={24} />
            <p>@kormylophotography</p>
          </div>
        </Link>
        <Link href={"mailto:danielle@kormylophotography.com"}>
          <div className="flex items-center justify-start gap-2 rounded-xl p-2 hover:scale-[1.02] hover:shadow-neo">
            <HiOutlineMail size={24} />
            <p>danielle@kormylophotography.com</p>
          </div>
        </Link>
      </div>
      <button
        onClick={() => router.push("contact")}
        className="max-w-[10rem] rounded-2xl bg-ash/25 p-4 hover:scale-[1.02] hover:shadow-neo"
      >
        <p>Contact us</p>
      </button>
    </div>
  );
};

export default Socials;
