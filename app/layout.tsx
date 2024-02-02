import type { Metadata } from "next";
import { montserrat } from "@/public/fonts";
import NavBar from "./(nav)/nav";
import MobileNavBar from "./(nav)/mobile_nav";
import { Providers } from "./providers";
import "../public/styles/globals.css";

export const metadata: Metadata = {
  title: "Danielle Kormylo || Film Landscape and Wildlife Photographer",
  description: "Portfolio website",
  keywords: ["Danielle", "Kormylo", "Photography", "photographer", "film"],
  openGraph: {
    images: 'opengraph-image.jpg'
  }
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
            className={`flex flex-col overflow-x-hidden bg-timber text-smoke dark:bg-smoke dark:text-timber ${montserrat.className}`}
          >
            <div className="hidden md:block">
              <NavBar path="intro" />
            </div>
            <div className="block md:hidden">
              <MobileNavBar />
            </div>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
