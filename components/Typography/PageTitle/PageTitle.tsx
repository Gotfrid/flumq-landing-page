import { FC } from "react";
import { motion, Transition } from "framer-motion";
import styles from "./PageTitle.module.scss";

const initial = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };
const transition: Transition = {
  delay: 0.3,
  duration: 0.6,
  type: "spring",
};

interface PageTitleProps {
  text: string;
}

export const PageTitle: FC<PageTitleProps> = ({ text }) => {
  return (
    <motion.div
      className={styles.pageTitle}
      initial={initial}
      whileInView={animate}
      transition={transition}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  );
};
