import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from '@/components/SiteChrome'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FAIR - Folks in AI and Research",
  description: "A community for AI builders and researchers in Pune, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className={`${inter.className} bg-fair-background text-fair-text antialiased`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
