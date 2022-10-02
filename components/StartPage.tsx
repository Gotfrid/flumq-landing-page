import Image from "next/image";

import styles from "../styles/StartPage.module.css";
import logoText from "../public/logo-text.svg";
import logoSymbol from "../public/logo-symbol.svg";
import appStoreGray from "../public/app-store-gray.svg";
import googlePlayGray from "../public/google-play-gray.svg";
import iphone14 from "../public/iphone14.svg";
import scrollIcon from "../public/scroll-icon.svg";
import qrCode from "../public/qr-code.svg";
import diagonalArrow from "../public/diagonal-arrow.svg";

const StartPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textLogo}>
        <Image src={logoText} height="50px" />
      </div>
      <div className={styles.imageLogo}>
        <Image src={logoSymbol} height="50px" />
      </div>
      <h1 className={styles.title}>Your guide to moving abroad</h1>
      <p className={styles.subtitle}>
        Choose country, access multiple guides, ask questions and share your
        experience
      </p>
      <div className={styles.integrations}>
        <div>
          <Image src={appStoreGray} />
        </div>
        <div className={styles.iphoneContainer}>
          <Image src={iphone14} />
        </div>
        <div>
          <Image src={googlePlayGray} />
        </div>
      </div>
      <div className={styles.bottomGroup}>
        <div className={styles.bottomCurvature} />
        <div className={styles.bottomFiller} />
      </div>
      <div className={styles.scrollIconContainer}>
        <Image src={scrollIcon} />
      </div>
      <div className={styles.qrContainer}>
        <div className={styles.qrText}>
          <p>Scan to</p>
          <p>download</p>
        </div>
        <div className={styles.diagonalArrow}>
          <Image src={diagonalArrow} />
        </div>
        <Image src={qrCode} />
      </div>
    </div>
  );
};

export default StartPage;
