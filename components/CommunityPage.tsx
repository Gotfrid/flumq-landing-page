import Image from "next/image";
import classNames from "classnames";
import { motion } from "framer-motion";

import community3x from "../public/assets/community3x.png";
import usercard1 from "../public/assets/user-cards/card1.png";
import usercard2 from "../public/assets/user-cards/card2.png";
import usercard3 from "../public/assets/user-cards/card3.png";
import usercard4 from "../public/assets/user-cards/card4.png";

import styles from "../styles/CommunityPage.module.scss";

const initial = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };
const transition = {
  delay: 0.3,
  duration: 0.2,
  type: "spring",
  stiffness: 100,
};

const CommunityPage = () => {
  return (
    <section className={classNames("page", styles.communityPage)}>
      <div className={styles.container}>
        <h2 className={styles.hero}>
          <motion.div
            className={styles.preTitle}
            initial={initial}
            whileInView={animate}
            transition={transition}
            viewport={{ once: true }}
          >
            Join the
          </motion.div>
          <motion.div
            className={styles.mainTitle}
            initial={initial}
            whileInView={animate}
            transition={transition}
            viewport={{ once: true }}
          >
            Community
          </motion.div>
          <div className={styles.heroDescription}>
            <span className={styles.highlightDark}>You're not alone</span>
            <span> Meet new people, join discussions, share your experience, ask questions, and more.</span>
          </div>
        </h2>
        <div className={styles.communityContainer}>
          <div className={styles.main}>
            <Image
              src={community3x}
              alt="Screenshot of community page in a smartphone app"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <motion.div
            className={styles.usercard1}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image src={usercard1} alt="User card image in a smartphone app" />
          </motion.div>
          <motion.div
            className={styles.usercard2}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image src={usercard2} alt="User card image in a smartphone app" />
          </motion.div>
          <motion.div
            className={styles.usercard3}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image src={usercard3} alt="User card image in a smartphone app" />
          </motion.div>
          <motion.div
            className={styles.usercard4}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image src={usercard4} alt="User card image in a smartphone app" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;
