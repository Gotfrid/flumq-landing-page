import Image from "next/image";
import classNames from "classnames";

import destinations from "../public/assets/destinations.png";
import searchIcon from "../public/icons/magnifying-glass.svg";
import settingsIcon from "../public/icons/adjustments-vertical.svg";

import styles from "../styles/DestinationsPage.module.scss";

const DestinationsPage = () => {
  return (
    <section className={classNames("page", styles.destinationPage)}>
      <div className={styles.blackBackground} />
      <div className={styles.destinationsContainer}>
        <span className={classNames(styles.iconContainer, styles.searchIcon)}>
          <Image src={searchIcon} />
        </span>
        <span className={classNames(styles.iconContainer, styles.settingsIcon)}>
          <Image src={settingsIcon} />
        </span>
        <div className={styles.destinationsImageContainer}>
          <Image src={destinations} />
        </div>
        <div className={styles.destinations}></div>
      </div>
      <div className={styles.destinationsHeroText}>
        <span className={styles.findText}>Find your</span>
        <span className={styles.destinationText}>Destination</span>
        <span>
          <span className={styles.highlightDark}>Know your options</span>
          <span className={styles.explainText}>
            {" "}
            Search countries by filters, compare and make your choice.
          </span>
        </span>
      </div>
      <div className={styles.whiteBubbleBottom}></div>
    </section>
  );
};

export default DestinationsPage;
