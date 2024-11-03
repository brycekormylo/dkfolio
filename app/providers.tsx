"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { FormspreeProvider } from "@formspree/react";
import { ThemeProvider } from "next-themes";
import { ImageProvider } from "@/context/image-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <FormspreeProvider project="2386410821841321824">
        <ImageProvider>
          <ParallaxProvider>{children}</ParallaxProvider>
        </ImageProvider>
      </FormspreeProvider>
    </ThemeProvider>
  );
}
