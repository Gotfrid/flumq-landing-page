import { DestinationCard } from "./DestinationCard";

import styles from "./Destinations.module.scss";

const countries = ["United States", "Canada", "New Zealand", "Australia", "France", "Germany"];

export const Destinations = () => {
  return (
    <div className={styles.cardsContainer}>
      {countries.map(country => <DestinationCard key={country} country={country} />)}
    </div>
  )
};
