"use client";

import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";

import IncubatedList from "./incubated-list";
import Box from "@/components/ui/box";

export default function Incubated() {
  return (
    <section
      id="incubated"
      className="flex h-full w-full flex-col items-center justify-start gap-y-4 bg-grayish-light bg-incubated-background bg-cover bg-center  bg-no-repeat px-6 pb-12 pt-[6.125rem] lg:min-h-screen lg:px-0 lg:pb-8 lg:pt-28 "
    >
      <motion.section
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <IncubatedList />
      </motion.section>

      <motion.div
        {...configMotion}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Box className="w-full text-sm text-gray-500 md:w-96">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          repellendus provident vero earum mollitia dolores. Eius, asperiores
          similique. Quisquam aliquid debitis.
        </Box>
      </motion.div>
    </section>
  );
}
