import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";

interface SocialItemProps {
  children: React.ReactNode;
  id: number;
}

export default function SocialItem({ children, id }: SocialItemProps) {
  return (
    <motion.div
      {...configMotion}
      variants={{
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ delay: 0.4 * id, duration: 0.5 }}
      className="flex items-center gap-x-2"
    >
      {children}
    </motion.div>
  );
}
