import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description:
    "A curated portfolio showcasing selected work, case studies, and product design highlights.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Portfolio",
    description:
      "A curated portfolio showcasing selected work, case studies, and product design highlights.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description:
      "A curated portfolio showcasing selected work, case studies, and product design highlights.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
