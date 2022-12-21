import { FC } from "react";
import styles from "./AppTitle.module.scss";

interface AppTitleProps {
  title?: string;
  subtitle?: string;
}

export const AppTitle: FC<AppTitleProps> = ({ title, subtitle }) => {
  const titleText = title ?? "Your guide to moving abroad";
  const subtitleText =
    subtitle ?? "Choose a country, access multiple guides, ask questions and share your experience.";
  return (
    <>
      <h1 className={styles.title}>{titleText}</h1>
      <div className={styles.subtitle}>{subtitleText}</div>
    </>
  );
};
