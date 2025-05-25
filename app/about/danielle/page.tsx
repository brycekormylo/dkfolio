"use client";

import { useImage } from "@/context/image-provider";
import Image from "next/image";
import Link from "next/link";

const about_ellie_pt1 = [
	"As the lead brain, heart, and lens behind Kormylo Photography, I’ve always been driven by a deep love for the craft. Rooted in Toronto’s maple-scented streets, my passion for film photography blossomed at 15 years old. I was obsessed with the mechanical dance and technical tango of film, from scouting locations to developing and printing in the darkroom. It’s an intricate and meditative process, one that slows down time and makes each step deliberate, allowing every moment to be fully savoured. Restless by nature, I soon expanded into digital and drone photography as well as medium and large format analog photography, revelling in the creative possibilities they opened. Although I initially focused on portraiture and weddings, my time living in Italy and California ignited a deep connection with landscapes and wildlife. After years of digital burnout, returning to nature and film felt like rediscovering my purpose, which has been a game changer for me!",

	"I believe photography isn’t just about capturing beautiful images, it’s about connecting with my subjects on a personal level. That’s why being the unconventional soul I am, I decided to fuse my twin passions for photography and kinesiology. I currently work as a PT Aide and Transitional Trainer/Personal Trainer in a sports medicine physiotherapy clinic. My vision is to become a physiotherapist and create a holistic rehabilitation center that combines physiotherapy with diverse healing modalities from massage and somatic therapies to art and music therapies and sport programs. I'll integrate my passion for photography by building an on-site darkroom where I'll teach film photography to individuals in substance abuse recovery as a therapeutic tool. I am making plans to expand the ",
	" by organizing photography competitions focused on shelter animals to support local rescues while bringing the community together. This interdisciplinary approach allows me to weave my passions for healing, photography and community service into one meaningful pursuit. I have been incredibly fortunate to receive unwavering support from Bryce, which has been instrumental in advancing my career while still maintaining high honours.",
];

interface EducationItem {
	title: string;
	award?: string;
	cert?: string;
}

const education = {
	title: "Current Professional Background",

	items: [
		{
			title: "University of San Francisco",
			award:
				"Bachelor of Science Kinesiology with a Minor in Psychology (in progress)",
			cert: "Wilfred Laurier University (transferred)",
		},
		{
			title: "City College of San Francisco",
			award: "Associate Science Photography",
			cert: "Black and White Darkroom Certified",
		},
		{
			title: "Accredited NASM Certified Personal Trainer",
		},
		{
			title: "Nutrition Certification",
		},
		{
			title: "Optometry & Ophthalmology",
			award: "6 years of clinical experience",
		},
	],
};

const about_ellie_pt2 = [
	"This unique combination of skills allows me to approach my work holistically with mind, body, and camera in perfect harmony. My offbeat journey merges scientific precision with artistic finesse, focusing on activating muscles, preventing injuries, and creating a more grounded, intentional presence. This awareness sharpens my ability to see light, composition, and the story behind each image, ensuring every shot is purposeful and well timed! Whether capturing wildlife in its natural element or clients in their most authentic moments, every shot is both an artistic and physical victory, anchoring me while pushing the boundaries of my creativity.",
	"At Kormylo Photography, we thrive on pushing the limits in our work! We're not afraid to get down in the mud for that perfect wildlife shot, climb trees for unique perspectives or wade into streams at sunrise to capture the perfect reflection. By blending my scientific background with our creative process, we can experiment with everything from double exposures on film to movement based direction that helps capture the most candid moments. We’re here to deep dive into your vision alongside you, immersing your story into the perfect environment while thoughtfully balancing artistic integrity with your unique needs. Film brings a beautiful timeless quality to every image that will make you swoon the way I do! Through a combination of traditional darkroom printing and modern digital tools, we create prints that make people double take and say, \"WOW that's film?!”, while preserving those gorgeous natural emulsion qualities that make film so special.",
	"Every step of our process, from planning and scouting locations to manual shooting, processing, developing, scanning, post-production and printing, receives the precise attention that film's high skill level demands. We'll guide you through each stage, sharing our passion for the craft while ensuring you're thrilled with the results. Excellence, curiosity, creativity, and authenticity are at the heart of everything we do and there's nothing I love more than helping others discover the unique magic of film photography! Our mission is to create meaningful, lasting connections through our lens. I’ve been fortunate to immerse myself in diverse cultures and landscapes, using my camera to tell stories that celebrate the beauty and uniqueness of each subject. I believe photography is a universal language, one that transcends limitations and brings people closer to nature, to each other and to themselves. Through my lens, I aspire to bridge gaps and develop a deeper understanding and appreciation for our shared world.",
	"When I’m not behind the lens, I love staying active by going to the gym and hiking, playing volleyball, going paragliding, and taking the dogs out to do agility or play frisbee. I also enjoy playing piano and singing, painting in numerous mediums like oil, watercolour, acrylic, and gouache. I love building dope resin tables with my husband Bryce or diving into a good video game like Twilight Princess, Halo 3, Smash Bros, Mario Kart and more! Growing up on N64 games taught me what it’s like to play life on hard mode, which is why I choose to shoot wildlife on film. I either enjoy challenging myself too much or I hate myself, the line is fine! 😂",
	"Are you seeking a unique perspective to bring your dreams to life? Perhaps it's capturing your patronus in the wild or freezing that fleeting moment in nature that takes your breath away. Could you be searching for that perfect image to greet you each morning? Or maybe you're looking to transform your personal and commercial spaces with artwork that resonates deeply with your soul? Whether you're seeking to document your agricultural journey or showcase your farm's legacy through stunning imagery, we're here to help bring your vision to life. At Kormylo Photography we go beyond merely capturing images, we reveal the spirit and essence of your connection to the world.",
	"With film, the possibilities feel limitless! Check out our services page for more details on our current packages and available prints.",
	"Let's get creative and make some magic together! 📸✨",
];

const Ellie = () => {
	const { getImage } = useImage();
	const ellie_overlook = getImage("ellie_overlook").url;
	const bw_be_beach_chels = getImage("bw_be_beach_chels").url;
	const bw_hammock_chels = getImage("bw_hammock_chels").url;
	const fine_art_portrait_chels = getImage("fine_art_portrait_chels").url;

	return (
		<div className="flex flex-col">
			<div className="flex flex-row-reverse pt-10 grow">
				<div className="divider" />
			</div>
			<div className="flex flex-col justify-start items-center px-2 pt-20 md:flex-row-reverse md:justify-evenly md:items-start">
				<div className="flex flex-col items-end h-72">
					<div className="relative w-[16rem] aspect-square md:w-[36rem]">
						<Image
							priority
							src={ellie_overlook}
							alt="Circle Image"
							fill={true}
							className="object-cover rounded-full"
							sizes="100vw"
						/>
					</div>

					<div className="flex gap-8 pt-4">
						<div className="hidden relative md:block w-[16rem] aspect-square md:w-[16rem] md:h-[16rem]">
							<Image
								priority
								src={fine_art_portrait_chels}
								alt="Circle Image"
								fill={true}
								className="object-cover rounded-full"
								sizes="100vw"
							/>
						</div>

						<div className="hidden relative mt-36 rounded-full md:block h-[16rem] overflow-clip w-[16rem] md:h-[24rem] md:w-[24rem]">
							<Image
								priority
								src={bw_hammock_chels}
								alt="Circle Image"
								fill={true}
								className="object-cover object-bottom"
								sizes="100vw"
							/>
						</div>
					</div>
				</div>

				<div className="flex z-10 flex-col gap-8 justify-between p-2 rounded-xl md:mt-12 bg-timber/75 md:max-w-[56vw] dark:bg-smoke/75">
					<h1 className="self-start px-4 pt-12 text-3xl uppercase md:px-12 md:pt-0 md:text-5xl">
						{"Hiya, I'm Danielle"}
					</h1>

					<div className="flex flex-col gap-8 justify-evenly">
						<p className="text-sm md:text-base indent-12">
							{about_ellie_pt1[0]}
						</p>
						<p className="text-sm md:text-base indent-12">
							{about_ellie_pt1[1]}

							<Link href={"/projects/puppy-project"} className="underline">
								Kormylo Puppy Project
							</Link>
							{about_ellie_pt1[2]}
						</p>
					</div>
				</div>
			</div>

			<div className="mt-12 md:mt-40 divider" />
			<div className="flex justify-center my-12 mx-2 md:my-32 md:mt-40 md:me-64">
				<div className="flex flex-col gap-4 items-start self-center py-4 px-4 rounded-2xl md:py-16 md:px-28 bg-timber shadow-neo dark:bg-smoke dark:shadow-neodark">
					<h2 className="text-2xl text-center md:pb-2 md:text-3xl md:text-start">
						{education.title}
					</h2>
					{education.items.map((item) => {
						return (
							<div key={item.title} className="flex flex-col px-4 md:px-12">
								<h3 className="pb-2 text-lg">{item.title}</h3>
								{item.award && (
									<p className="px-2 md:px-6">{`- ${item.award}`}</p>
								)}
								{item.cert && (
									<p className="px-2 md:px-6">{`- ${item.cert}`}</p>
								)}
							</div>
						);
					})}
				</div>
			</div>
			<div className="self-end mb-24 divider" />

			<div className="flex flex-col-reverse gap-8 justify-start items-center px-2 md:flex-row-reverse md:gap-0 md:justify-evenly md:items-start">
				<div className="flex flex-col gap-8 self-center md:py-8 md:max-w-[56vw]">
					{about_ellie_pt2.slice(0, 3).map((section) => (
						<p key={section} className="text-sm md:text-base indent-12">
							{section}
						</p>
					))}
				</div>

				<div className="relative z-0 md:mt-12 h-[16rem] w-[16rem] md:h-[36rem] md:w-[36rem]">
					<Image
						priority
						src={ellie_overlook}
						alt="Circle Image"
						fill={true}
						className="object-cover rounded-full"
						sizes="100vw"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-8 justify-start items-center px-2 mt-20 mb-32 md:flex-row-reverse md:gap-0 md:justify-evenly md:items-start md:mt-10">
				<div className="relative z-0 md:mt-20 h-[16rem] w-[16rem] md:h-[36rem] md:w-[36rem]">
					<Image
						priority
						src={bw_be_beach_chels}
						alt="Circle Image"
						fill={true}
						className="object-cover rounded-full"
						sizes="100vw"
					/>
				</div>

				<div className="flex flex-col gap-8 md:mt-36 md:max-w-[48vw]">
					<p className="text-sm md:text-base indent-12">{about_ellie_pt2[3]}</p>
					<p className="text-sm md:text-base indent-12">{about_ellie_pt2[4]}</p>
					<p className="pt-6 text-sm text-center md:mx-32 md:text-base">
						{about_ellie_pt2[5]}
					</p>
					<p className="text-sm text-center md:text-base">
						{about_ellie_pt2[6]}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Ellie;
