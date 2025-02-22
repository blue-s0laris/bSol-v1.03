"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#ffffff] dark:bg-[#1a1613]  text-[#000000] dark:text-[#ffffff]">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/foxwhite.png"
          alt="Logo"
          width={29}
          height={29}
          className="h-7 w-7 hidden dark:block"
        />
        <Image
          src="/foxblack.png"
          alt="Logo"
          width={29}
          height={29}
          className="h-7 w-7 dark:hidden"
        />
        bSol v1.03
      </Link>
      <ThemeSwitch />
    </nav>
  );
}
