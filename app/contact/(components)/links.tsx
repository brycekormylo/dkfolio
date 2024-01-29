import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

const Links = () => {
  return (
    <div className="flex max-w-[26.2rem] flex-col md:flex-row gap-4 text-sm md:text-base">
      <Link href={"https://www.instagram.com/kormylophotography/"}>
        <div className="neo flex items-center justify-start gap-2 rounded-xl p-2">
          <LuInstagram size={24} />
          <p>@kormylophotography</p>
        </div>
      </Link>
      <Link href={"https://www.instagram.com/kormylopuppyproject"}>
        <div className="neo flex items-center justify-start gap-2 rounded-xl p-2">
          <LuInstagram size={24} />
          <p>@kormylopuppyproject</p>
        </div>
      </Link>
    </div>
  );
};

export default Links;
