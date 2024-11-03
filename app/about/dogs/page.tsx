"use client";

import CircleImage from "@/app/(components)/circle_image";
import ModalImage from "@/app/(components)/modal_image";
import { Parallax } from "react-scroll-parallax";
import millie from "../../../public/images/boat_millie.jpg";
import millie_ls from "../../../public/images/millie_pup_annoy_charlie.jpg";
import charlie from "../../../public/images/roadtrip_charlie.jpg";
import charlie_ls_1 from "../../../public/images/c_insane_frisbee.jpg";
import charlie_ls_2 from "../../../public/images/c_puppy_yosemite.jpg";
import { useImage } from "@/context/image-provider";

const about_dogs = [
  "Charlie, our resident Ravenclaw, is an Australian shepherd who thrives on challenges, both physical and mental. She delights in road trips, she's a whiz at beach frisbee, loves to show off, and will do anything for top-notch snacks! As a creative genius with boundless energy, Charlie has an unmatched love for high-quality treats. She's constantly teaching herself new tricks just to indulge in her favourite snacks. This affectionate ball of joy can brighten anyone's day, forcing you to love her whether you want to or not! When Charlie isn't conquering the great outdoors or camping, she likes to kick back by watching her favourite shows and movies like Avatar The Last Airbender, Korra, Moana, and Shrek! Of course, the experience isn't complete until she peacefully dozes off with a ball in her mouth and legs stretched out like a little bear rug.",

  "While love and fairness triumph in the end, our mischievous Hufflepuff Millie might dip her toes into a bit of assholery before coming around. Sensitive and sweet, Millie is one of the most intelligent velcro dogs alive! Like any border collie, this sassy girl is always weighing her options before making a decision. Work smarter, not harder definitely applies to this one. She is Charlie's biggest fan, has been catching frisbees like a pro since she was 3.5 months old, and adores all outdoor activities... provided Bryce picks her up or she can jump into the wagon when she's ready to collapse! She loves solving puzzles and has a knack for naming and finding toys. Millie looks forward to her favourite daily routines including morning fish oil and nightly dark snackums, followed by taking her role as the middle spoon between Bryce and Danielle very seriously.",
];

const about_charlie = [
  "Charlie, our resident Ravenclaw, is an Australian shepherd who thrives on both physical and mental challenges. She delights in road trips, is a whiz at frisbee, absolutely loves to show off for an audience, and will do anything for top-notch snacks! Charlie has lived in Utah, Ontario, and now California. She has traveled by car and plane, and although she has loved ones in multiple places, California has stolen her heart! The literal moment we crossed the state line on our drive from New York to California, she could smell the Sierras and was MEGA excited, having visited only once as a puppy. She couldn’t settle down until we got to a local dog park in the Bay Area three hours later lol.",
  "This creative genius has boundless energy, but that energy is typically reserved for after 10-11am. She earned the nickname “Grumble Bean” for getting really grumpy with puppy Millie’s energetic antics way too early in the morning. As Charlie’s aging, she seems to love slow mornings, she likes taking the time to wake up now! Unless she gets to go for a morning walk or hammock, she stays under the bed grunting at pestering Millie, until she’s ready to greet the day!",
];
const about_charlie_2 = [
  "Once she’s up, Charlie is always teaching herself new tricks, like her latest “double wave,” purely out of desperation for treats. She has also been learning how to play beach volleyball with us and her current high score is 3 rallies back and forth!! Proudest parent owners over here and it’s just going to get better 🙌🏼",
  "When Charlie isn’t camping or otherwise conquering the great outdoors, she LOVES to unwind by watching her favourite shows and movies like Avatar The Last Airbender, Korra, Moana, and Shrek. We watch Avatar and Korra so often that Bryce and I finally decided to switch things up and watch the Italian versions. At least this way, we get some language study in! Of course the experience isn’t complete until Charlie peacefully dozes off with a ball in her mouth and legs fully stretched back like a little bear rug.",
  "If anyone has suggestions for TV shows, feel free to let us know on Instagram!",
];
const about_millie = [
  "Sweet and sensitive, Millie is our mischievous Hufflepuff who might dip her toes into a bit of assholery before love and fairness triumph in the end. Born and raised in California, she made our lives more complete the moment she arrived. Millie refuses to be anywhere without her family together, if we’re nearby but not physically together, she won’t stop herding us until we are! Like any border collie, she is wicked intelligent and strategic, “work smarter, not harder” is her main motto! Millie also loves stealing Charlie’s favourite toys just to get under her skin or to take back a ball Charlie stole by making her jealous. Who knew we’d end up teaching our dogs about empathy and manipulation? But here we are… borders gotta bord 😂",
  "This sassy and goofy girl is all about comfort, whether it’s her memory foam beds, pillows or hammocking, which has now become a weekend ritual. If Millie doesn’t get her hammock time, she throws a full-on tantrum. Spoilt? Absolutely. But with her charm, who can resist?! She’ll ask to be swung and sleep there for hours, even trying to swing herself sometimes. Her experience wouldn’t be complete without a pillow, blanket, and music or Harry Potter audiobooks playing in the background. Like we said, spoilt AF.",
];
const about_millie_2 = [
  "Millie thrives outdoors with her humans, whether playing hard, diving fully under water to grab a toy, walking, vacationing, or hiking.. provided Bryce will pick her up or she can hop into the wagon when she’s ready to collapse! Her first camping trip was quite the adventure, she looked like a deer in headlights approaching the tent, then flew back into the car and refused to leave until she had no choice. By the end of the trip, she was hooked and now eagerly hops out of the car excited to explore the campsite! ",
  "Millie loves using her brain. She’s been catching frisbees like a pro since she was 3.5 months old and has a knack for solving puzzles, even naming and finding her toys. Millie looks forward to her favourite daily routines including morning fish oil and nightly dark snackums, followed by taking her role as the middle spoon between us very seriously!",
];

const Dogs = () => {
  const { getImage } = useImage();

  const millie = getImage("boat_millie").url;
  const millie_ls = getImage("millie_pup_annoy_charlie").url;
  const charlie = getImage("roadtrip_charlie").url;
  const charlie_ls_1 = getImage("c_insane_frisbee").url;
  const charlie_ls_2 = getImage("c_puppy_yosemite").url;
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-start items-center px-2 pb-24 min-h-screen md:flex-row-reverse md:justify-evenly -mt-[4rem] md:-mt-[10rem]">
        <Parallax speed={-10}>
          <div className="flex flex-col max-w-screen">
            <div className="flex flex-row justify-center h-[44rem] w-[36rem] md:mt-[20rem] md:h-[36rem] md:w-[36rem]">
              <CircleImage
                src={millie}
                alignment="self-end translate-x-12 md:translate-x-0 -translate-y-12 md:translate-y-0"
              />
              <CircleImage
                src={charlie}
                alignment="self-start -translate-x-12 md:translate-x-0 translate-y-12 md:translate-y-0"
              />
            </div>
          </div>
        </Parallax>
        <div className="flex flex-col gap-10 p-2 -mt-10 rounded-xl md:mt-96 md:bg-transparent bg-timber/25 md:max-w-[48rem] md:dark:bg-transparent dark:bg-smoke/25">
          <h1 className="self-end pb-36 text-2xl uppercase md:text-5xl">
            Woof, we&apos;re Charlie and Millie
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-12 px-2 w-full">
        <div className="flex flex-col gap-16 w-full">
          <div className="divider md:-ms-52 md:min-w-[52vw]" />
          <h2 className="self-end px-72 pt-16 text-6xl">CHARLIE</h2>
          <div className="flex flex-col items-center w-full md:flex-row md:justify-between">
            <ModalImage
              src={charlie_ls_1}
              className="relative w-full aspect-[3/2] md:w-[72rem]"
            />
            <div className="flex justify-center w-full md:h-[32rem]">
              <div className="flex flex-col flex-grow gap-8 justify-center items-center">
                {about_charlie.map((section, i) => (
                  <p key={i} className="w-[78%] indent-6 text-xs md:text-base">
                    {section}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:flex-row md:justify-between">
            <div className="flex justify-center w-full md:h-[32rem]">
              <div className="flex flex-col flex-grow gap-8 justify-center items-center">
                {about_charlie_2.map((section, i) => (
                  <p key={i} className="w-[78%] indent-6 text-xs md:text-base">
                    {section}
                  </p>
                ))}
              </div>
            </div>
            <ModalImage
              src={charlie_ls_2}
              className="relative w-full aspect-[3/2] md:w-[72rem]"
            />
          </div>
        </div>
        <div className="mt-24 divider md:-ms-52 md:min-w-[52vw]" />
        <div className="flex flex-col gap-16 w-full">
          <h2 className="self-start px-72 pt-16 text-6xl">MILLIE</h2>
          <div className="flex flex-col items-center w-full md:flex-row md:justify-between">
            <div className="flex justify-center w-full md:h-[32rem]">
              <div className="flex flex-col flex-grow gap-8 justify-center items-center">
                {about_charlie_2.map((section, i) => (
                  <p key={i} className="w-[78%] indent-6 text-xs md:text-base">
                    {section}
                  </p>
                ))}
              </div>
            </div>
            <ModalImage
              src={millie_ls}
              className="relative w-full aspect-[3/2] md:w-[72rem]"
            />
          </div>
          <div className="flex flex-col items-center w-full md:flex-row md:justify-between">
            <ModalImage
              src={millie_ls}
              className="relative w-full aspect-[3/2] md:w-[72rem]"
            />
            <div className="flex justify-center w-full md:h-[32rem]">
              <div className="flex flex-col flex-grow gap-8 justify-center items-center">
                {about_millie_2.map((section, i) => (
                  <p key={i} className="w-[78%] indent-6 text-xs md:text-base">
                    {section}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dogs;
