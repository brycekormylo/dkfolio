import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import palm from "../../../public/images/palm.jpg";
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
    img: palm,
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
    <div className="flex flex-row justify-evenly gap-2 py-4 md:py-10">
      {SelectorItems.map((item, i) => (
        <Link
          key={i}
          href={`${item.slug}`}
          scroll={false}
          className={`${
            pathname === `/portfolio` + item.slug ? "active" : ""
          } neo flex flex-col items-center justify-between gap-2 rounded-2xl px-2 py-4 active:shadow-neo md:gap-6 md:px-4 md:py-10`}
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

export default Selector;
