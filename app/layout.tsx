import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://meikopoulos.com"),
  alternates: {
    canonical: "https://meikopoulos.com",
  },
  title: "Cheng - Sr. Full Stack Developer",
  description:
    "Cheng is a Sr Developer, Web Scraper & Bot Developer, Team Leader.",
  keywords:
    "Cheng, Developer, AI, Web3, Finance, User Experience, Front-end Development, Decentralized Finance, DeFi, Technology, Innovation, Web Scraping, Bot Development",
  openGraph: {
    locale: "en_US",
    siteName: "Cheng",
    type: "website",
    title: "Cheng Piao",
    description:
      "Cheng - Sr. Full Stack Developer",
    url: "https://meikopoulos.com",
    images: [
      {
        url: "./og-large-meik-2.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheng Piao",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
