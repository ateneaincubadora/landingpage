"use client";

import { useEffect, useState } from "react";

import Nav from "./nav";

const BACKGROUND_COLOR = {
  WHITE: "bg-white/40",
  BLACK: "bg-black/85",
};

export default function Header() {
  const [background, setBackground] = useState(BACKGROUND_COLOR.WHITE);
  const [mouseOverHeader, setMouseOverHeader] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const heroHeight = document.getElementById("hero")?.offsetHeight || 0;

    currentScrollPos > heroHeight - 150
      ? setBackground(BACKGROUND_COLOR.BLACK)
      : setBackground(BACKGROUND_COLOR.WHITE);

    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  const handleMouseEnter = () => setMouseOverHeader(true);

  const handleMouseLeave = () => setMouseOverHeader(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`${background} fixed left-0  z-50 w-full overflow-y-hidden px-6 transition-all duration-500 ease-in-out lg:px-28 ${
        visible || mouseOverHeader ? "opacity-100" : "opacity-0"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Nav />
    </header>
  );
}
