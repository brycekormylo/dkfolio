import devils_slide from "../../public/images/devils_slide_sm.jpg";
import Image from "next/image";
import ScrollUp from "../(components)/scroll_up";

export default function Store() {
  return (
    <div className="grid py-[4rem]">
      <ScrollUp />
      <div className="z-10 col-start-1 row-start-1 flex h-36 flex-col items-center justify-center gap-4 self-start justify-self-center rounded-xl bg-timber/75 px-4 py-2 text-xl shadow-neo dark:bg-smoke/75 dark:shadow-neodark md:mt-24 md:h-96 md:w-[40rem]">
        <h2 className="text-lg">Store coming soon!</h2>
        <p className="text-center text-sm">
          We have big plans to expand our services in the future, so stay tuned.
        </p>
      </div>
      <div className="col-start-1 row-start-1 mt-12 self-start md:mt-24">
        <Image
          priority
          src={devils_slide}
          alt="Circle Image"
          className="object-fit z-0 h-64 w-64 rounded-full blur-sm md:h-[45rem] md:w-[45rem]"
        />
      </div>
      <div className="divider col-start-1 col-end-1 row-start-1 mb-12 self-end justify-self-end md:mb-36 " />
    </div>
  );
}
