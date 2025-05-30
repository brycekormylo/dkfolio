"use client";

import React, { useState } from "react";

import {
	useRive,
	useStateMachineInput,
	Layout,
	Fit,
	Alignment,
} from "@rive-app/react-canvas";
import { useTheme } from "next-themes";

const delay = (ms: number | undefined) =>
	new Promise((resolve) => setTimeout(resolve, ms));

const ThemeButton = () => {
	const { theme, setTheme } = useTheme();
	const [isChangingTheme, setIsChangingTheme] = useState(false);
	const { rive, RiveComponent } = useRive({
		src: "/riv/themeicon.riv",
		artboard: "main",
		stateMachines: "default",
		autoplay: true,
		layout: new Layout({
			fit: Fit.Contain,
			alignment: Alignment.Center,
		}),
	});

	const iconStrokeIsDark = useStateMachineInput(
		rive,
		"default",
		"darklines",
		theme !== "dark",
	);
	const isHovered = useStateMachineInput(rive, "default", "hover", false);
	const themeIsDark = useStateMachineInput(
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

	const handleThemeToggle = async () => {
		setIsChangingTheme(true);
		if (themeIsDark) {
			themeIsDark.value = !themeIsDark.value;
		}
		await delay(800);
		if (iconStrokeIsDark) {
			iconStrokeIsDark.value = !iconStrokeIsDark.value;
		}
		setTheme(theme === "dark" ? "light" : "dark");
		setIsChangingTheme(false);
	};

	return (
		<button
			type="button"
			onMouseEnter={() => handleHover(true)}
			onMouseLeave={() => handleHover(false)}
			onClick={handleThemeToggle}
			disabled={isChangingTheme}
			className="flex justify-center items-center ml-2 w-10 h-10 bg-gray-800 rounded-full md:w-12 md:h-12 neo"
		>
			<RiveComponent className="w-6 h-6 md:w-8 md:h-8" />
		</button>
	);
};

export default ThemeButton;
