import Head from "next/head";
import { Favicon, AppleIcon, AndroidIcon, MicrosoftIcon } from "./Favicon";

const IndexHead = () => {
  return (
    <Head>
      <title>Flumq</title>
      <meta name="description" content="Your guide to moving abroad" />
      <link rel="manifest" href="/manifest.json" />
      <Favicon />
      <AppleIcon />
      <AndroidIcon />
      <MicrosoftIcon />
    </Head>
  );
};

export default IndexHead;
