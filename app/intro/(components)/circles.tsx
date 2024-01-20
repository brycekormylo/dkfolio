import Image from "next/image";
import { useRouter } from "next/navigation";
import millie_ic from "../../../public/images/millie_ic.jpg"
import yosemite from "../../../public/images/yosemite.jpg"
import cow from "../../../public/images/cow.jpg"


const CircleItems = [
  {
    name: "Portfolio",
    slug: "portfolio",
    img: cow,
  },
  {
    name: "Projects",
    slug: "projects",
    img: millie_ic,
  },
  {
    name: "Store",
    slug: "store",
    img: yosemite,
  },
];

const Circles = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col py-10 md:flex-row md:justify-evenly md:gap-4">
      {CircleItems.map((item, i) => (
        <button
          key={i}
          onClick={() => router.push(item.slug)}
          className="flex flex-col items-center justify-between gap-6 rounded-2xl px-4 py-10 neo"
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
        </button>
      ))}
    </div>
  );
};

export default Circles;
