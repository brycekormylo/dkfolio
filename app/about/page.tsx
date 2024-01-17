import Bryce from "./(components)/bryce";
import Ellie from "./(components)/ellie";
import Dogs from "./(components)/dogs";

export default function About() {
  return (
    <div className="flex min-h-[200vh] w-screen flex-col gap-[10rem] pt-10">
      <Ellie />
      <Bryce />
      <Dogs />
    </div>
  );
}
