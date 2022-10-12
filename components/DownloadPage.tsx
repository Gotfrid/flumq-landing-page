import Image from "next/image";
import Link from "next/link";

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

const DownloadPage = () => {
  return (
    <section className="page download">
      {/* <div className="downloadGradient"></div> */}
      <div className="appIcon">
        <div>
          <Image src={appIcon} />
        </div>
      </div>
      <span className="downloadHeroText">Download App</span>
      <span className="downloadDescription">
        It&apos;s time to begin your journey abroad.
      </span>
      <div className="downloadStoreContainer">
        <span>
          <Image src={appStoreBlack} />
        </span>
        <span>
          <Image src={googlePlayBlack} />
        </span>
      </div>
      <footer className="footer">
        <div className="contacts">
          <div className="emailContainer">
            <span>
              <Image src={mailIcon} />
            </span>
            <a>business@flumq.com</a>
          </div>
          <div className="socialContainer">
            <a href="https://www.facebook.com/flumq" target="_blank">
              <Image src={facebookIcon} />
            </a>
            <a href="#" target="_blank">
              <Image src={instagramIcon} />
            </a>
            <a href="#" target="_blank" className="youtubeIcon">
              <Image src={youtubeIcon} />
            </a>
            <a href="https://twitter.com/FlumqOfficial" target="_blank">
              <Image src={twitterIcon} />
            </a>
            <a href="https://www.linkedin.com/company/flumq" target="_blank">
              <Image src={linkedinIcon} />
            </a>
          </div>
        </div>
        <div className="footerBorder"></div>
        <div className="bottomFooter">
          <div className="copyrightContainer">
            <span className="copyrightLogo">
              <Image src={footerLogo} />
            </span>
            <span className="copyrightText">© 2022 Flumq LLC</span>
          </div>
          <div className="links">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Cookie Policy</Link>
          </div>
        </div>
      </footer>
      {/* <div className="curvedLine" />
      <div className="curvedOverlap" /> */}
      <div className="footerQRContainer">
        <Image src={qrCode} />
        <span>Scan to download</span>
      </div>
    </section>
  );
};

export default DownloadPage;
