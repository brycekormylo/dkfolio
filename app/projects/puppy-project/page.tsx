"use client";

import LandscapeRow from "../../(components)/landscape_row";
import PortraitRow from "../../(components)/portrait_row";
import CircleImage from "@/app/(components)/circle_image";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import { Parallax } from "react-scroll-parallax";
import { useImage } from "@/context/image-provider";

const PuppyProjectIntro = [
	"We channel our passions into supporting dog rescues and shelters across the SF Bay Area, creating lasting connections between dogs and their compatible families to speed up adoptions. Our firm belief in the power of quality presentation drives us to volunteer, capturing personalized photos and building custom websites that tell everyone's story. Understanding dog psychology and body language is essential for ensuring their comfort during this confusing and often challenging period. Building trust and forming bonds is our top priority. With our photography expertise fused with a steadfast commitment to each dog's well-being, we authentically capture their shining personalities! As a web and iOS developer with an eye for design, Bryce further recognizes the importance of user-friendly websites while combining functionality with aesthetic appeal to facilitate smoother adoption processes.",

	"The Puppy Project was inspired by our very affectionate and misunderstood senior dog Wolfe, who reshaped our perspectives on adoption. Wolfe's reactivity issues, stemming from 9 years of abuse, led us to receiving professional training, which continues to benefit us to this day! In 2022 we unexpectedly lost Ollie, our sweet and sassy 4 year old Border Collie, after a week long battle in the hospital. This experience emphasized the urgency of placing dogs, especially seniors, into the right homes swiftly, which finally initiated our project. We are committed to ensuring no time is lost for pups seeking forever homes because we understand that every moment with our companions is precious!",
];

const PuppyConcl1 =
	"If you're seeking a refreshed look with professional images for your rescue, please reach out through our ";
const PuppyConcl2 =
	", we would be thrilled to work alongside you. Let's join paws and create tales of happiness because creating tails of happiness is what truly brings us joy!";

const LilyIntro = [
	"Lily's Legacy isn't your average dog sanctuary, it's a haven for senior pups where love and care flow as freely as frozen Kongs! Whether they waltzed in as strays or came in through the surrender door, these golden oldies are craving heaps of attention and affection. Lily's Legacy not only understands this, but exceeds expectations by showering these wise woofers with second, third, and fourth chances! As long as they're under Lily's care you can expect happy, healthy, wagging tails and cozy cuddles!",

	"Brace yourself because adopting a senior dog will totally flip your perspective and these seasoned pups? Well they'll just leave paw prints on your heart that rival a mural! Ready for some furry joy in your life? Take a peek at Lily's Legacy and think about giving a senior pup the cozy home they've been dreaming of!",
];

const PuppyProject = () => {
	const { getImage, getPuppyProjectImage } = useImage();

	const blackie_laid_down = getPuppyProjectImage("blackie_laid_down");
	const sunrise_portrait = getPuppyProjectImage("sunrise_portrait");
	const gemma_kiss = getPuppyProjectImage("gemma_kiss");
	const chance_portrait = getPuppyProjectImage("chance_portrait");
	const gemma_portrait = getPuppyProjectImage("gemma_portrait");
	const heidi_bloop = getPuppyProjectImage("heidi_bloop");
	const navarro_flowers = getPuppyProjectImage("navarro_flowers");
	const navarro_relaxing = getPuppyProjectImage("navarro_relaxing");
	const navarro_walking = getPuppyProjectImage("navarro_walking");
	const puddin_landscape = getPuppyProjectImage("puddin_landscape");
	const puddin_portrait = getPuppyProjectImage("puddin_portrait");
	const zarina_cute_ears = getPuppyProjectImage("zarina_cute_ears");
	const zarina_lap = getPuppyProjectImage("zarina_lap");
	const blackie_hop = getPuppyProjectImage("blackie_hop");
	const reign_ear_rub = getPuppyProjectImage("reign_ear_rub");
	const blackie_portrait = getPuppyProjectImage("blackie_portrait");
	const reign_sniffing = getPuppyProjectImage("reign_sniffing");
	const reign_butt_scratches = getPuppyProjectImage("reign_butt_scratches");

	const ollie = getImage("o2").url;
	const wolfe = getImage("wolfe_pt").url;

	return (
		<div className="flex overflow-hidden flex-col gap-12 max-w-screen">
			<h1 className="self-end px-2 pt-10 text-2xl uppercase md:px-20 md:text-5xl">
				Puppy Project
			</h1>

			<div className="flex flex-col justify-start px-2 md:flex-row md:justify-between md:pb-10 md:my-0 -my-[6rem] pb-[10rem] md:ps-[6rem]">
				<Parallax speed={-6}>
					<div className="flex flex-col justify-center md:flex-row md:-mt-32 md:translate-x-0 h-[48rem] max-w-[100vw] md:h-[36rem] md:w-[36rem]">
						<CircleImage
							src={ollie}
							alignment="self-center translate-x-8 md:translate-x-0 md:self-end translate-y-16 md:translate-y-0"
						/>
						<CircleImage
							src={wolfe}
							alignment="self-center -translate-x-8 md:translate-x-0 md:self-start -translate-y-16 md:translate-y-0"
						/>
					</div>
				</Parallax>

				<div className="z-10 md:my-0 md:mb-20 -my-[7.5rem] md:me-20 md:max-w-[56vw]">
					<div className="flex flex-col gap-6 p-2 rounded-xl bg-timber/50 dark:bg-smoke/50">
						{PuppyProjectIntro.map((section) => (
							<p
								key={section}
								className="text-sm md:text-base indent-6 md:indent-12"
							>
								{section}
							</p>
						))}
						<p className="text-sm md:text-base indent-6 md:indent-12">
							{PuppyConcl1}
							<Link
								href={"../../contact"}
								className="font-regular border-b-[1px] border-b-smoke dark:border-b-timber"
							>
								contact form
							</Link>
							{PuppyConcl2}
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-6 pt-8 md:-mt-20 md:gap-12 md:pt-0 [&_*]:transition-all [&_*]:ease-linear">
				<div className="self-start divider" />
				<h1 className="self-start mx-4 text-2xl uppercase md:mx-20 md:text-5xl">
					Lily&apos;s Legacy
				</h1>
				<div className="flex justify-start px-2">
					<div className="flex flex-col justify-start w-screen md:flex-row md:justify-between md:mx-20">
						<div className="flex z-10 flex-col gap-6 p-2 rounded-xl bg-timber/50 dark:bg-smoke/50">
							{LilyIntro.map((section, i) => (
								<p
									key={section}
									className="self-center text-sm md:text-base indent-6 md:indent-12 md:max-w-[56vw]"
								>
									{section}
								</p>
							))}
						</div>

						<div className="relative z-0 md:hidden -my-[18rem]">
							<Parallax speed={-15}>
								<div className="rounded-full h-[36rem] w-[36rem] bg-ash/25" />
							</Parallax>
						</div>

						<div className="flex z-10 flex-col gap-4 justify-center items-center pt-6 text-sm md:pt-0 md:text-base md:pe-[10rem]">
							<Link
								href={"https://www.lilyslegacy.org"}
								rel="noopener noreferrer"
								target="_blank"
							>
								<div className="flex gap-2 justify-start items-center p-2 rounded-xl neo bg-ash/25">
									<p>Lily&apos;s Legacy Website</p>
								</div>
							</Link>

							<Link
								href={"https://www.instagram.com/lilyslegacyseniordogs/"}
								rel="noopener noreferrer"
								target="_blank"
							>
								<div className="flex gap-2 justify-start items-center p-2 rounded-xl neo bg-timber dark:bg-smoke">
									<LuInstagram size={24} />
									<p>lilyslegacyseniordogs</p>
								</div>
							</Link>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-1 w-screen md:gap-4">
					<PortraitRow
						images={[navarro_flowers, gemma_portrait, blackie_portrait]}
					/>
					<LandscapeRow images={[reign_butt_scratches, navarro_relaxing]} />
					<PortraitRow
						images={[zarina_cute_ears, chance_portrait, heidi_bloop]}
					/>
					<LandscapeRow images={[blackie_laid_down, puddin_landscape]} />
					<PortraitRow
						images={[reign_sniffing, navarro_walking, sunrise_portrait]}
					/>
					<LandscapeRow images={[gemma_kiss, zarina_lap]} />
					<PortraitRow images={[reign_ear_rub, blackie_hop, puddin_portrait]} />
				</div>

				<div className="flex flex-col gap-6 self-end my-10">
					<div className="divider" />
					<div className="flex flex-row gap-4 self-end text-sm md:text-base md:pe-10">
						<Link
							href={"https://www.instagram.com/kormylopuppyproject/"}
							rel="noopener noreferrer"
							target="_blank"
						>
							<div className="flex gap-2 justify-end items-center p-2 rounded-xl neo bg-timber dark:bg-smoke">
								<LuInstagram size={24} />
								<p>kormylopuppyproject</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PuppyProject;
