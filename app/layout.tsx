import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteDescription =
  "Fullstack developer in Bali building production web apps, mobile apps, and AI automation for businesses worldwide. Next.js · React Native · Supabase.";

export const metadata: Metadata = {
  title: "Aryo Pradana — Fullstack Developer & AI Automation Engineer",
  description: siteDescription,
  openGraph: {
    title: "Aryo Pradana — Fullstack Developer & AI Automation Engineer",
    description: siteDescription,
    images: ["/images/profil-aryo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth antialiased`}>
      <body className="bg-white font-sans text-ink">{children}</body>
    </html>
  );
}
