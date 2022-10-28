import type { AppProps, NextWebVitalsMetric } from "next/app";

import { Analytics } from "@vercel/analytics/react";
import { event, GoogleAnalytics } from "nextjs-google-analytics";

import "../styles/globals.scss";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const { id, name, label, value } = metric;
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* tag id is sourced from env variable */}
      <GoogleAnalytics />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
