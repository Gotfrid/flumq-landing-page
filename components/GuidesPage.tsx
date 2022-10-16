import { MouseEventHandler, useState } from "react";
import classNames from "classnames";

import DescriptionContent from "./GuidesWidget/DescriptionContent";
import StatsContent from "./GuidesWidget/StatsContent";
import TimelineContent from "./GuidesWidget/TimelineContent";

import styles from "../styles/GuidesPage.module.scss";

const guideTabs = ["Description", "Timeline", "Stats"];
const backgroundCircleMapping = [
  {
    tabName: "Description",
    className: styles.backgroundCirclePink,
    component: () => <DescriptionContent />,
  },
  {
    tabName: "Timeline",
    className: styles.backgroundCirclePurple,
    component: () => <TimelineContent />,
  },
  {
    tabName: "Stats",
    className: styles.backgroundCircleTeal,
    component: () => <StatsContent />,
  },
];

const GuidesPage = () => {
  const [activeGuideTab, setActiveGuideTab] = useState(guideTabs[1]);

  const handleGuideSwitch: MouseEventHandler = (event) => {
    const input = event.target as HTMLDivElement;
    if (!guideTabs.includes(input.innerText)) return;
    setActiveGuideTab(input.innerText);
  };

  const circleClassname = backgroundCircleMapping.find(
    (x) => x.tabName === activeGuideTab
  )?.className;

  const guideComponent = backgroundCircleMapping.find(
    (x) => x.tabName === activeGuideTab
  )?.component;

  return (
    <section className={classNames("page", styles.guidesPage)}>
      <div className={styles.hero}>
        <h3>Access</h3>
        <h1>Step-by-Step Guides</h1>
      </div>

      <div className={styles.widgetContainer}>
        <div className={styles.btnGroup} onClick={handleGuideSwitch}>
          {guideTabs.map((tabName) => (
            <button
              key={tabName}
              className={tabName === activeGuideTab ? styles.btnActive : ""}
            >
              {tabName}
            </button>
          ))}
        </div>
      </div>

      {/* <div className={styles.guidesContainer}>
        <div className={styles.iphoneFrame}>
          {guideComponent && guideComponent()}
        </div>
      </div> */}

      <div className={styles.description}>
        <span className={styles.highlightLight}>No more uncertainties</span>
        <span>
          {" "}
          Choose a path that shows what to do next, track progress, share
          timeline, or create your own guide.
        </span>
      </div>

      <div className={styles.backgroundCircleContainer}>
        <div className={circleClassname} />
        <div className={circleClassname} />
      </div>
    </section>
  );
};

export default GuidesPage;
