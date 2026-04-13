import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://codymonky.com"),
  alternates: {
    canonical: "https://codymonky.com",
  },
  title: "Cheng - Sr. Full Stack Developer",
  description:
    "Cheng is a Sr Developer, Web Scraper & Bot Developer, Team Leader.",
  keywords:
    "Cheng, Developer, AI, Web3, User Experience, Front-end Development, Innovation, Web Scraping, Bot Development",
  openGraph: {
    locale: "en_US",
    siteName: "Cheng",
    type: "website",
    title: "Cheng Piao",
    description: "Cheng - Sr. Full Stack Developer",
    url: "https://codymonky.com",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Cheng Piao — Sr. Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheng Piao",
    description: "Cheng - Sr. Full Stack Developer",
    images: ["/og"],
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
