import Image from "next/image";
import classNames from "classnames";
import { motion } from "framer-motion";

import { Destinations } from "./Destinations/Destinations";

import searchIcon from "../public/icons/magnifying-glass.svg";
import settingsIcon from "../public/icons/adjustments-vertical.svg";

import styles from "../styles/DestinationsPage.module.scss";
import { HighlightTag } from "./Typography/HighlightTag";
import { PagePreTitle } from "./Typography/PagePreTitle";
import { PageTitle } from "./Typography/PageTitle";

const initial = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };
const transition = {
  delay: 0.3,
  duration: 0.2,
  type: "spring",
  stiffness: 100,
};

const DestinationsPage = () => {
  return (
    <section className={classNames("page", styles.destinationPage)}>
      <div className={styles.container}>
        <div className={styles.destinations}>
          <Destinations />
          <div className={styles.icons}>
            <div>
              <Image src={searchIcon} alt="Search icon" />
            </div>
            <div>
              <Image src={settingsIcon} alt="Settings icon" />
            </div>
          </div>
        </div>

        <h2 className={styles.hero}>
          <PagePreTitle text="Find your" variant="dark" />
          <PageTitle text="Destination" />
          <div className={styles.heroDescription}>
            <HighlightTag variant="dark">Know your options</HighlightTag>
            <span> Search countries by filters, compare and make your choice.</span>
          </div>
        </h2>
      </div>
    </section>
  );
};

export default DestinationsPage;
