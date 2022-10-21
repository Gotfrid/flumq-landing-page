import Image from "next/image";
import classNames from "classnames";

import community3x from "../public/assets/community3x.png";

import styles from "../styles/CommunityPage.module.scss";

const CommunityPage = () => {
  return (
    <section className={classNames("page", styles.communityPage)}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h3>Join the</h3>
          <h1>Community</h1>
          <div className={styles.heroDescription}>
            <span className={styles.highlightDark}>You're not alone</span>
            <span>
              {" "}
              Meet new people, join discussions, share your experience, ask
              questions, and more.
            </span>
          </div>
        </div>
        <div className={styles.communityContainer}>
          <Image src={community3x} layout="fill" objectFit="contain" />
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;
