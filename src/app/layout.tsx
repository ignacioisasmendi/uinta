import type { Metadata } from "next";
import localFont from "next/font/local";
//import { Analytics } from "@vercel/analytics/react"
//import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Toaster } from "react-hot-toast";


const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Uinta Construcciones",
  description: "Construcción con sistema SIP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        {children}
        <Toaster position="top-left"/>
      </body>
    </html>
  );
}
