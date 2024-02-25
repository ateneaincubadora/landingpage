import { configMotion } from "@/utils/config-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

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
      <li className="">
        <a
          href="#"
          className="inline-block text-white transition-all hover:scale-110 hover:text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="m3 9l9 6l9-6l-9-6z" />
              <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9m0 10l6-6m6 0l6 6" />
            </g>
          </svg>
        </a>
      </li>
      <li className="">
        <a
          href="#"
          className="inline-block text-white transition-all hover:scale-110 hover:text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
            />
          </svg>
        </a>
      </li>
      <li className="">
        <a
          href="#"
          className="inline-block text-white transition-all hover:scale-110 hover:text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.875 22q-3.9 0-7.338-1.475t-6-4.038q-2.562-2.562-4.05-6T2 3.126q-.025-.45.3-.788T3.1 2H7q.45 0 .775.338t.325.812q0 1.1.15 2.075t.475 1.85q.125.275.05.562t-.3.538l-2.5 2.5q1.075 2.2 3.05 4.175t4.25 3.15l2.5-2.5q.225-.225.525-.3t.6.05q.925.3 1.913.463t2.037.162q.475 0 .813.35t.337.85V20.9q0 .45-.325.775t-.8.325Zm-5.75-3q1.125.425 2.35.675T20 20h-.013H20v-2.15q-.775-.05-1.588-.175T16.8 17.3l.013.013l-.013-.013l-1.675 1.7ZM20 12q0-3.35-2.325-5.675T12 4V2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12h-2Zm-4 0q0-1.65-1.175-2.825T12 8V6q2.5 0 4.25 1.75T18 12h-2ZM5 8.825L6.65 7.15q-.2-.725-.338-1.525T6.125 4v.013V4h-2.1q.05 1.2.3 2.4T5 8.825Zm0 0ZM15.125 19Z"
            />
          </svg>
        </a>
      </li>
    </motion.ul>
  );
}
