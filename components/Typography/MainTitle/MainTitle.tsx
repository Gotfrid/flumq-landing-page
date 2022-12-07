import { FC } from "react";
import styles from "./MainTitle.module.scss";

interface MainTitleProps {
  title?: string;
  subtitle?: string;
}

export const MainTitle: FC<MainTitleProps> = ({ title, subtitle }) => {
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
