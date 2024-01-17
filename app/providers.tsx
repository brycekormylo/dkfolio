"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { FormspreeProvider } from "@formspree/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FormspreeProvider project="2386410821841321824">
      <ParallaxProvider>{children}</ParallaxProvider>
    </FormspreeProvider>
  );
}
