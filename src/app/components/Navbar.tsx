"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-end p-4 bg-[#ffffff] dark:bg-[#1a1613]  text-[#000000] dark:text-[#ffffff]">
      <div className="flex items-center">
        <ThemeSwitch />
      </div>
      <Link href="/" className="flex items-center gap-2 ml-4">
        bSol v1.03
      </Link>
      <Image
        src="/foxwhite.png"
        alt="Logo"
        quality={100}
        width={29}
        height={29}
        className="h-6 w-6 hidden dark:block ml-4"
      />
      <Image
        src="/foxblack.png"
        alt="Logo"
        quality={100}
        width={29}
        height={29}
        className="h-6 w-6 dark:hidden ml-4"
      />
    </nav>
  );
}
