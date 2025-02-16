import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Anurag - Developer & Open Source Enthusiast",
  description: "Full-stack developer and open source contributor building cool stuff.",
  openGraph: {
    title: "Anurag - Developer",
    description: "Full-stack developer and open source contributor building cool stuff.",
    url: "https://protfolio-three-chi.vercel.app/", // Replace with your actual website URL
    siteName: "Anurag's Portfolio",
    images: [
      {
        url: "/28.jpg", // Place this image inside public/
        width: 1200,
        height: 630,
        alt: "Anurag's Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag - Developer & Open Source Enthusiast",
    description: "Full-stack developer and open source contributor building cool stuff.",
    images: ["/28.jpg"], // Use the same OpenGraph image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${pixelFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
