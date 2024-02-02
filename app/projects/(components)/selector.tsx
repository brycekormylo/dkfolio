import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import millie_ic from "../../../public/images/millie_ic.jpg";
import sca_foggy_sunset from "../../../public/images/sca_foggy_sunset.jpg";

const SelectorItems = [
  {
    name: "Puppy Project",
    slug: "lilly",
    img: millie_ic,
  },
  {
    name: "Black + White",
    slug: "bw",
    img: sca_foggy_sunset,
  },
];

const Selector = () => {
  return (
    <div className="flex flex-row justify-center gap-2 py-4 md:gap-[9rem] md:py-10">
      {SelectorItems.map((item, i) => (
        <Link
          key={i}
          href={item.slug}
          scroll={false}
          className="neo flex flex-col items-center justify-between gap-2 rounded-2xl px-2 py-4 md:gap-6 md:px-4 md:py-10"
        >
          <div className="relative flex h-[5rem] w-[5rem] md:h-[18rem] md:w-[18rem]">
            <Image
              src={item.img}
              alt="Circle Image"
              fill={true}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex justify-center rounded-full md:h-10 md:w-40">
            <h2 className="text-md self-center md:text-xl">{item.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Selector;
