/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  sassOptions: {
    prependData: `@import "./styles/variables.scss";`,
  },
};

module.exports = nextConfig;
