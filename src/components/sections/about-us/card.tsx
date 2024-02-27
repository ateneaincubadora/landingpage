"use client";

import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";

import Box from "@/components/ui/box";

interface CardI {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface CardProps {
  card: CardI;
}

export default function Card({ card }: CardProps) {
  return (
    <motion.article
      {...configMotion}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.4 * card.id, duration: 0.6 }}
      className={`card group relative flex flex-col items-center gap-y-3`}
    >
      <header className="transition-all duration-1000 group-hover:rotate-[360deg]">
        <img
          src={card.icon}
          height="112"
          width="112"
          alt="placeholder"
          className="w- h-28 w-28 rounded-full object-contain"
        />
      </header>

      <Box className=" group-hover mb-3  flex h-14  w-full items-center justify-center py-0 transition-all duration-1000 ease-in-out group-hover:rounded-b-none group-hover:rounded-bl-none">
        <h3 className="font-helvetica-bold w-36 text-center text-lg text-grayish-dark">
          {card.title}
        </h3>
      </Box>

      <Box className="min-h-28 w-full px-8 py-4 transition-all duration-1000 ease-in-out group-hover:z-10  group-hover:-translate-y-6 group-hover:rounded-tl-none group-hover:rounded-tr-none">
        <p className=" font-poppins  text-sm text-grayish-dark">
          {card.description}
        </p>
      </Box>
    </motion.article>
  );
}
