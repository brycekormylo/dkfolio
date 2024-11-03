"use client";

import ComingSoon from "@/app/(components)/coming_soon";
import { useImage } from "@/context/image-provider";

const BlackAndWhite = () => {
  const { getImage } = useImage();
  const pillar = getImage("bw_pillar");
  return (
    <ComingSoon
      image={pillar.url}
      title="Black + White"
      href="https://www.instagram.com/kormylophotography/"
      insta="kormylophotography"
      reverse={true}
    />
  );
};

export default BlackAndWhite;
