import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";

interface CardI {
  id: number;
  name: string;
  rol: string;
  image: string;
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
      className="z-30 mx-auto flex max-w-[215px]  flex-col rounded-3xl bg-grayish-light shadow-xl"
    >
      <header className="relative h-36 w-full rounded-tl-3xl rounded-tr-3xl lg:h-44">
        <img
          src={card.image}
          alt="Image"
          className="h-56 w-full rounded-tl-3xl rounded-tr-3xl object-cover"
        />
      </header>
      <div className="z-10 mt-4 flex w-full items-center gap-2  bg-secondary px-3 py-1 shadow-xl">
        <h5 className=" font-semibold text-white">{card.rol}</h5>
      </div>
      <div className="flex flex-col gap-1 px-6 py-4">
        <h3 className="text-lg font-semibold text-grayish-dark">{card.name}</h3>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </motion.article>
  );
}
