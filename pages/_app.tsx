import type { AppProps } from "next/app";

import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";

import screenshot from "../public/og-image.png";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* This is a hack to make Google doc load a nice pic */}
      <div style={{ visibility: "hidden", height: 0 }}>
        <Image src={screenshot} />
      </div>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
