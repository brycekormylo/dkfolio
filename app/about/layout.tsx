import React, { type ReactNode } from "react";
import Selector from "./_components/selector";
import ScrollUp from "../(components)/scroll_up";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
	return (
		<section>
			<ScrollUp />
			<Selector />
			{children}
		</section>
	);
}
