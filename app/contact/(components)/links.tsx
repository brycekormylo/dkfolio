import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

const Links = () => {
  return (
    <div className="flex w-screen flex-col items-center gap-4 text-sm md:flex-row md:text-base">
      <Link href={"https://www.instagram.com/kormylophotography/"}>
        <div className="neo flex items-center justify-start gap-2 rounded-xl bg-timber p-2 dark:bg-smoke">
          <LuInstagram size={24} />
          <p>kormylophotography</p>
        </div>
      </Link>
      <Link
        href={"https://www.instagram.com/kormylopuppyproject"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="neo flex items-center justify-start gap-2 rounded-xl bg-timber p-2 dark:bg-smoke">
          <LuInstagram size={24} />
          <p>kormylopuppyproject</p>
        </div>
      </Link>
    </div>
  );
};

export default Links;
