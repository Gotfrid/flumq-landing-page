import Image from "next/image";
import classNames from "classnames";

import logoText from "../public/logo/logo-text.svg";
import logoSymbol from "../public/logo/logo-symbol.svg";
import appStoreGray from "../public/assets/app-store-gray.svg";
import googlePlayGray from "../public/assets/google-play-gray.svg";
import iphone14 from "../public/assets/iphone14.svg";
import scrollIcon from "../public/icons/scroll-icon.svg";
import diagonalArrow from "../public/icons/diagonal-arrow.svg";
import qrCode from "../public/assets/qr-code.svg";

import styles from "../styles/WelcomePage.module.scss";

const WelcomPage = () => {
  return (
    <section className={classNames("page", styles.welcomePage)}>
      <div className={styles.hero}>
        <div className={styles.textLogo}>
          <Image src={logoText} height="50px" />
        </div>
        <div className={styles.imageLogo}>
          <Image src={logoSymbol} height="50px" />
        </div>
        <h1 className={styles.title}>Your guide to moving abroad</h1>
        <div className={styles.subtitle}>
          Choose country, access multiple guides, ask questions and share your
          experience.
        </div>
      </div>

      <div className={styles.integrations}>
        <div className={styles.store}>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <Image src={appStoreGray} />
          </a>
        </div>
        <div className={styles.iphone}>
          <Image src={iphone14} />
        </div>
        <div className={styles.store}>
          <a href="https://play.google.com/store/apps" target="_blank">
            <Image src={googlePlayGray} />
          </a>
        </div>
      </div>

      {/* TODO: there must be a better way? */}
      <div className={styles.integrationsMobile}>
        <div className={styles.stores}>
          <div className={styles.store}>
            <a href="https://www.apple.com/app-store/" target="_blank">
              <Image src={appStoreGray} />
            </a>
          </div>
          <div className={styles.store}>
            <a href="https://play.google.com/store/apps" target="_blank">
              <Image src={googlePlayGray} />
            </a>
          </div>
        </div>
        <div className={styles.iphone}>
          <Image src={iphone14} />
        </div>
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
        <div className={styles.qrImage}>
          <Image src={qrCode} />
        </div>
      </div>
    </section>
  );
};

export default WelcomPage;
