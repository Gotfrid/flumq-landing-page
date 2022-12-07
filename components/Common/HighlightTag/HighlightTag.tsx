import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./HighlightTag.module.scss";

interface HighlightTagProps {
  variant: "light" | "dark";
  children: ReactNode;
}

export const HighlightTag: FC<HighlightTagProps> = ({ variant, children }) => {
  const className = classNames(styles.tag, styles[variant]);
  return <span className={className}>{children}</span>;
};
