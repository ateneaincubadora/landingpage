"use client";

import { aboutUsCards } from "@/consts/about-us-cards";
import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";

import Title from "@/components/ui/title";
import Card from "./card";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="flex h-auto w-full flex-col items-center justify-center gap-y-6 bg-grayish-light bg-about-us-background bg-cover  bg-center bg-no-repeat px-6 pb-8 pt-28 lg:min-h-screen lg:gap-y-12 lg:bg-contain lg:px-28 lg:py-0  lg:pt-16"
    >
      <motion.div
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Title className="title-about-us">SOBRE NOSOTROS</Title>
      </motion.div>

      <section className="cards z-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12">
        {aboutUsCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </section>
    </section>
  );
}
