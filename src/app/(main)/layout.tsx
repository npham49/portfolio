import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ScrollToHash } from "@/components/scroll-to-hash";
import AnalyticsConsent from "@/components/analytics-consent";
import AnalyticsProvider from "@/components/analytics-provider";
import { config } from "@/config";
import "../globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${config.name} | Full Stack Engineer`,
  description:
    "Full-stack engineer with a background in govtech and healthcare. 3 years building digital public services across the BC government.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={jetbrainsMono.variable}
      suppressHydrationWarning
    >
      <body>
        <ScrollToHash />
        {children}
        <AnalyticsConsent />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
