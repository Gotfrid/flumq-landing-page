import Image from "next/image";

import logoText from "../public/logo/logo-text.svg";
import logoSymbol from "../public/logo/logo-symbol.svg";
import appStoreGray from "../public/assets/app-store-gray.svg";
import googlePlayGray from "../public/assets/google-play-gray.svg";
import iphone14 from "../public/assets/iphone14.svg";
import scrollIcon from "../public/icons/scroll-icon.svg";
import diagonalArrow from "../public/icons/diagonal-arrow.svg";
import qrCode from "../public/assets/qr-code.svg";

const WelcomPage = () => {
  return (
    <section className="page welcome">
      <div className="purpleBubble">
        <div className="iphoneContainer">
          <Image src={iphone14} />
        </div>
        <div className="integrations">
          <div className="storeImage left">
            <Image src={appStoreGray} />
          </div>

          <div className="storeImage right">
            <Image src={googlePlayGray} />
          </div>
        </div>
      </div>
      <div className="textLogo">
        <Image src={logoText} height="50px" />
      </div>
      <div className="imageLogo">
        <Image src={logoSymbol} height="50px" />
      </div>
      <h1 className="title">Your guide to moving abroad</h1>
      <p className="subtitle">
        Choose country, access multiple guides, ask questions and share your
        experience.
      </p>
      <div className="scrollIconContainer">
        <Image src={scrollIcon} />
      </div>
      <div className="qrContainer">
        <div className="qrText">
          <p>Scan to</p>
          <p>download</p>
        </div>
        <div className="diagonalArrow">
          <Image src={diagonalArrow} />
        </div>
        <div className="qrImage">
          <Image src={qrCode} />
        </div>
      </div>
    </section>
  );
};

export default WelcomPage;
