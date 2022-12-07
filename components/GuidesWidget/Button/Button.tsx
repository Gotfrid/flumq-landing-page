import { FC } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  selected: boolean;
  text: string;
}
export const Button: FC<ButtonProps> = ({ selected, text }) => {
  const className = classNames(styles.button, selected && styles.active);
  return <button className={className}>{text}</button>;
};
