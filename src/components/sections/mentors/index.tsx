"use client";

import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";

import MentorsList from "./mentors-list";

export default function Mentors() {
  return (
    <section
      id="mentors"
      className="flex h-auto w-full flex-col items-center justify-center gap-y-12 bg-grayish-light px-6 py-20 pt-32 lg:h-screen lg:px-0 lg:py-0"
    >
      <motion.section
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <MentorsList />
      </motion.section>
      <motion.p
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="w-auto text-center text-xl md:w-[36rem]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem
        id fuga adipisicing elit.
      </motion.p>
    </section>
  );
}
