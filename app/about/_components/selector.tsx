import Image from "next/image";
import Link from "next/link";
import ellie_overlook from "../../../public/images/ellie_overlook.jpg";
import bryce from "../../../public/images/bryce.jpg";
import cm_fixation_beach from "../../../public/images/cm_fixation_beach.jpg";

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

const Selector = () => {
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
              src={item.img}
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
