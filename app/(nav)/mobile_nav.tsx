"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeButton from "../(components)/theme_button";
import { motion } from "framer-motion";
import Title from "./title";
import { useTheme } from "next-themes";
import {
	useRive,
	Layout,
	Fit,
	Alignment,
	useStateMachineInput,
} from "@rive-app/react-canvas";

const NavbarItems = [
	{
		name: "About Us",
		slug: "about",
	},
	{
		name: "Portfolio",
		slug: "portfolio/film",
	},
	{
		name: "Projects",
		slug: "projects/puppy-project",
	},
	{
		name: "Store",
		slug: "store",
	},
	{
		name: "Contact Us",
		slug: "contact",
	},
];

export default function MobileNavBar() {
	const [isExtended, setExtended] = useState<boolean>(false);
	const { theme, setTheme } = useTheme();
	const { rive, RiveComponent } = useRive({
		src: "/riv/menuicon.riv",
		stateMachines: "default",
		autoplay: true,
		layout: new Layout({
			fit: Fit.Contain,
			alignment: Alignment.Center,
		}),
	});

	const extendInput = useStateMachineInput(rive, "default", "extend", false);
	const themeInput = useStateMachineInput(
		rive,
		"default",
		"dark",
		theme === "dark",
	);

	const handleClick = () => {
		setExtended(!isExtended);
		if (extendInput) {
			extendInput.value = !isExtended;
		}
	};

	useEffect(() => {
		if (themeInput) {
			themeInput.value = theme === "dark";
		}
	}, [theme, themeInput]);

	return (
		<div className="flex overflow-hidden flex-col items-center px-8 pt-4 w-screen h-auto">
			<div className="flex z-20 flex-col justify-start items-center py-4 px-2">
				<Link href="/intro">
					<Title />
				</Link>
				<div className="flex flex-row justify-between items-start px-4 pt-4 w-screen">
					<ThemeButton />
					<div
						onClick={handleClick}
						className="flex z-20 justify-center items-center rounded-full neo aspect-square min-h-10 min-w-10"
					>
						<RiveComponent className="w-6 h-6 md:w-8 md:h-8" />
					</div>
				</div>
			</div>
			<motion.div
				initial={{ height: 0 }}
				animate={{ height: isExtended ? 200 : 0, opacity: isExtended ? 1 : 0 }}
				transition={{ type: "spring", stiffness: 100, damping: 16 }}
				className={`${
					isExtended ? "block" : "hidden"
				} absolute right-0 top-0 z-50 me-2 mt-[9rem] flex flex-col items-end justify-start rounded-xl bg-timber p-2 shadow-neo dark:bg-smoke dark:shadow-neodark`}
			>
				{NavbarItems.map((item) => {
					return (
						<Link
							key={item.name}
							onClick={handleClick}
							href={`/${item.slug}`}
							scroll={false}
						>
							<div className="py-2 px-3 text-sm rounded-xl neo">
								{item.slug === "contact" ? (
									<div className="flex gap-2 justify-between items-center">
										<p className="uppercase truncate">{item.name}</p>
										<p className="wave">👋</p>
									</div>
								) : (
									<p className="uppercase truncate">{item.name}</p>
								)}
							</div>
						</Link>
					);
				})}
			</motion.div>
		</div>
	);
}
