import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import us from "../../public/assets/countries/us.png";
import ca from "../../public/assets/countries/ca.png";
import au from "../../public/assets/countries/au.png";
import nz from "../../public/assets/countries/nz.png";
import fr from "../../public/assets/countries/fr.png";
import ge from "../../public/assets/countries/ge.png";

import usFlag from "../../public/assets/countries/flag-us.png";
import caFlag from "../../public/assets/countries/flag-ca.png";
import auFlag from "../../public/assets/countries/flag-au.png";
import nzFlag from "../../public/assets/countries/flag-nz.png";
import frFlag from "../../public/assets/countries/flag-fr.png";
import geFlag from "../../public/assets/countries/flag-ge.png";

import styles from "./DestinationCard.module.scss";

const countryImages = new Map<string, StaticImageData>([
  ["United States", us],
  ["Canada", ca],
  ["Australia", au],
  ["New Zealand", nz],
  ["France", fr],
  ["Germany", ge],
]);

const countryFlags = new Map<string, StaticImageData>([
  ["United States", usFlag],
  ["Canada", caFlag],
  ["Australia", auFlag],
  ["New Zealand", nzFlag],
  ["France", frFlag],
  ["Germany", geFlag],
]);

type Props = {
  country: string;
};

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const transition = { delay: 0.3, duration: 0.5 };

export const DestinationCard: React.FC<Props> = ({ country }) => {
  const countryImage = countryImages.get(country) ?? us;
  const countryFlag = countryFlags.get(country) ?? usFlag;
  return (
    <motion.div
      className={styles.destinationCard}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true }}
      transition={transition}
    >
      <Image src={countryImage} alt="Country photo" />
      <div className={styles.destinationInfo}>
        <Image src={countryFlag} alt="Country flag" width={15} height={10} />
        <span className={styles.countryName}>{country}</span>
      </div>
    </motion.div>
  );
};
