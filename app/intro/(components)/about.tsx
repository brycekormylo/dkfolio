"use client";

import Image from "next/image";
import { BsEyeglasses } from "react-icons/bs";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import { useImage } from "@/context/image-provider";

const AboutMeIntro = [
	"Photography has always been more than just capturing images, it's my way of connecting, understanding, and expressing what words often can’t. Growing up in Toronto, I first fell in love with film photography as a teenager in my high school darkroom. Though I spent years photographing weddings and portraits digitally, it was the landscapes of living in Italy and now California that brought me back to my roots. Today I explore connection and stillness through 35mm, medium, and large format film, along with underwater film and drone photography. My work invites viewers to pause and breathe noticing the warmth, resilience, and meaning woven into the spaces we inhabit.",

	"Beyond photography, I’m passionate about healing physically, emotionally, and creatively. Whether working as a certified personal trainer in sports medicine PT or preparing to teach film photography as a tool for healing and recovery, my goal is to create spaces for reflection, growth, and empowerment. Every image, every project, and every connection is part of a larger journey toward helping people see and heal a little differently.",
];

const About = () => {
	const { getImage } = useImage();

	const us_photo = getImage("be_close_up");
	return (
		<div className="flex flex-col">
			<div className="absolute self-end translate -translate-x-[-16rem]">
				<Parallax rotate={[-135, -45]}>
					<div className="rounded-full translate h-[36rem] w-[36rem] -translate-y-[10rem] bg-ash/25" />
				</Parallax>
			</div>

			<div className="flex flex-row gap-8 justify-between px-2 md:p-10">
				<div className="flex flex-col justify-center md:max-w-[60%] [&_*]:transition-all [&_*]:ease-linear">
					<div className="flex flex-col gap-8 py-6 px-2 rounded-xl md:py-12 md:px-8 bg-timber/75 indent-6 shadow-neo dark:bg-smoke/75 dark:shadow-neodark">
						{AboutMeIntro.map((section) => (
							<p key={section} className="text-xs md:text-base">
								{section}
							</p>
						))}

						<Link
							href="about"
							className="z-10 self-end py-2 px-4 rounded-xl neo bg-ash/25"
						>
							<div className="flex gap-2 justify-start items-center -ms-5">
								<p>Read more</p>
								<BsEyeglasses size={24} />
							</div>
						</Link>
					</div>
				</div>

				<div className="hidden relative md:block md:translate-x-40 h-[20rem] w-[20rem] md:h-[32rem] md:w-[32rem]">
					<Image
						src={us_photo.url}
						alt="Circle Image"
						fill={true}
						className="object-cover rounded-full"
						sizes="100vw"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
