import type { Metadata } from "next";
import { montserrat } from "@/public/fonts";
import NavBar from "./nav";
import { Providers } from "./providers";
import "../public/styles/globals.css";

export const metadata: Metadata = {
  title: "Danielle Kormylo // Film Photographer",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <main
            className={`flex min-h-screen flex-col overflow-x-hidden text-smoke ${montserrat.className}`}
          >
            <NavBar path="intro" />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
