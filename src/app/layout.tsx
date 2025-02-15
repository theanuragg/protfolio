import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

// Metadata should be exported from a server component
export const metadata: Metadata = {
  title: "Pathont - Developer & Open Source Enthusiast",
  description: "Full-stack developer and open source contributor building cool stuff.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pixelFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
