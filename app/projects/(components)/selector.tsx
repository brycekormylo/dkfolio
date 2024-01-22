import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import millie_ic from "../../../public/images/millie_ic.jpg";

const SelectorItems = [
  {
    name: "Puppy Project",
    slug: "lilly",
    img: millie_ic,
  }
];

const Selector = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col py-10 md:flex-row md:justify-evenly md:gap-4">
      {SelectorItems.map((item, i) => (
        <Link
          key={i}
          href={`${item.slug}`}
          scroll={false}
          className={`${
            pathname === `/projects` + item.slug ? 'active' : ''
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
            <h2 className="self-center text-xl">{item.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Selector;
