import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import millie_ic from "../../../public/images/millie_ic.jpg";
import yosemite from "../../../public/images/yosemite.jpg";
import devils_slide from "../../../public/images/devils_slide.jpg";

const CircleItems = [
  {
    name: "Portfolio",
    slug: "portfolio/film",
    img: devils_slide,
  },
  {
    name: "Projects",
    slug: "projects/lilly",
    img: millie_ic,
  },
  {
    name: "Store",
    slug: "store",
    img: yosemite,
  },
];

const Circles = () => {
  return (
    <div className="flex flex-row justify-evenly gap-2 py-4 md:gap-4 md:py-10 [&_*]:transition-all [&_*]:ease-linear">
      {CircleItems.map((item, i) => (
        <Link
          key={i}
          href={item.slug}
          scroll={false}
          className="neo flex flex-col items-center justify-between gap-2 rounded-2xl px-2 py-4 md:gap-6 md:px-4 md:py-10"
        >
          <div className="relative flex h-[5rem] w-[5rem] md:h-[18rem] md:w-[18rem]">
            <Image
              priority
              src={item.img}
              alt="Circle Image"
              fill={true}
              className="rounded-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex justify-center rounded-full md:h-10 md:w-40">
            <h2 className="text-md self-center md:text-2xl">{item.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Circles;
