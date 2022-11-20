import Image from "next/image";
import classNames from "classnames";

import community3x from "../public/assets/community3x.png";
import usercard1 from "../public/assets/user-cards/card1.png";
import usercard2 from "../public/assets/user-cards/card2.png";
import usercard3 from "../public/assets/user-cards/card3.png";
import usercard4 from "../public/assets/user-cards/card4.png";

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
          <div className={styles.main}>
            <Image src={community3x} layout="fill" objectFit="contain" />
          </div>
          <div className={styles.usercard1}>
            <Image src={usercard1} />
          </div>
          <div className={styles.usercard2}>
            <Image src={usercard2} />
          </div>
          <div className={styles.usercard3}>
            <Image src={usercard3} />
          </div>
          <div className={styles.usercard4}>
            <Image src={usercard4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;
