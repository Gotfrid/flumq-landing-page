import Image from "next/image";

import stats from "../../public/assets/stats3x.png";

import styles from "../../styles/Widget.module.scss";

const StatsContent = () => {
  return (
    <div className={styles.statsContent}>
      <Image src={stats} priority />
    </div>
  );
};

export default StatsContent;
