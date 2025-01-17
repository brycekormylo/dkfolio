import { LuHome, LuUser2, LuSquareStack, LuLink2 } from "react-icons/lu";
import Link from "next/link";
import ThemeButton from "../(components)/theme_button";
import Title from "./title";

const NavbarItems = [
	{
		name: "About Us",
		slug: "about",
		icon: LuHome,
	},
	{
		name: "Portfolio",
		slug: "portfolio/film",
		icon: LuUser2,
	},
	{
		name: "Projects",
		slug: "projects/puppy-project",
		icon: LuSquareStack,
	},
	{
		name: "Store",
		slug: "store",
		icon: LuLink2,
	},
	{
		name: "Contact Us",
		slug: "contact",
		icon: LuLink2,
	},
];

export default function NavBar({
	path = "intro",
}: {
	path: string | undefined;
}) {
	return (
		<div className="top-0 z-20 flex h-24 w-screen items-center justify-between px-8 [&_*]:transition-all  [&_*]:duration-75 [&_*]:ease-linear">
			<div className="flex flex-row justify-start items-center">
				<Link href={"/intro"}>
					<Title />
				</Link>
			</div>
			<ThemeButton />
			<div className="flex flex-row items-center">
				{NavbarItems.map((item) => {
					return (
						<Link key={item.slug} href={`/${item.slug}`} scroll={false}>
							<div className="py-2 px-4 rounded-xl text-md neo">
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
			</div>
		</div>
	);
}
