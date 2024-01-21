"use client";

import React, { ReactNode } from "react";
import Selector from "./(components)/selector";
import ScrollUp from "../(components)/scroll_up";
import { usePathname } from "next/navigation";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
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
