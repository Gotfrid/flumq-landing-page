import Image from "next/image";
import classNames from "classnames";

import iphone14 from "../public/assets/iphone14.svg";
import scrollIcon from "../public/icons/scroll-icon.svg";
import diagonalArrow from "../public/icons/diagonal-arrow.svg";

import { StoreButton } from "./Common/StoreButton";
import { Logo } from "./Branding/Logo";
import IphoneGroup from "./Common/IphoneGroup";
import { AppTitle } from "./Typography/AppTitle";
import QrCode from "./Common/QrCode";

import styles from "../styles/WelcomePage.module.scss";

const WelcomPage = () => {
  return (
    <section className={classNames("page", styles.welcomePage)}>
      <div className={styles.purpleConainer}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.textLogo}>
              <Logo variant="text" />
            </div>
            <div className={styles.imageLogo}>
              <Logo variant="symbol" />
            </div>
            <AppTitle />
          </div>

          <IphoneGroup />

          {/* TODO: there must be a better way? */}
          <div className={styles.integrationsMobile}>
            <div className={styles.stores}>
              <StoreButton store="apple" color="gray" />
              <StoreButton store="google" color="gray" />
            </div>
            <div className={styles.iphone}>
              <Image src={iphone14} alt="Screenshot of main page in a smartphone app" priority />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIconContainer}>
        <Image src={scrollIcon} alt="Scroll icon" />
      </div>

      <div className={styles.qrcode}>
        <div className={styles.qrText}>
          <p>Scan to</p>
          <p>download</p>
        </div>
        <div className={styles.diagonalArrow}>
          <Image src={diagonalArrow} alt="Diagonal arrow" />
        </div>
        <QrCode width="5.5em" />
      </div>
    </section>
  );
};

export default WelcomPage;
