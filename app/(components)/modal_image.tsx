"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ImageProps = {
	src: string;
	className: string;
};

const ModalImage = ({ src, className }: ImageProps) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	return (
		<button
			type="button"
			onClick={toggleModal}
			className={`relative ${className}`}
		>
			<Image
				src={src}
				fill={true}
				className="object-fill"
				alt="Portfolio Image"
				sizes="100vw"
			/>
			{isModalVisible && (
				<div
					onClick={toggleModal}
					className="fixed top-0 left-0 z-50 w-full h-full bg-timber/85 backdrop-blur-lg dark:bg-smoke/85"
				>
					<Image
						src={src}
						layout="fill"
						objectFit="contain"
						alt="Fullscreen Image"
						className="p-4"
						sizes="100vw"
					/>
				</div>
			)}
		</button>
	);
};

export default ModalImage;
