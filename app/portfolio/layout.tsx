"use client";

import React, { ReactNode } from "react";
import Selector from "./(components)/selector";
import { usePathname } from "next/navigation";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <section>
      <Selector />
      <div className="flex w-screen flex-col items-end gap-10 pt-10">
        <div className="divider" />
        <h1 className="px-20 pb-10 text-6xl uppercase">{pathname.split('/').pop()}</h1>
      </div>
      {children}
    </section>
  );
}
