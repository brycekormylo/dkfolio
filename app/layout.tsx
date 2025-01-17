import type { Metadata } from "next";
import { montserrat } from "@/public/fonts";
import NavBar from "./(nav)/nav";
import MobileNavBar from "./(nav)/mobile_nav";
import { Providers } from "./providers";
import "../public/styles/globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.kormylophotography.com"),
	title: "Danielle Kormylo || Film Landscape and Wildlife Photographer",
	description: "Portfolio website",
	keywords: ["Danielle", "Kormylo", "Photography", "photographer", "film"],
	openGraph: {
		images: "https://i.ibb.co/2s0r1xv/opengraph-image.jpg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<main className={`stack ${montserrat.className}`}>
						<div className="fixed top-0 right-0 bottom-0 left-0 z-0 bg-timber dark:bg-smoke" />
						<div className="flex overflow-x-hidden z-10 flex-col bg-timber text-smoke dark:bg-smoke dark:text-timber">
							<div className="hidden md:block">
								<NavBar path="intro" />
							</div>
							<div className="block md:hidden">
								<MobileNavBar />
							</div>
							{children}
						</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
