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
      <div className="relative z-20 flex h-auto flex-col gap-10">
        <OpeningPhrase />
        <div className="divider self-end" />
        <Circles />
        <div className="divider self-start" />
        <About />
        <div className="divider self-end" />
        <PreviewImages />
        <Socials />
      </div>
    </div>
  );
};

export default Intro;
