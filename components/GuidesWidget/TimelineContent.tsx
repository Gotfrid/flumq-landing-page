import Image from "next/image";

import timeline from "../../public/assets/timeline3x.png";

import styles from "../../styles/Widget.module.scss";

const TimelineContent = ({ visible }: { visible: boolean }) => {
  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    visibility: visible ? "unset" : "hidden",
    height: visible ? "100%" : "0",
  };
  return (
    <div className={styles.timelineContent} style={style}>
      <div className={styles.timelineContent__image}>
        <Image
          src={timeline}
          alt="Screenshot of the timeline page in a smartphone app"
          width={183}
          height={288}
        />
      </div>
      <div className={styles.timelineContent__text}>
        <p>English language test</p>
        <p>
          There are two approved language tests: CELPIP and IELTS. I suggest taking IELTS because I found it
          way easier. You need to take IELTS General since IELTS Academic is not accepted by the IRCC.
        </p>
      </div>
    </div>
  );
};

export default TimelineContent;
