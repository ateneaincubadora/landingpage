"use client";

import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";
import { useState } from "react";

import MentorsList from "./mentors-list";

export default function Mentors() {
  const [description, setDescription] = useState("");

  const onDescription = (desc: string) => setDescription(desc);

  return (
    <section
      id="mentors"
      className="flex h-auto w-full flex-col items-center justify-center gap-y-8 bg-grayish-light px-6 py-20 pt-32 lg:h-screen lg:px-0 lg:py-0"
    >
      <motion.section
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="h-52"
      >
        <MentorsList onDescription={onDescription} />
      </motion.section>
      <motion.p
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className=" w-auto  text-center text-xl md:min-w-[36rem]"
      >
        {description}
      </motion.p>
    </section>
  );
}
