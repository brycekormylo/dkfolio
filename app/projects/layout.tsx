import React, { ReactNode } from "react";
import Selector from "./(components)/selector";
import ScrollUp from "../(components)/scroll_up";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <ScrollUp />
      <Selector />
      <div className="flex w-screen flex-col items-end gap-10 pt-10">
        <div className="divider" />
      </div>
      {children}
    </section>
  );
}
