"use client";

import { useEffect, useState } from "react";

import Nav from "./nav";

export default function Header() {
  const [scrollClass, setScrollClass] = useState("bg-white/40");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      const scrollThreshold = heroHeight;

      if (scrollY > scrollThreshold - 150) {
        setScrollClass("bg-black/85");
      } else {
        setScrollClass("bg-white/40");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed left-0 top-0 z-50 h-[6.125rem] w-full overflow-y-hidden ${scrollClass}  overflow-x-hidden px-6 transition-all duration-300 ease-in-out lg:px-28`}
    >
      <Nav />
    </header>
  );
}
