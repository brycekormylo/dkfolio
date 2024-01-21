import Bryce from "./(components)/bryce";
import Ellie from "./(components)/ellie";
import Dogs from "./(components)/dogs";

export default function About() {
  return (
    <div className="w-screen flex flex-col gap-[10rem] pt-10">
      <Ellie />
      <div className="divider self-end" />
      <Bryce />
      <div className="divider self-start" />
      <Dogs />
    </div>
  );
}
