"use client";
import { configMotion } from "@/utils/config-motion";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import IconArrowDown from "@/components/icons/icon-arrow-down";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen  w-full items-center justify-start bg-intro-background-mobile bg-cover bg-right bg-no-repeat lg:bg-intro-background lg:px-28"
    >
      <motion.h1
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`${montserrat.className} w-auto text-center text-4xl  font-bold tracking-wide text-white md:text-5xl lg:w-[50rem] lg:text-start lg:text-6xl dt:w-[60rem] dt:text-7xl`}
      >
        EMPRENDER CON EL FOCO BIEN PUESTO
      </motion.h1>

      <motion.div
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: -50, x: -130 },
          visible: { opacity: 1, y: 0, x: -130 },
        }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-14"
      >
        <Link
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to="about-us"
          className="font-poppins flex flex-col items-center gap-y-6"
        >
          <span className="font-helvetica-bold cursor-pointer whitespace-nowrap rounded-full  bg-white/40 px-6  py-2 text-sm text-white shadow-xl transition-all hover:scale-110 hover:bg-white hover:text-grayish-dark">
            CONOCER MÁS
          </span>
          <IconArrowDown />
        </Link>
      </motion.div>
    </section>
  );
}
