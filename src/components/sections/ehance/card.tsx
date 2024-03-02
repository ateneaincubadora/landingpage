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
      className="z-30 mx-auto flex max-w-[200px]  flex-col rounded-3xl bg-grayish-light shadow-xl"
    >
      <header className="relative  w-full rounded-tl-3xl rounded-tr-3xl ">
        <img
          src={card.image}
          alt="Image"
          className="aspect-square h-44 w-full rounded-tl-3xl rounded-tr-3xl object-cover"
        />
        <div className="absolute bottom-0 left-0 flex w-full items-center gap-2  bg-secondary px-3 py-1 shadow-xl">
          <h5 className=" font-semibold text-white">{card.rol}</h5>
        </div>
      </header>
      <div className="flex flex-col gap-0.5 px-6 py-2.5">
        <h3 className=" font-semibold text-grayish-dark">{card.name}</h3>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
    </motion.article>
  );
}
