import Image from "next/image";

import { StoreButton } from "./StoreButton";

import iphone14 from "../../public/assets/iphone14.svg";

import styles from "./IphoneGroup.module.scss";

const IphoneGroup = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.appstore}>
        <StoreButton store="apple" color="gray" />
      </div>
      <div className={styles.iphone}>
        <Image src={iphone14} alt="Screenshot of main page in a smartphone app" layout="fill" priority />
      </div>
      <div className={styles.playmarket}>
        <StoreButton store="google" color="gray" />
      </div>
    </div>
  );
};

export default IphoneGroup;
