"use client";

import Image, { StaticImageData } from "next/image";
import { Parallax } from "react-scroll-parallax";
import ScrollUp from "./scroll_up";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

type Props = {
	image: string;
	title?: string;
	text?: string;
	href: string;
	insta: string;
	reverse: boolean;
};

const ComingSoon = ({
	image,
	text = "More images coming soon!",
	href,
	insta,
	title,
	reverse,
}: Props) => {
	return (
		<div className="flex overflow-hidden flex-col gap-20 justify-center items-center w-screen min-h-screen py-[3rem]">
			<ScrollUp />

			<h1 className="z-10 self-end text-2xl uppercase md:text-5xl pe-2 md:pe-36">
				{title}
			</h1>

			<div className="flex z-10 flex-col gap-4 justify-center items-center py-2 px-4 text-xl rounded-xl h-[25rem] bg-timber/75 shadow-neo md:w-[40rem] dark:bg-smoke/75 dark:shadow-neodark">
				<h2 className="text-lg text-center md:px-32">{text}</h2>
			</div>

			<div className="flex z-0 flex-row justify-self-end">
				<Parallax speed={-15}>
					<div
						className={`translate fixed bottom-0 z-0 h-[45rem] w-[45rem] ${
							reverse ? "right-0 -translate-x-12" : "left-0 translate-x-12"
						} translate-y-[22rem] p-4`}
					>
						<Image
							priority
							src={image}
							alt="Circle Image"
							fill={true}
							className="object-cover z-0 p-4 rounded-full blur-sm"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</Parallax>
			</div>

			<div
				className={`z-10 flex min-w-0 flex-col gap-6 ${
					reverse ? "items-end self-end" : "items-start self-start"
				}`}
			>
				<div
					className={`divider ${
						reverse
							? "translate-x-10 md:translate-x-0"
							: "-translate-x-10 md:translate-x-0"
					}`}
				/>
				<div className="px-4 md:pe-10 [&_*]:transition-all [&_*]:ease-linear">
					<Link href={href} rel="noopener noreferrer" target="_blank">
						<div className="flex flex-row gap-2 p-2 rounded-xl neo bg-timber dark:bg-smoke">
							<LuInstagram size={24} />
							<p>{insta}</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ComingSoon;
