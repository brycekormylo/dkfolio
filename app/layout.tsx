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
          <div className={`${montserrat.className}`}>
            <main className="flex min-h-screen overflow-x-hidden text-smoke">
              <div className="flex flex-col">
                <NavBar path="intro" />
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
