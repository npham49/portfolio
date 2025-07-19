import ReactLenis from "lenis/react";
import type { Metadata } from "next";

import "../globals.css";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `${config.name} | Full Stack Developer`,
  description:
    "I'm a full stack developer with a background in government and healthcare.",
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
    <html lang="en" className="w-screen" suppressHydrationWarning>
      <ReactLenis root options={lenisOptions}>
        <body>{children}</body>
      </ReactLenis>
    </html>
  );
}
