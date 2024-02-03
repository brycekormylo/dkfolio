"use client";

import Image from "next/image";
import ModalImage from "@/app/(components)/modal_image";
import ScrollUp from "@/app/(components)/scroll_up";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import sca from "../../../public/images/sca_foggy_sunset.jpg";
import ComingSoon from "@/app/(components)/coming_soon";

const Digital = () => {
  return (
    <ComingSoon
      image={sca}
      href="https://www.instagram.com/digikorm/"
      insta="digikorm"
      reverse={false}
    />
  );
};

export default Digital;
