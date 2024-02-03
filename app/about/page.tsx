import Bryce from "./(components)/bryce";
import Ellie from "./(components)/ellie";
import Dogs from "./(components)/dogs";

export default function About() {
  return (
    <div className="flex w-screen flex-col gap-[8rem] overflow-hidden pb-[32rem] md:pb-0">
      <Ellie />
      <div className="divider my-[12rem] self-end" />
      <Bryce />
      <div className="divider self-start" />
      <Dogs />
    </div>
  );
}
