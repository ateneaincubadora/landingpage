"use client";

import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";
import { useState } from "react";

import IncubatedList from "./incubated-list";
import Box from "@/components/ui/box";

export default function Incubated() {
  const [description, setDescription] = useState("");

  const onDescription = (desc: string) => setDescription(desc);

  return (
    <section
      id="incubated"
      className="flex h-full w-full flex-col items-center justify-start gap-y-3 bg-grayish-light bg-incubated-background bg-cover bg-center  bg-no-repeat px-6 pb-12 pt-[6.125rem] lg:min-h-screen lg:bg-top lg:px-0 lg:pb-28 "
    >
      <motion.section
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <IncubatedList onDescription={onDescription} />
      </motion.section>

      <motion.div
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Box className="flex min-h-20 w-80 items-center  justify-center py-2  text-center text-sm text-gray-500 md:w-[22rem] lg:min-h-16 ">
          {description}
        </Box>
      </motion.div>
    </section>
  );
}
