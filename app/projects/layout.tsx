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
      </div>
      {children}
    </section>
  );
}
