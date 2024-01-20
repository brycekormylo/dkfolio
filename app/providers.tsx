"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { FormspreeProvider } from "@formspree/react";
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <FormspreeProvider project="2386410821841321824">
        <ParallaxProvider>{children}</ParallaxProvider>
      </FormspreeProvider>
    </ThemeProvider>
  );
}
