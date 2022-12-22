import { FC } from "react";
import { motion, MotionProps } from "framer-motion";
import styles from "./PagePreTitle.module.scss";

const initial = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };
const transition = {
  delay: 0.3,
  duration: 0.6,
  type: "spring",
};

interface PagePreTitleProps extends MotionProps {
  text: string;
  variant: "dark" | "light";
}

export const PagePreTitle: FC<PagePreTitleProps> = (props) => {
  const { text, variant } = props;
  return (
    <motion.div
      className={styles.preTitle}
      initial={initial}
      whileInView={animate}
      transition={transition}
      viewport={{ once: true }}
      style={{ color: variant === "dark" ? "#454267" : "#fff" }}
      {...props}
    >
      {text}
    </motion.div>
  );
};
