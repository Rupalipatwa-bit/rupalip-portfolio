import type { Metadata } from "next";
import {
  Schibsted_Grotesk,
  Hanken_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
