"use client";

import Image from "next/image";
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
		<div className="stack">
			<button
				type="button"
				onClick={toggleModal}
				className={`relative ${className}`}
			>
				<Image
					src={src}
					fill={true}
					className="object-fill stack"
					alt={`${src.toString()}`}
					sizes="100vw, 50vw, 33vw"
				/>
			</button>

			{isModalVisible && (
				<button
					type="button"
					onClick={toggleModal}
					className="fixed top-0 left-0 z-50 w-full h-full bg-white/85 backdrop-blur-lg dark:bg-black/85"
				>
					<Image
						src={src}
						layout="fill"
						objectFit="contain"
						alt="Fullscreen Image"
						className="p-4"
						sizes="100vw"
						priority
					/>
				</button>
			)}
		</div>
	);
};

export default ModalImage;
