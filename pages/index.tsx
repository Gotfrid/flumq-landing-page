import type { NextPage } from "next";
import Head from "next/head";

import LandingTitle from "../components/LandingTitle";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flumq</title>
        <meta name="description" content="Your guide to moving abroad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingTitle />
      </main>
    </div>
  );
};

export default Home;
