import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Edwin Anderson — Frontend Developer",
  description:
    "Frontend developer specializing in React.js. Building digital products with visually engaging and seamless user interfaces.",
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
