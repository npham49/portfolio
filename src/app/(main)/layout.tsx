import GoBackUp from "@/components/util/go-back-up";
import { ThemeProvider } from "@/providers/theme-context";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { ScrollToHash } from "@/components/scroll-to-hash";
import AnalyticsConsent from "@/components/analytics-consent";
import AnalyticsProvider from "@/components/analytics-provider";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import Navbar from "@/components/navbar/navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import Footer from "@/components/footer";

import { config } from "@/config";

export const metadata: Metadata = {
  title: `${config.name} | Full Stack Developer & DevOps Engineer`,
  description:
    "I'm a full stack developer and devops engineer with a background in government and healthcare.",
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
          <body className="antialiased relative w-full h-fit">
            <Navbar />
            <MobileNavbar />
            <ScrollToHash />
            {children}
            <GoBackUp />
            <Footer />
            <AnalyticsConsent />
            <AnalyticsProvider />
            {/* <Analytics /> */}
          </body>
        </ThemeProvider>
      </ReactLenis>
    </html>
  );
}
