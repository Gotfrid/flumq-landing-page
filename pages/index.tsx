import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import logoText from "../public/logo/logo-text.svg";
import logoSymbol from "../public/logo/logo-symbol.svg";
import appStoreGray from "../public/assets/app-store-gray.svg";
import googlePlayGray from "../public/assets/google-play-gray.svg";
import iphone14 from "../public/assets/iphone14.svg";
import scrollIcon from "../public/icons/scroll-icon.svg";
import qrCode from "../public/assets/qr-code.svg";
import diagonalArrow from "../public/icons/diagonal-arrow.svg";
import destinations from "../public/assets/destinations.png";
import searchIcon from "../public/icons/magnifying-glass.svg";
import settingsIcon from "../public/icons/adjustments-vertical.svg";
import community3x from "../public/assets/community3x.png";
import appIcon from "../public/logo/app-icon.svg";
import appStoreBlack from "../public/assets/app-store-black.svg";
import googlePlayBlack from "../public/assets/google-play-black.svg";
import timeline from "../public/assets/timeline3x.png";
import stats from "../public/assets/stats3x.png";

import mailIcon from "../public/icons/mail-icon.svg";
import facebookIcon from "../public/icons/facebook-icon.svg";
import instagramIcon from "../public/icons/instagram-icon.svg";
import youtubeIcon from "../public/icons/youtube-icon.svg";
import twitterIcon from "../public/icons/twitter-icon.svg";
import linkedinIcon from "../public/icons/linkedin-icon.svg";

import footerLogo from "../public/logo/footer-logo.svg";
import { MouseEventHandler, useState } from "react";

const DescriptionContent = () => {
  return (
    <div className="descriptionContent">
      <h3>Moving to Canada</h3>
      <div className="descriptionContent__textContainer">
        <p>
          Hello everyone, This guide is for those who want to move permanently
          to Canada. I immigrated in 2022, so I share my real steps with you.
        </p>
        <p>Follow this guide if you have:</p>
        <ul>
          <li>&mdash; 3 years of work experience</li>
          <li>&mdash; Bachelor's degree</li>
          <li>&mdash; B2+ level of English</li>
          <li>...</li>
        </ul>
      </div>
      <div className="descriptionContent__footer">
        <span>By Alex Cross</span>
        <span>09/15/22</span>
      </div>
    </div>
  );
};

const TimelineContent = () => {
  return (
    <div className="timelineContent">
      <div style={{ width: "50%" }}>
        <div className="timelineContent__image">
          <Image src={timeline} priority />
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <div className="timelineContent__text">
          <p>English language test</p>
          <p>
            There are two approved language tests: CELPIP and IELTS. I suggest
            taking IELTS because I found it way easier. You need to take IELTS
            General since IELTS Academic is not accepted by the IRCC.
          </p>
        </div>
      </div>
    </div>
  );
};

const StatsContent = () => {
  return (
    <div className="statsContent">
      <Image src={stats} priority />
    </div>
  );
};

const guideTabs = ["Description", "Timeline", "Stats"];
const backgroundCircleMapping = [
  {
    tabName: "Description",
    className: "backgroundCirclePink",
    component: () => <DescriptionContent />,
  },
  {
    tabName: "Timeline",
    className: "backgroundCirclePurple",
    component: () => <TimelineContent />,
  },
  {
    tabName: "Stats",
    className: "backgroundCircleTeal",
    component: () => <StatsContent />,
  },
];

const Home: NextPage = () => {
  const [activeGuideTab, setActiveGuideTab] = useState(guideTabs[1]);

  const handleGuideSwitch: MouseEventHandler = (event) => {
    const input = event.target as HTMLDivElement;
    if (!guideTabs.includes(input.innerText)) return;
    setActiveGuideTab(input.innerText);
  };

  const circleClassname = backgroundCircleMapping.find(
    (x) => x.tabName === activeGuideTab
  )?.className;

  const guideComponent = backgroundCircleMapping.find(
    (x) => x.tabName === activeGuideTab
  )?.component;

  return (
    <>
      <Head>
        <title>Flumq</title>
        <meta name="description" content="Your guide to moving abroad" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* START PAGE */}

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
          <Image src={qrCode} />
        </div>
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
          <div className="destinationsImageContainer">
            <Image src={destinations} />
          </div>
          <div className="destinations"></div>
        </div>
        <div className="destinationsHeroText">
          <span className="findText">Find your</span>
          <span className="destinationText">Destination</span>
          <span>
            <span className="highlightDark">Know your options</span>
            <p className="explainText">
              Search countries by filters, compare and make your choice.
            </p>
          </span>
        </div>
        <div className="whiteBubbleBottom"></div>
      </section>

      {/* GUIDES PAGE */}

      <section className="page guides">
        <span className="accessText">Access</span>
        <span className="guidesText">Step-by-Step Guides</span>
        <div className="guidesContainer">
          <div className="btn-group" onClick={handleGuideSwitch}>
            {guideTabs.map((tabName) => (
              <button
                key={tabName}
                className={tabName === activeGuideTab ? "btn-active" : ""}
              >
                {tabName}
              </button>
            ))}
          </div>
          <div className="iphoneFrame">
            {guideComponent && guideComponent()}
          </div>
        </div>
        <span className="description">
          <span className="highlightLight">No more uncertainties</span>
          <p className="explainTextWhite">
            Choose a path that shows what to do next, track progress, share
            timeline, or create your own guide.
          </p>
        </span>
        <div className="backgroundCircleContainer">
          <div className={circleClassname} />
          <div className={circleClassname} />
        </div>
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
        <div className="whiteBubbleBoth" />
      </section>

      {/* DOWNLOAD PAGE */}

      <section className="page download">
        <div className="downloadGradient"></div>
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
        <div className="curvedLine" />
        <div className="curvedOverlap" />
        <div className="footerQRContainer">
          <Image src={qrCode} />
          <span>Scan to download</span>
        </div>
      </section>
    </>
  );
};

export default Home;
