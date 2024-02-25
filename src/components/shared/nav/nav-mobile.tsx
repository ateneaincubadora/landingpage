"use client";
import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";
import { useState } from "react";

import MenuMobile from "./menu-mobile";

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.button
        {...configMotion}
        variants={{
          hidden: { opacity: 0, x: 25 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ delay: 0.3, duration: 0.5 }}
        onClick={onOpen}
        className="z-50 block lg:hidden"
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path fill="#ffffff" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
            />
          </svg>
        )}
      </motion.button>
      <MenuMobile isOpen={isOpen} />
    </>
  );
}
