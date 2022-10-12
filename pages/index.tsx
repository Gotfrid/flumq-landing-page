import type { NextPage } from "next";

import CommunityPage from "../components/CommunityPage";
import DestinationsPage from "../components/DestinationsPage";
import DownloadPage from "../components/DownloadPage";
import GuidesPage from "../components/GuidesPage";
import IndexHead from "../components/IndexHead";
import WelcomPage from "../components/WelcomePage";

const Home: NextPage = () => {
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
