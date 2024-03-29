import Image from "next/image";

import stats from "../../public/assets/stats3x.png";

import styles from "../../styles/Widget.module.scss";

const StatsContent = ({ visible }: { visible: boolean }) => {
  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    visibility: visible ? "unset" : "hidden",
    height: visible ? "100%" : "0",
  };
  return (
    <div className={styles.statsContent} style={style}>
      <Image src={stats} alt="Screenshot of statistics page in a smartphone app" />
    </div>
  );
};

export default StatsContent;
