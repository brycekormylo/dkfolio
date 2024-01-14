"use client";

import Banner from "./(components)/banner";
import OpeningPhase from "./(components)/opener";
import Circles from "./(components)/circles";
import About from "./(components)/about";

const Intro = () => {
  return (
    <div className="flex flex-col">
      <div className="z-0">
        <Banner />
      </div>
      <div className="relative z-20 flex h-auto w-screen flex-col gap-10 bg-timber">
        <OpeningPhase />
        <Circles />
        <About />
      </div>
    </div>
  );
};

export default Intro;
