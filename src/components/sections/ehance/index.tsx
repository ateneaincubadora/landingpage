"use client";

import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";

import Title from "@/components/ui/title";
import MembersList from "./members-list";

export default function Ehance() {
  return (
    <section
      id="enhance"
      className="relative flex h-auto w-full flex-col items-center justify-start overflow-x-hidden bg-grayish-light  px-6 pb-0 pt-[7rem] text-white md:flex-row lg:min-h-screen lg:px-28  lg:pb-7 lg:pt-[5rem]"
    >
      <img
        src="/assets/vector-rectangle.webp"
        height={600}
        width={600}
        alt="Rectangulo vectorizado"
        className=" absolute right-0 top-0 hidden h-screen w-auto object-contain lg:block"
      />
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-end lg:gap-4 ">
        <section className="relative  z-20">
          <motion.div
            {...configMotion}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <img
              src="/assets/video-test.webp"
              width={333}
              height="auto"
              alt="Imagen representando un video"
              className="h-[28rem] w-full object-cover  lg:h-[calc(100vh-64px)] lg:w-full"
            />
          </motion.div>

          <motion.div
            {...configMotion}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute top-0 flex flex-col items-start gap-y-2 lg:-right-72 lg:top-20 "
          >
            <Title className="text-shadow bg-primary/60 py-0 text-xl lg:text-3xl">
              CAPTAR EL VALOR,
            </Title>
            <Title className="text-shadow bg-primary/60 py-0 text-xl lg:text-3xl">
              POTENCIARLO CON OTROS.
            </Title>
          </motion.div>
        </section>

        <MembersList />
      </div>
    </section>
  );
}
