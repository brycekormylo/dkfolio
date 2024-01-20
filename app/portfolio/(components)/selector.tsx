import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import millie_ic from "../../../public/images/millie_ic.jpg";
import yosemite from "../../../public/images/yosemite.jpg";
import cow from "../../../public/images/cow.jpg";

const SelectorItems = [
  {
    name: "Film",
    slug: "film",
    img: cow,
  },
  {
    name: "Digital",
    slug: "digital",
    img: millie_ic,
  },
  {
    name: "Drone",
    slug: "drone",
    img: yosemite,
  },
];

const Selector = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col py-10 md:flex-row md:justify-evenly md:gap-4">
      {SelectorItems.map((item, i) => (
        <Link
          key={i}
          href={`${item.slug}`}
          scroll={false}
          className={`${
            pathname === `/portfolio` + item.slug ? 'active' : ''
          } neo active:shadow-neo flex flex-col items-center justify-between gap-6 rounded-2xl px-4 py-10`}
        >
          <div className="relative flex h-[18rem] w-[18rem]">
            <Image
              src={item.img}
              alt="Circle Image"
              fill={true}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex h-10 w-40 justify-center rounded-full">
            <h2 className="self-center text-2xl">{item.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Selector;
