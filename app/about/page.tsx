import Bryce from "./(components)/bryce";
import Ellie from "./(components)/ellie";
import Dogs from "./(components)/dogs";

export default function About() {
  return (
    <div className="flex w-screen flex-col gap-10 overflow-hidden pb-4 md:gap-[8rem] md:pt-10">
      <Ellie />
      <div className="divider self-end" />
      <Bryce />
      <div className="divider self-start" />
      <Dogs />
    </div>
  );
}
