import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, direction = "up" }) {
  const directions = {
    up: {
      x: 0,
      y: 60,
    },

    down: {
      x: 0,
      y: -60,
    },

    left: {
      x: 80,
      y: 0,
    },

    right: {
      x: -80,
      y: 0,
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
