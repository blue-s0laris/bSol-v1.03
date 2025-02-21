"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return <Moon size={20}></Moon>;
  if (resolvedTheme === "dark") {
    return <Sun size={20} onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <Moon size={20} onClick={() => setTheme("dark")} />;
  }
}
