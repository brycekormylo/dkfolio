"use client";

import ParallaxCircleImage from "@/app/(components)/parallax_circle_image";
import { Parallax } from "react-scroll-parallax";

import { useImage } from "@/context/image-provider";

const PreviewImages = () => {
	const { getImage } = useImage();

	const lifeguard_tower = getImage("lifeguard_tower").url;
	const beach_cliff = getImage("beach_cliff").url;
	const river = getImage("river").url;
	const la_jolla_seals = getImage("la_jolla_seals").url;
	const aspen = getImage("aspen").url;
	const drone_shore = getImage("beach_drone").url;
	const squirrel = getImage("squirrel").url;

	return (
		<div className="flex flex-col md:mt-[15rem]">
			<div className="flex flex-col gap-4 justify-center items-center w-screen md:flex-row">
				<ParallaxCircleImage src={beach_cliff} speed={-20} />

				<Parallax speed={-10}>
					<ParallaxCircleImage
						src={squirrel}
						speed={-5}
						disabled={true}
						height={12}
					/>
				</Parallax>

				<div className="md:-translate-y-60">
					<ParallaxCircleImage src={la_jolla_seals} speed={-20} />
				</div>

				<Parallax speed={-4}>
					<ParallaxCircleImage
						src={lifeguard_tower}
						speed={-10}
						disabled={true}
						height={20}
					/>
				</Parallax>

				<div className="translate-x-20 md:translate-x-0 md:-translate-y-20">
					<Parallax speed={-10}>
						<ParallaxCircleImage
							src={drone_shore}
							speed={-5}
							disabled={true}
							height={12}
						/>
					</Parallax>
				</div>
			</div>

			<div className="flex flex-col flex-wrap justify-center items-center w-screen md:flex-row md:mt-[-12rem] md:gap-[20rem]">
				<div className="-translate-x-10 md:translate-x-0">
					<Parallax speed={8}>
						<ParallaxCircleImage
							src={aspen}
							speed={-5}
							disabled={true}
							height={12}
						/>
					</Parallax>
				</div>

				<div className="md:translate-y-10">
					<ParallaxCircleImage src={river} speed={-15} />
				</div>
			</div>
		</div>
	);
};

export default PreviewImages;
