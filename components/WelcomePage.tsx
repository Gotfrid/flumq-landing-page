import Image from "next/image";
import classNames from "classnames";

import logoText from "../public/logo/logo-text.svg";
import logoSymbol from "../public/logo/logo-symbol.svg";
import iphone14 from "../public/assets/iphone14.svg";
import scrollIcon from "../public/icons/scroll-icon.svg";

import StoreButton from "./Common/StoreButton";
import IphoneGroup from "./Common/IphoneGroup";
import { MainTitle } from "./Typography/MainTitle";

import styles from "../styles/WelcomePage.module.scss";

const WelcomPage = () => {
  return (
    <section className={classNames("page", styles.welcomePage)}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.textLogo}>
            <Image src={logoText} alt="Flumq text logo" height="50px" />
          </div>
          <div className={styles.imageLogo}>
            <Image src={logoSymbol} alt="Flumq image logo" height="50px" />
          </div>
          <MainTitle />
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

        <div className={styles.scrollIconContainer}>
          <Image src={scrollIcon} alt="Scroll icon" />
        </div>
      </div>
    </section>
  );
};

export default WelcomPage;
