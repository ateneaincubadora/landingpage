import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";

interface CardI {
  id: number;
  name: string;
  lastName: string;
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
      className="z-30 mx-auto flex w-56 flex-col  rounded-3xl bg-grayish-light shadow-xl lg:max-w-[200px]"
    >
      <header className="relative  w-full rounded-tl-3xl rounded-tr-3xl ">
        <img
          src={card.image}
          alt="Image"
          className="aspect-square h-48 w-full rounded-tl-3xl rounded-tr-3xl object-contain"
        />
        <div className="absolute bottom-0 left-0 flex w-full items-center gap-2  bg-secondary px-3 py-1 shadow-2xl">
          <h4 className=" font-semibold text-white">{card.rol}</h4>
        </div>
      </header>
      <div className="flex flex-col gap-0.5 px-3 py-2.5">
        <h3 className="  font-semibold text-gray-700">
          {" "}
          Nombre : <span className="  text-gray-600">{card.name}</span>
        </h3>
        <h3 className=" font-semibold text-gray-700">
          Apellido : <span className="  text-gray-600">{card.lastName}</span>
        </h3>
      </div>
    </motion.article>
  );
}
