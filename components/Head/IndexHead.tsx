import Head from "next/head";
import { Favicon, AppleIcon, AndroidIcon, MicrosoftIcon } from "./Favicon";

const metaTitle = "Your guide to moving abroad";
const metaDescription = "Choose a country, access multiple guides, ask questions and share your experience.";
const metaUrl = "https://flumq.com";
const metaImage = "https://www.flumq.com/og-image.png";
const metaType = "website";
const metaSiteName = "Flumq";
const metaTwitter = "@FlumqApp";

const MetaOG = () => {
  return (
    <>
      {/* Web preview */}
      <meta property="og:title" content={metaTitle}></meta>
      <meta property="og:description" content={metaDescription}></meta>
      <meta property="og:url" content={metaUrl}></meta>
      <meta property="og:image" content={metaImage}></meta>
      <meta property="og:type" content={metaType} />
      <meta property="og:site_name" content={metaSiteName} />

      {/* Twitter preview */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={metaTwitter} />
    </>
  );
};

const IndexHead = () => {
  return (
    <Head>
      <title>Flumq</title>
      <meta name="Description" content={metaDescription} />
      <link rel="manifest" href="/manifest.json" />
      <MetaOG />
      <Favicon />
      <AppleIcon />
      <AndroidIcon />
      <MicrosoftIcon />
    </Head>
  );
};

export default IndexHead;
