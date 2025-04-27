"use client";

import { useImage } from "@/context/image-provider";
import Image from "next/image";
import Link from "next/link";

const Circles = () => {
	const { getImage } = useImage();

	const millie_ic = getImage("ice_cream_millie");
	const yosemite = getImage("yosemite");
	const devils_slide = getImage("devils_slide");

	const CircleItems = [
		{
			name: "Portfolio",
			slug: "portfolio/film",
			img: devils_slide,
		},
		{
			name: "Projects",
			slug: "projects/puppy-project",
			img: millie_ic,
		},
		{
			name: "Store",
			slug: "store",
			img: yosemite,
		},
	];

	return (
		<div className="flex flex-row justify-evenly gap-2 py-4 md:gap-4 md:py-10 [&_*]:transition-all [&_*]:ease-linear">
			{CircleItems.map((item) => (
				<Link
					key={item.slug}
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
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>

					<div className="flex justify-center rounded-full md:w-40 md:h-10">
						<h2 className="self-center md:text-2xl text-md">{item.name}</h2>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Circles;
