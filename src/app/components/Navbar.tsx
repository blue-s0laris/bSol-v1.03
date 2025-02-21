"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeSwitch";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-900">
      <Link
        href="/"
        className="text-xl font-bold text-gray-900 dark:text-white"
      >
        bSol v1.03
      </Link>
      <ThemeSwitch />
    </nav>
  );
}
