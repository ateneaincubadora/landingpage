"use client";

import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import MenuSocials from "./menu-socials";
import NavMobile from "./nav-mobile";
import Logo from "../logo";
import Menu from "./menu";

export default function Nav() {
  return (
    <nav className="flex w-full items-center justify-between ">
      <motion.div
        {...configMotion}
        variants={{
          hidden: { opacity: 0, x: -25 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to={"hero"}
          className="cursor-pointer"
        >
          <Logo />
        </Link>
      </motion.div>

      <Menu className="hidden lg:flex" />
      <MenuSocials className="hidden lg:flex" />

      <NavMobile />
    </nav>
  );
}
