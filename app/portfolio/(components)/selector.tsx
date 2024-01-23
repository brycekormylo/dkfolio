import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import sca_foggy_sunset from "../../../public/images/sca_foggy_sunset.jpg";
import drone_shore from "../../../public/images/drone_shore.jpg";
import squirrel from "../../../public/images/squirrel.jpg";

const SelectorItems = [
  {
    name: "Film",
    slug: "film",
    img: squirrel,
  },
  {
    name: "Digital",
    slug: "digital",
    img: sca_foggy_sunset,
  },
  {
    name: "Drone",
    slug: "drone",
    img: drone_shore,
  },
];

const Selector = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row py-4 md:py-10 justify-evenly gap-2 md:gap-4">
      {SelectorItems.map((item, i) => (
        <Link
          key={i}
          href={`${item.slug}`}
          scroll={false}
          className={`${
            pathname === `/portfolio` + item.slug ? 'active' : ''
          } neo active:shadow-neo flex flex-col items-center justify-between gap-2 md:gap-6 rounded-2xl px-2 py-4 md:px-4 md:py-10`}
        >
          <div className="relative flex h-[5rem] w-[5rem] md:h-[18rem] md:w-[18rem]">
            <Image
              src={item.img}
              alt="Circle Image"
              fill={true}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex md:h-10 md:w-40 justify-center rounded-full">
            <h2 className="self-center text-md md:text-2xl">{item.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Selector;
