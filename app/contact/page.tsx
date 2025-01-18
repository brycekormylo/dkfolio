"use client";

import ContactForm from "./(components)/form";
import Links from "./(components)/links";
import Image from "next/image";
import ScrollUp from "../(components)/scroll_up";
import { useImage } from "@/context/image-provider";

export default function Contact() {
	const { getImage } = useImage();
	const la_jolla_seals = getImage("la_jolla_seals").url;

	return (
		<div className="grid overflow-hidden py-8 w-screen min-h-screen md:h-auto md:py-[4rem]">
			<ScrollUp />
			<div className="flex z-10 col-start-1 row-start-1 justify-center">
				<ContactForm />
			</div>

			<div className="flex z-10 flex-col col-start-1 row-start-2 gap-6 self-end pb-8 mt-16 md:row-start-1 md:mt-0">
				<div className="divider" />
				<div className="ms-4 md:ms-8">
					<Links />
				</div>
			</div>

			<div className="col-start-1 row-start-2 justify-self-end self-end -mt-36 md:row-start-1 md:mt-0">
				<div className="relative z-0 h-[16rem] w-[16rem] md:h-[48rem] md:w-[48rem]">
					<Image
						priority
						src={la_jolla_seals}
						alt="Circle Image"
						fill={true}
						className="object-cover rounded-full"
						sizes="100vw"
					/>
				</div>
			</div>
		</div>
	);
}
