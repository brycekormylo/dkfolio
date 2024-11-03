"use client";

import { useImage } from "@/context/image-provider";
import Image from "next/image";
import Link from "next/link";

const Selector = () => {
  const { getImage } = useImage();

  const palm = getImage("palm");
  const drone_shore = getImage("beach_drone");
  const squirrel = getImage("squirrel");

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
  return (
    <div className="flex flex-row justify-evenly gap-2 py-4 md:py-10 [&_*]:transition-all [&_*]:ease-linear">
      {SelectorItems.map((item, i) => (
        <Link
          key={i}
          href={`${item.slug}`}
          scroll={false}
          className={`neo flex flex-col items-center justify-between gap-2 rounded-2xl px-2 py-4 active:shadow-neo md:gap-6 md:px-4 md:py-10`}
        >
          <div className="flex relative h-[5rem] w-[5rem] md:h-[18rem] md:w-[18rem]">
            <Image
              priority
              src={item.img.url}
              alt="Circle Image"
              fill={true}
              className="object-cover rounded-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex justify-center rounded-full md:w-40 md:h-10">
            <h2 className="self-center md:text-2xl text-md">{item.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Selector;
