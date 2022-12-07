import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import appIcon from "../public/logo/app-icon.svg";
import mailIcon from "../public/icons/mail-icon.svg";
import footerLogo from "../public/logo/footer-logo.svg";

import styles from "../styles/DownloadPage.module.scss";
import StoreButton from "./Common/StoreButton";
import QrCode from "./Common/QrCode";
import { IconBar } from "./SocialMedia/IconBar";
import { AppIcon } from "./Branding/AppIcon";

const DownloadPage = () => {
  return (
    <section className={classNames("page", styles.downloadPage)}>
      <div className={styles.container}>
        <div className={styles.appIconContainer}>
          <AppIcon />
        </div>

        <div className={styles.hero}>
          <h2 className={styles.title}>Download App</h2>
          <div className={styles.subtitle}>It&apos;s time to begin your journey abroad.</div>
          <div className={styles.stores}>
            <StoreButton store="apple" color="black" />
            <StoreButton store="google" color="black" />
          </div>
        </div>

        <div className={styles.footerQRContainer}>
          <QrCode width="6.5em" />
          <span>Scan to download</span>
        </div>

        <footer className={styles.footer}>
          <div className={styles.contacts}>
            <div className={styles.email}>
              <span>
                <Image src={mailIcon} alt="Email icon" />
              </span>
              <a href="mailto:business@flumq.com">business@flumq.com</a>
            </div>
            <IconBar />
          </div>

          <div className={styles.footerBorder} />

          <div className={styles.links}>
            <div className={styles.copyrightContainer}>
              <span className={styles.copyrightLogo}>
                <Image src={footerLogo} alt="Small flumq logo" />
              </span>
              <span>© 2022 Flumq LLC</span>
            </div>
            <div className={styles.terms}>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">Cookie Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default DownloadPage;
