import { Component, FC } from "react";
import { motion, MotionProps, Transition } from "framer-motion";
import styles from "./PageTitle.module.scss";
import { HTMLProps } from "react";

const initial = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };
const transition: Transition = {
  delay: 0.3,
  duration: 0.6,
  type: "spring",
};

interface PageTitleProps extends MotionProps {
  text: string;
}

export const PageTitle: FC<PageTitleProps> = (props) => {
  const { text } = props;
  return (
    <motion.div
      className={styles.pageTitle}
      initial={initial}
      whileInView={animate}
      transition={transition}
      viewport={{ once: true }}
      {...props}
    >
      {text}
    </motion.div>
  );
};
