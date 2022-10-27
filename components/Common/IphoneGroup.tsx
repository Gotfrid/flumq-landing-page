import Image from "next/image";

import StoreButton from "./StoreButton";

import iphone14 from "../../public/assets/iphone14.svg";
import diagonalArrow from "../../public/icons/diagonal-arrow.svg";
import qrCode from "../../public/assets/qr-code.svg";

import styles from "./IphoneGroup.module.scss";

const IphoneGroup = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.appstore}>
        <StoreButton store="apple" color="gray" />
      </div>
      <div className={styles.iphone}>
        <Image src={iphone14} layout="fill" />
      </div>
      <div className={styles.playmarket}>
        <StoreButton store="google" color="gray" />
      </div>
      <div className={styles.qrcode}>
        <div className={styles.qrText}>
          <p>Scan to</p>
          <p>download</p>
        </div>
        <div className={styles.diagonalArrow}>
          <Image src={diagonalArrow} />
        </div>
        <div className={styles.qrImage}>
          <Image src={qrCode} />
        </div>
      </div>
    </div>
  );
};

export default IphoneGroup;