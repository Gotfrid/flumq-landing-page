import { MouseEventHandler, useState } from "react";
import classNames from "classnames";

import Kite from "./Common/Kite";
import DescriptionContent from "./GuidesWidget/DescriptionContent";
import StatsContent from "./GuidesWidget/StatsContent";
import TimelineContent from "./GuidesWidget/TimelineContent";

import styles from "../styles/GuidesPage.module.scss";

const guideTabs = ["Description", "Timeline", "Stats"];
const backgroundCircleMapping = [
  {
    tabName: "Description",
    className: styles.backgroundCirclePink,
  },
  {
    tabName: "Timeline",
    className: styles.backgroundCirclePurple,
  },
  {
    tabName: "Stats",
    className: styles.backgroundCircleTeal,
  },
];

const GuidesPage = () => {
  const [activeGuideTab, setActiveGuideTab] = useState(guideTabs[1]);

  const handleGuideSwitch: MouseEventHandler = (event) => {
    const input = event.target as HTMLDivElement;
    if (!guideTabs.includes(input.innerText)) return;
    setActiveGuideTab(input.innerText);
  };

  const circleClassname = backgroundCircleMapping.find((x) => x.tabName === activeGuideTab)?.className;

  return (
    <section className={classNames("page", styles.guidesPage)}>
      {/* Left block of background kites */}
      <Kite left="15%" top="20%" scale={0.6} />
      <Kite left="6%" top="46%" scale={0.5} />
      <Kite left="14%" top="58%" scale={0.4} />
      <Kite left="18%" top="76%" scale={0.7} />
      <Kite left="8%" top="81%" scale={0.8} />

      {/* Right block of background kites */}
      <Kite left="87%" top="20%" scale={0.6} />
      <Kite left="82%" top="40%" scale={0.3} />
      <Kite left="89%" top="60%" scale={0.5} />
      <Kite left="77%" top="70%" scale={0.8} />
      <Kite left="93%" top="87%" scale={0.6} />

      <h2 className={styles.hero}>
        <div className={styles.preTitle}>Access</div>
        <div className={styles.mainTitle}>Step-by-Step Guides</div>
      </h2>

      <div className={styles.widgetContainer}>
        <div className={styles.btnGroup} onClick={handleGuideSwitch}>
          {guideTabs.map((tabName) => (
            <button key={tabName} className={tabName === activeGuideTab ? styles.btnActive : ""}>
              {tabName}
            </button>
          ))}
        </div>
        <div className={styles.iphoneFrame}>
          <DescriptionContent visible={activeGuideTab == guideTabs[0]} />
          <TimelineContent visible={activeGuideTab == guideTabs[1]} />
          <StatsContent visible={activeGuideTab == guideTabs[2]} />
        </div>

        <div className={styles.backgroundCircleContainer}>
          <div className={classNames(styles.backgroundCircle, circleClassname)} />
          <div className={classNames(styles.backgroundCircle, circleClassname)} />
        </div>
      </div>

      <div className={styles.description}>
        <span className={styles.highlightLight}>No more uncertainties</span>
        <span>
          {" "}
          Choose a path that shows what to do next, track progress, share timeline, or create your own guide.
        </span>
      </div>
    </section>
  );
};

export default GuidesPage;
