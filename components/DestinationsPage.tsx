import Image from "next/image";
import classNames from "classnames";

import { Destinations } from "./Destinations/Destinations";

import searchIcon from "../public/icons/magnifying-glass.svg";
import settingsIcon from "../public/icons/adjustments-vertical.svg";

import styles from "../styles/DestinationsPage.module.scss";

const DestinationsPage = () => {
  return (
    <section className={classNames("page", styles.destinationPage)}>
      <div className={styles.container}>
        <div className={styles.destinations}>
          <Destinations />
          <div className={styles.icons}>
            <div>
              <Image src={searchIcon} />
            </div>
            <div>
              <Image src={settingsIcon} />
            </div>
          </div>
        </div>

        <div className={styles.hero}>
          <h3>Find your</h3>
          <h1>Destination</h1>
          <div className={styles.heroDescription}>
            <span className={styles.highlightDark}>Know your options</span>
            <span>
              {" "}
              Search countries by filters, compare and make your choice.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
