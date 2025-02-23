import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Credits";
import { Providers } from "./providers";

const ubuntuSans = Ubuntu({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "bSol v1.03",
  description: "finest",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ubuntuSans.variable} ${ubuntuSans.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="min-h-screen bg-white dark:bg-[#1a1613] text-[#000000] dark:text-[#ffffff]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
