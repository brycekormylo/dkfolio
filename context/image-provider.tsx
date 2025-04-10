"use client";

import React, { createContext, useContext, type ReactNode } from "react";
import imageData from "../public/img/images_fg.json";
import bannerData from "../public/img/banners.json";
import puppyProjectData from "../public/img/puppy_project_fg.json";

export interface ImageData {
	name: string;
	url: string;
	delete_url: string;
}

interface ImageContextProps {
	images: Map<string, ImageData>;
	getImage: (name: string) => ImageData;
	getBanner: (name: string) => ImageData;
	getPuppyProjectImage: (name: string) => ImageData;
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

interface ImageProviderProps {
	children: ReactNode;
}

const ImageProvider = ({ children }: ImageProviderProps) => {
	const images = new Map<string, ImageData>();
	const bannerImages = new Map<string, ImageData>();
	const puppyProjectImages = new Map<string, ImageData>();

	imageData.forEach((element) => {
		const key = element.name?.split(".").at(0);
		key && images.set(key, element);
	});

	puppyProjectData.forEach((element) => {
		const key = element.name.split(".").at(0);
		key && puppyProjectImages.set(key, element);
	});

	bannerData.forEach((element) => {
		const key = element.name.split(".").at(0);
		key && bannerImages.set(key, element);
	});

	const getImage = (name: string) => {
		const image = images.get(name) ?? {
			name: "Not found",
			url: "",
			delete_url: "",
		};
		return image;
	};

	const getBanner = (name: string) => {
		const image = bannerImages.get(name) ?? {
			name: "Not found",
			url: "",
			delete_url: "",
		};
		return image;
	};

	const getPuppyProjectImage = (name: string) => {
		const image = puppyProjectImages.get(name) ?? {
			name: "Not found",
			url: "",
			delete_url: "",
		};
		return image;
	};

	return (
		<ImageContext.Provider
			value={{
				images,
				getImage,
				getBanner,
				getPuppyProjectImage,
			}}
		>
			{children}
		</ImageContext.Provider>
	);
};

const useImage = () => {
	const context = useContext(ImageContext);

	if (!context) {
		throw new Error("useImage must be used within a ImageProvider");
	}
	return context;
};

export { ImageProvider, useImage };
