import GoBackUp from "@/components/util/go-back-up";
import { ThemeProvider } from "@/providers/theme-context";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { ScrollToHash } from "@/components/scroll-to-hash";

import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/navbar/navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import Footer from "@/components/footer";


import { config } from "@/config";
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `${config.name} | Full Stack Developer & Machine Learning Engineer`,
  description:
    "I'm a full stack developer and machine learning engineer with a passion for building delightful software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false,
    smooth: true,
  };

  return (
    <html lang="en" className="w-screen  dark" suppressHydrationWarning>
      <ReactLenis root options={lenisOptions}>
        <ThemeProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased relative w-full h-fit   `}
          >
            <Navbar />
            <MobileNavbar />
            <ScrollToHash />
            {children}
            <GoBackUp />
            <Footer />
          </body>
        </ThemeProvider>
      </ReactLenis>
    </html>
  );
}
