import Image from "next/image";
import lifeguard_tower from "../../../public/images/lifeguard_tower.jpg"
import beach_cliff from "../../../public/images/beach_cliff.jpg"
import river from "../../../public/images/river.jpg"
import yosemite from "../../../public/images/yosemite.jpg"
import devils_slide from "../../../public/images/devils_slide.jpg"
import mussel_paraglider from "../../../public/images/mussel_paraglider.jpg"


const PreviewImages = () => {
  const randomLandscape = "https://source.unsplash.com/random/200×300/?pretty";
  const randomPortrait = "https://source.unsplash.com/random/300×200/?nature";

  return (
    <div className="grid w-screen grid-cols-3 gap-2 my-10">
      <div className="flex flex-col gap-2">
        <div className="relative aspect-[3/2] w-full bg-black">
          <Image
            src={yosemite}
            fill={true}
            className="object-cover"
            alt="Image"
          />
        </div>
        <div className="relative aspect-[2/3] w-full bg-black">
          <Image
            src={lifeguard_tower}
            fill={true}
            alt="Image"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative aspect-[2/3] w-full bg-black">
          <Image
            src={beach_cliff}
            fill={true}
            className="object-cover"
            alt="Image"
          />
        </div>
        <div className="relative aspect-[3/2] w-full bg-black">
          <Image
            src={devils_slide}
            fill={true}
            className="object-cover"
            alt="Image"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative aspect-[3/2] w-full bg-black">
          <Image
            src={mussel_paraglider}
            fill={true}
            className="object-cover"
            alt="Image"
          />
        </div>
        <div className="relative aspect-[2/3] w-full bg-black">
          <Image
            src={river}
            fill={true}
            className="object-cover"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewImages;
