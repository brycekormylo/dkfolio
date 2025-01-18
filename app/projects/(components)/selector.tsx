"use client";

import { useImage } from "@/context/image-provider";
import Image from "next/image";
import Link from "next/link";

const Selector = () => {
	const { getImage } = useImage();

	const millie_ic = getImage("ice_cream_millie");
	const charlie_car = getImage("roadtrip_charlie");
	const pillar = getImage("bw_pillar");

	const SelectorItems = [
		{
			name: "Puppy Project",
			slug: "puppy-project",
			img: millie_ic,
		},
		{
			name: "Black + White",
			slug: "bw",
			img: pillar,
		},
		{
			name: "A Day in the Life",
			slug: "life",
			img: charlie_car,
		},
	];
	return (
		<div className="flex flex-row justify-evenly gap-2 py-4 md:py-10 [&_*]:transition-all [&_*]:ease-linear">
			{SelectorItems.map((item) => (
				<Link
					key={item.name}
					href={item.slug}
					scroll={false}
					className="flex flex-col gap-2 justify-between items-center py-4 px-2 rounded-2xl md:gap-6 md:py-10 md:px-4 neo"
				>
					<div className="flex relative h-[5rem] w-[5rem] md:h-[18rem] md:w-[18rem]">
						<Image
							priority
							src={item.img.url}
							alt="Circle Image"
							fill={true}
							className="object-cover rounded-full"
							sizes="100vw"
						/>
					</div>
					<div className="flex justify-center rounded-full md:h-10 md:w-[12rem]">
						<h2 className="self-center text-center md:text-xl text-md">
							{item.name}
						</h2>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Selector;
