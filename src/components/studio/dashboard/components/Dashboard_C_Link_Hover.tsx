"use client";
import { motion } from "framer-motion";

interface Dashboard_C_Link_Hover_Props {
  content: string;
}

const Dashboard_C_Link_Hover = ({ content }: Dashboard_C_Link_Hover_Props) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
      style={{
        lineHeight: 1,
      }}
    >
      <div>
        {content.split("").map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {content.split("").map((l: any, i: any) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard_C_Link_Hover;
