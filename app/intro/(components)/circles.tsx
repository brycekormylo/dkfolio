import Image from "next/image";
import { useRouter } from "next/navigation";

const CircleItems = [
  {
    name: "Portfolio",
    slug: "portfolio",
    img: "https://source.unsplash.com/random/300×300/?sexy",
  },
  {
    name: "Projects",
    slug: "projects",
    img: "https://source.unsplash.com/random/300×300/?dog",
  },
  {
    name: "Store",
    slug: "store",
    img: "https://source.unsplash.com/random/300×300/?bdsm",
  },
];

const Circles = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col py-10 md:flex-row md:justify-evenly md:gap-4 [&_*]:transition-all [&_*]:ease-linear">
      {CircleItems.map((item, i) => (
        <button
          key={i}
          onClick={() => router.push(item.slug)}
          className="flex flex-col items-center justify-between gap-6 rounded-2xl px-4 py-10 hover:scale-[1.02] hover:shadow-neo"
        >
          <div className="relative flex h-[18rem] w-[18rem]">
            <Image
              src={item.img}
              alt="Circle Image"
              fill={true}
              className="rounded-full"
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
