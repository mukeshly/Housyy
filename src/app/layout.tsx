import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppSticky from "@/components/WhatsAppSticky";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Housyy | Verified Property Deals and Buyer Support",
  description:
    "Discover below-market property deals, get title and paperwork support, and move faster with confidence through Housyy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppSticky />
      </body>
    </html>
  );
}
