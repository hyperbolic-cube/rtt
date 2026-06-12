import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";

// Google AdSense publisher account. The loader script below is all AdSense
// needs to crawl and approve the site; individual ad units are wired up
// separately in components/AdSlot.tsx.
const ADSENSE_CLIENT = "ca-pub-5401649323244175";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "800", "900"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://realtimetrillionaires.com"),
  title: "The Real-Time Trillionaires — Live Net Worth Tracker",
  description:
    "A dead-serious, real-time tracker of the world's most exclusive club: the trillion-dollar elite. There is currently one member. Satire — figures are simulated.",
  keywords: [
    "trillionaire",
    "elon musk net worth",
    "real-time billionaires",
    "net worth tracker",
    "richest person in the world",
    "trillion dollar club",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://realtimetrillionaires.com",
    siteName: "The Real-Time Trillionaires",
    title: "The Real-Time Trillionaires — Live Net Worth Tracker",
    description:
      "Tracking the world's most exclusive club. There is currently one member. Satire — figures are simulated.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Real-Time Trillionaires",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Real-Time Trillionaires — Live Net Worth Tracker",
    description:
      "He's lonely at the top. Watch the world's only trillionaire's net worth tick in real time. Satire.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-foreground">
        {/* React hoists this async script into <head>, matching the snippet
            Google AdSense asks you to paste between the <head></head> tags. */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
