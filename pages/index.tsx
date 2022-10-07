import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";

import logoText from "../public/logo/logo-text.svg";
import logoSymbol from "../public/logo/logo-symbol.svg";
import appStoreGray from "../public/assets/app-store-gray.svg";
import googlePlayGray from "../public/assets/google-play-gray.svg";
import iphone14 from "../public/assets/iphone14.svg";
import scrollIcon from "../public/icons/scroll-icon.svg";
import qrCode from "../public/assets/qr-code.svg";
import diagonalArrow from "../public/icons/diagonal-arrow.svg";
import destinations from "../public/assets/destinations.svg";
import searchIcon from "../public/icons/magnifying-glass.svg";
import settingsIcon from "../public/icons/adjustments-vertical.svg";
import community3x from "../public/assets/community3x.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Flumq</title>
        <meta name="description" content="Your guide to moving abroad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* START PAGE */}

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

      {/* DESTINATIONS PAGE */}

      <section className="page destination">
        <div className="destinationsContainer">
          <span className="iconContainer searchIcon">
            <Image src={searchIcon} />
          </span>
          <span className="iconContainer settingsIcon">
            <Image src={settingsIcon} />
          </span>
          <div className="destinations"></div>
        </div>
        <div className="destinationsHeroText">
          <span className="findText">Find your</span>
          <span className="destinationText">Destination</span>
          <span>
            <span className="highlightDark">Know your options</span>
            <p className="explainText">
              Search countries by filters, compare and make your choice
            </p>
          </span>
        </div>
      </section>

      {/* DESTINATIONS PAGE */}

      <section className="page guides">
        <span className="accessText">Access</span>
        <span className="guidesText">Step-by-Step Guides</span>
        <div className="guidesContainer">Guides placeholder</div>
        <span className="description">
          <span className="highlightLight">No more uncertainties</span>
          <p className="explainTextWhite">
            Choose a path that shows what to do next, track progress, share
            timeline, or create your own guide
          </p>
        </span>
      </section>

      {/* COMMUNITY PAGE */}

      <section className="page community">
        <div className="communityHeroText">
          <span className="joinText">Join the</span>
          <span className="communityText">Community</span>
          <span>
            <span className="highlightDark">You're not alone</span>
            <p className="explainText">
              Meet new people, join discussions, share your experience, ask
              questions, and more.
            </p>
          </span>
        </div>
        <div className="communityBackground">
          <div className="communityContainer">
            <Image src={community3x} layout="fill" objectFit="contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
