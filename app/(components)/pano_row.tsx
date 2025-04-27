import ModalImage from "@/app/(components)/modal_image";

type ImageProps = {
	image: string;
};

const PanoramaRow = ({ image }: ImageProps) => {
	return (
		<div className="flex gap-1 justify-center w-screen h-auto md:gap-4">
			<ModalImage src={image} className="relative aspect-[7/2] w-[92vw]" />
		</div>
	);
};

export default PanoramaRow;
