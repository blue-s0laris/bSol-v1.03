import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Credits";
import { Providers } from "./providers";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${ubuntuSans.variable} ${ubuntuSans.variable} antialiased`}
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <Providers>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-[#1a1613] text-[#000000] dark:text-[#ffffff]">
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
