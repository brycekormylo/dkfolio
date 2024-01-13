import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Danielle Kormylo // Film Photographer',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className={`${inter.className}`}>
          <main className="flex min-h-screen overflow-x-hidden text-smoke bg-space-gray">
            <NavBar path="intro" />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
