"use client";

import Image from "next/image";
import Link from "next/link";
import { useImage } from "@/context/image-provider";

const Selector = () => {
  const { getImage } = useImage();
  const ellie_overlook = getImage("ellie_overlook");
  const bryce = getImage("bryce");
  const cm_fixation_beach = getImage("cm_fixation_beach");

  const SelectorItems = [
    {
      name: "Danielle",
      slug: "/about/danielle",
      img: ellie_overlook,
    },
    {
      name: "Bryce",
      slug: "/about/bryce",
      img: bryce,
    },
    {
      name: "Charlie + Millie",
      slug: "/about/dogs",
      img: cm_fixation_beach,
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
          <div className="flex justify-center rounded-full md:h-10 md:w-50">
            <h2 className="self-center text-center md:text-2xl text-md">
              {item.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Selector;
