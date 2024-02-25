import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";

import Image from "next/image";

interface CardI {
  id: number;
  name: string;
  rol: string;
}

interface CardProps {
  card: CardI;
}

export default function Card({ card }: CardProps) {
  return (
    <motion.article
      {...configMotion}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.4 * card.id, duration: 0.6 }}
      className="z-30 mx-auto flex max-w-[215px]  flex-col rounded-3xl bg-grayish-light shadow-xl lg:max-w-[230px]"
    >
      <header className="relative h-36 w-full rounded-tl-3xl rounded-tr-3xl lg:h-44">
        <Image
          src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
          alt="Image"
          fill
          className="h-3h w-full rounded-tl-3xl rounded-tr-3xl object-cover"
        />
      </header>
      <div className="z-10 mx-4 -mt-8 flex items-center gap-2 rounded-xl bg-secondary px-3 py-2 shadow-xl">
        <h5 className=" font-semibold text-white">{card.rol}</h5>
      </div>
      <div className="flex flex-col gap-2 px-6 py-4">
        <h3 className="text-lg font-semibold text-grayish-dark">{card.name}</h3>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </motion.article>
  );
}
