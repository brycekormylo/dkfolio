import Image from "next/image";
import chimney_cow from "../../../public/images/chimney_cow.jpg";
import river from "../../../public/images/river.jpg";
import cow from "../../../public/images/cow.jpg";
import la_jolla_seals from "../../../public/images/la_jolla_seals.jpg";
import squirrel from "../../../public/images/squirrel.jpg";
import aspen from "../../../public/images/aspen.jpg";
import beach_cliff from "../../../public/images/beach_cliff.jpg";
import bee from "../../../public/images/bee.jpg";
import devils_slide from "../../../public/images/devils_slide.jpg";
import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg";
import millie_ic from "../../../public/images/millie_ic.jpg";
import yosemite from "../../../public/images/yosemite.jpg";

const Film = () => {
  const images = [
    chimney_cow,
    river,
    cow,
    la_jolla_seals,
    squirrel,
    aspen,
    beach_cliff,
    bee,
    devils_slide,
    lifeguard_tower,
    millie_ic,
    yosemite,
  ];

  return (
    <div className="grid grid-cols-2 gap-5 p-5">
      {images.map((image, i) => (
        <div key={i} className="relative h-[80vh] w-auto">
          <Image
            src={image}
            fill={true}
            className="object-contain"
            alt="Portfolio Image"
          />
        </div>
      ))}
    </div>
  );
};

export default Film;
