// GoogleAnalytics import kept for future implementation
// import { GoogleAnalytics } from '@next/third-parties/google';
import { Poppins } from "next/font/google";
import { Metadata } from 'next';
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { baseMetadata } from './metadata';
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // Only load the most used weights
  display: 'swap', // Use font-display: swap
  preload: true,
  variable: '--font-poppins',
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased w-full overflow-x-hidden`}>
        {/* <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
        <main className="w-full">
          {children}
        </main>
        <Footer />
        <Analytics mode="production" />
      </body>
    </html>
  );
}
