import Image from "next/image";

import appIcon from "../../../public/logo/app-icon.svg";

import styles from "./AppIcon.module.scss";

export const AppIcon = () => {
  return (
    <div className={styles.appIcon}>
      <div>
        <Image src={appIcon} alt="Application icon" />
      </div>
    </div>
  );
};
