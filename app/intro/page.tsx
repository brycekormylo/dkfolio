import Banner from "./(components)/banner";
import OpeningPhrase from "./(components)/opener";
import Circles from "./(components)/circles";
import About from "./(components)/about";
import PreviewImages from "./(components)/preview_images";
import Socials from "./(components)/socials";

const Intro = () => {
	return (
		<div className="flex flex-col">
			<div className="z-0">
				<Banner />
			</div>

			<div className="flex relative z-20 flex-col gap-10 h-auto">
				<OpeningPhrase />
				<div className="self-end divider" />
				<Circles />
				<div className="self-start divider" />
				<About />
				<div className="self-end divider" />
				<PreviewImages />
				<Socials />
			</div>
		</div>
	);
};

export default Intro;
