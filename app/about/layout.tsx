import React, { ReactNode } from "react";
import Selector from "./_components/selector";
import ScrollUp from "../(components)/scroll_up";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <ScrollUp />
      <Selector />
      <div className="flex flex-row-reverse pt-10 grow">
        <div className="divider" />
      </div>
      {children}
    </section>
  );
}
