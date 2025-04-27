"use client";

import React, { useEffect } from "react";
import {
	useRive,
	Layout,
	Fit,
	Alignment,
	useStateMachineInput,
} from "@rive-app/react-canvas";
import { useTheme } from "next-themes";

const Title = () => {
	const { theme } = useTheme();
	const { rive, RiveComponent } = useRive({
		src: "/riv/camera.riv",
		artboard: "main",
		autoplay: true,
		stateMachines: "default",
		layout: new Layout({
			fit: Fit.Contain,
			alignment: Alignment.Center,
		}),
	});

	const isHovered = useStateMachineInput(rive, "default", "hover", false);
	const themeInput = useStateMachineInput(
		rive,
		"default",
		"dark",
		theme === "dark",
	);

	const handleHover = (entered: boolean) => {
		if (rive && isHovered) {
			isHovered.value = entered;
		}
	};

	useEffect(() => {
		if (themeInput) {
			themeInput.value = theme === "dark";
		}
	}, [theme, themeInput]);

	return (
		<div
			onMouseEnter={() => handleHover(true)}
			onMouseLeave={() => handleHover(false)}
			className="flex flex-wrap justify-start items-center py-1 px-2 text-lg uppercase rounded-xl md:py-2 md:px-4 md:text-3xl neo"
		>
			<p className="-me-0">Kormylo Phot</p>
			<RiveComponent className="w-8 h-8 md:w-12 md:h-12" />
			<p className="-ms-0">graphy</p>
		</div>
	);
};

export default Title;
