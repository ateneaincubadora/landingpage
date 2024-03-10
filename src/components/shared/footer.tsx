"use client";

import { menuSocials } from "@/consts/menu-socials";
import { Link as LinkScroll } from "react-scroll";
import { navItems } from "@/consts/nav-item";

import Logo from "./logo";
import React from "react";

export default function Footer() {
  return (
    <footer className=" overflow-visible bg-black/90 px-6 py-6 lg:px-28">
      <div className="relative md:flex md:justify-between">
        <div className=" flex flex-col md:mb-0">
          <LinkScroll
            duration={500}
            smooth={true}
            spy={true}
            offset={0}
            to={"hero"}
            className="absolute -left-6 -top-20"
          >
            <Logo className="h-32 w-32" />
          </LinkScroll>

          <ul className="mt-16 flex items-center justify-center gap-x-4">
            {menuSocials.map((icon) => (
              <li key={icon.id}>
                <a
                  href={icon.to}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-white transition-all hover:scale-110 hover:text-secondary"
                >
                  {React.createElement(icon.icon)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav className="mt-3.5 grid grid-cols-2 place-items-center gap-x-8 lg:place-items-start">
          {navItems.map((nav) => (
            <LinkScroll
              duration={500}
              smooth={true}
              key={nav.id}
              spy={true}
              offset={0}
              to={nav.to}
              className="cursor-pointer uppercase text-gray-200 hover:underline"
            >
              {nav.label}
            </LinkScroll>
          ))}
        </nav>
      </div>
      <hr className="my-6 border-white/10 sm:mx-auto lg:mb-6 lg:mt-3.5 " />
      <div className="flex items-center justify-center">
        <span className="text-center text-sm text-gray-400">
          &copy; Atenea - Incubadora 2023 Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
