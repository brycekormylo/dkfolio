"use client";

import ComingSoon from "@/app/(components)/coming_soon";
import { useImage } from "@/context/image-provider";

export default function Store() {
  const { getImage } = useImage();
  const devils_slide = getImage("devils_slide");
  return (
    <ComingSoon
      image={devils_slide.url}
      title="Store"
      text="We have big plans to expand our services in the future, so stay tuned!"
      href="https://www.instagram.com/kormylophotography/"
      insta="kormylophotography"
      reverse={true}
    />
  );
}

//
// "use client";
//
// import Image from "next/image";
// import ScrollUp from "../(components)/scroll_up";
// import { useImage } from "@/context/image-provider";
//
// export default function Store() {
//   const { getImage } = useImage();
//   const devils_slide = getImage("devils_slide");
//
//   return (
//     <div className="grid min-h-screen py-[4rem]">
//       <ScrollUp />
//       <div className="flex z-10 flex-col col-start-1 row-start-1 gap-4 justify-center justify-self-center items-center self-start py-2 px-4 h-36 text-xl rounded-xl md:mt-24 md:h-96 bg-timber/75 shadow-neo md:w-[40rem] dark:bg-smoke/75 dark:shadow-neodark">
//         <h2 className="text-lg">Store coming soon!</h2>
//         <p className="text-sm text-center">
//           We have big plans to expand our services in the future, so stay tuned.
//         </p>
//       </div>
//       <div className="relative col-start-1 row-start-1 self-start mt-12 md:mt-24 h-[30vw] w-[30vw]">
//         <Image
//           priority
//           src={devils_slide.url}
//           alt="Circle Image"
//           className="z-0 w-64 h-64 rounded-full object-fit blur-sm md:h-[45rem] md:w-[45rem]"
//         />
//       </div>
//       <div className="col-start-1 col-end-1 row-start-1 justify-self-end self-center mb-12 md:self-end md:mb-36 divider" />
//     </div>
//   );
// }
