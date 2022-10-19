import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import qrCode from "../public/assets/qr-code.svg";
import appIcon from "../public/logo/app-icon.svg";
import appStoreBlack from "../public/assets/app-store-black.svg";
import googlePlayBlack from "../public/assets/google-play-black.svg";
import mailIcon from "../public/icons/mail-icon.svg";
import facebookIcon from "../public/icons/facebook-icon.svg";
import instagramIcon from "../public/icons/instagram-icon.svg";
import youtubeIcon from "../public/icons/youtube-icon.svg";
import twitterIcon from "../public/icons/twitter-icon.svg";
import linkedinIcon from "../public/icons/linkedin-icon.svg";
import footerLogo from "../public/logo/footer-logo.svg";

import styles from "../styles/DownloadPage.module.scss";

const DownloadPage = () => {
  return (
    <section className={classNames("page", styles.downloadPage)}>
      <div className={styles.appIcon}>
        <div>
          <Image src={appIcon} />
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.title}>Download App</div>
        <div className={styles.subtitle}>
          It&apos;s time to begin your journey abroad.
        </div>
        <div className={styles.stores}>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <Image src={appStoreBlack} />
          </a>
          <a href="https://play.google.com/store/apps" target="_blank">
            <Image src={googlePlayBlack} />
          </a>
        </div>
      </div>

      <div className={styles.footerQRContainer}>
        <Image src={qrCode} className={styles.qrImage} />
        <span>Scan to download</span>
      </div>

      <footer className={styles.footer}>
        <div className={styles.contacts}>
          <div className={styles.email}>
            <span>
              <Image src={mailIcon} />
            </span>
            <a>business@flumq.com</a>
          </div>
          <ul className={styles.socials}>
            <li>
              <a href="https://www.facebook.com/flumq" target="_blank">
                <Image src={facebookIcon} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <Image src={instagramIcon} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className={styles.youtube}>
                <Image src={youtubeIcon} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/FlumqOfficial" target="_blank">
                <Image src={twitterIcon} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/flumq" target="_blank">
                <Image src={linkedinIcon} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerBorder} />

        <div className={styles.links}>
          <div className={styles.copyrightContainer}>
            <span className={styles.copyrightLogo}>
              <Image src={footerLogo} />
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
    </section>
  );
};

export default DownloadPage;
