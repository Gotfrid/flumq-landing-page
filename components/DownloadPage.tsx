import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import qrCode from "../public/assets/qr-code.svg";
import appIcon from "../public/logo/app-icon.svg";
import mailIcon from "../public/icons/mail-icon.svg";
import facebookIcon from "../public/icons/facebook-icon.svg";
import instagramIcon from "../public/icons/instagram-icon.svg";
import youtubeIcon from "../public/icons/youtube-icon.svg";
import twitterIcon from "../public/icons/twitter-icon.svg";
import linkedinIcon from "../public/icons/linkedin-icon.svg";
import footerLogo from "../public/logo/footer-logo.svg";

import styles from "../styles/DownloadPage.module.scss";
import StoreButton from "./Common/StoreButton";
import QrCode from "./Common/QrCode";

const DownloadPage = () => {
  return (
    <section className={classNames("page", styles.downloadPage)}>
      <div className={styles.container}>
        <div className={styles.appIcon}>
          <div>
            <Image src={appIcon} alt="Application icon" />
          </div>
        </div>

        <div className={styles.hero}>
          <div className={styles.title}>Download App</div>
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
              <a>business@flumq.com</a>
            </div>
            <ul className={styles.socials}>
              <li>
                <a href="https://www.facebook.com/flumq" target="_blank">
                  <Image src={facebookIcon} alt="Facebook icon" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <Image src={instagramIcon} alt="Instagram icon" />
                </a>
              </li>
              <li className={styles.youtube}>
                <a href="https://www.youtube.com/channel/UCFrC1y1KCd8hz9HA6DN48bQ" target="_blank">
                  <Image src={youtubeIcon} alt="Youtube icon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/FlumqOfficial" target="_blank">
                  <Image src={twitterIcon} alt="Twitter icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/flumq" target="_blank">
                  <Image src={linkedinIcon} alt="Linkedin icon" />
                </a>
              </li>
            </ul>
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
