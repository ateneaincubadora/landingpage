"use client";

import { configMotion } from "@/utils/config-motion";
import { menuSocials } from "@/consts/menu-socials";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

import React from "react";

interface MenuSocialsProps {
  className?: string;
}

export default function MenuSocials({ className }: MenuSocialsProps) {
  return (
    <motion.ul
      {...configMotion}
      variants={{
        hidden: { opacity: 0, x: 25 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={cn("animate-fade-down flex items-center gap-x-2", className)}
    >
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
    </motion.ul>
  );
}
