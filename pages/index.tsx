import type { NextPage } from "next";
import { useEffect } from "react";

import IndexHead from "../components/Head/IndexHead";
import CommunityPage from "../components/CommunityPage";
import DestinationsPage from "../components/DestinationsPage";
import DownloadPage from "../components/DownloadPage";
import GuidesPage from "../components/GuidesPage";
import WelcomPage from "../components/WelcomePage";

const Home: NextPage = () => {
  useEffect(() => {
    const images = document.querySelectorAll("img");
    images.forEach((im) => (im.ondragstart = () => false));
  }, []);

  return (
    <>
      <IndexHead />
      <WelcomPage />
      <DestinationsPage />
      <GuidesPage />
      <CommunityPage />
      <DownloadPage />
    </>
  );
};

export default Home;
