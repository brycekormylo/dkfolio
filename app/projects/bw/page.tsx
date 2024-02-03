"use client";

import pillar from "../../../public/images/bw_pillar.jpg";
import ComingSoon from "@/app/(components)/coming_soon";

const BlackAndWhite = () => {
  return (
    <ComingSoon
      image={pillar}
      title="Black + White"
      href="https://www.instagram.com/kormylophotography/"
      insta="kormylophotography"
      reverse={true}
    />
  );
};

export default BlackAndWhite;
