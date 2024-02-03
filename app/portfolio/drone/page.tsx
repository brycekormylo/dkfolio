"use client";

import ModalImage from "@/app/(components)/modal_image";
import Image from "next/image";
import ScrollUp from "@/app/(components)/scroll_up";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

import drone_shore from "../../../public/images/drone_shore.jpg";

import { LuInstagram } from "react-icons/lu";
import ComingSoon from "@/app/(components)/coming_soon";

const Drone = () => {
  return (
    <ComingSoon
      image={drone_shore}
      href="https://www.instagram.com/drone.ylo/"
      insta="drone.ylo"
      reverse={true}
    />
  );
};

export default Drone;
