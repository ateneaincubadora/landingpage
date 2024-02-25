import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";
import { cn } from "@/utils/cn";

interface MenuProps {
  className?: string;
}

const navItems = [
  {
    id: 1,
    label: "INICIO",
    to: "hero",
  },
  {
    id: 2,
    label: "NOSOTROS",
    to: "about-us",
  },
  {
    id: 3,
    label: "POTENCIAR",
    to: "enhance",
  },
  {
    id: 4,
    label: "INCUBADOS",
    to: "incubated",
  },
  {
    id: 5,
    label: "MENTORES",
    to: "mentors",
  },
  {
    id: 6,
    label: "CONTACTANOS",
    to: "contact",
  },
];

export default function Menu({ className }: MenuProps) {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };

  return (
    <motion.ul
      {...configMotion}
      variants={{
        hidden: { opacity: 0, y: -25 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={cn(
        "flex flex-col items-center gap-4 text-white lg:flex-row",
        className,
      )}
    >
      {navItems.map((nav) => (
        <li
          key={nav.id}
          className={`group relative cursor-pointer rounded-lg px-2 text-2xl text-gray-200 transition-colors hover:bg-gray-300/30 hover:text-white lg:text-lg ${activeLink === nav.to && "font-helvetica-bold text-white"}`}
        >
          <Link
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={handleSetActive}
            to={nav.to}
          >
            {nav.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}
