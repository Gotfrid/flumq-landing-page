import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";

import logoText from "../public/logo-text.svg";
import logoSymbol from "../public/logo-symbol.svg";
import appStoreGray from "../public/app-store-gray.svg";
import googlePlayGray from "../public/google-play-gray.svg";
import iphone14 from "../public/iphone14.svg";
import scrollIcon from "../public/scroll-icon.svg";
import qrCode from "../public/qr-code.svg";
import diagonalArrow from "../public/diagonal-arrow.svg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Flumq</title>
        <meta name="description" content="Your guide to moving abroad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="page welcome">
        <div className="textLogo">
          <Image src={logoText} height="50px" />
        </div>
        <div className="imageLogo">
          <Image src={logoSymbol} height="50px" />
        </div>
        <h1 className="title">Your guide to moving abroad</h1>
        <p className="subtitle">
          Choose country, access multiple guides, ask questions and share your
          experience
        </p>
        <div className="integrations">
          <div className="storeImage">
            <Image src={appStoreGray} />
          </div>
          <div className="iphoneContainer">
            <Image src={iphone14} />
          </div>
          <div className="storeImage">
            <Image src={googlePlayGray} />
          </div>
        </div>
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
          <Image src={qrCode} />
        </div>
        <div className="bottomCurvature"></div>
      </section>
      <section className="page"></section>
    </>
  );
};

export default Home;
