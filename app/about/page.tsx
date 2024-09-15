import Danielle from "./danielle/page";
import Bryce from "./bryce/page";
import Dogs from "./dogs/page";
import Selector from "./_components/selector";

export default function About() {
  return (
    <div className="flex overflow-hidden flex-col gap-10 pb-20 w-screen md:pt-10 md:gap-[8rem]">
      <Danielle />
      <div className="self-end divider" />
      <Bryce />
      <div className="self-start divider" />
      <Dogs />
    </div>
  );
}
