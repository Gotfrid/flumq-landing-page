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
    className: "backgroundCirclePink",
    component: () => <DescriptionContent />,
  },
  {
    tabName: "Timeline",
    className: "backgroundCirclePurple",
    component: () => <TimelineContent />,
  },
  {
    tabName: "Stats",
    className: "backgroundCircleTeal",
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
    <section className={classNames("page", styles.guides)}>
      <div className={styles.blackBackground} />
      <span className={styles.accessText}>Access</span>
      <span className={styles.guidesText}>Step-by-Step Guides</span>
      <div className={styles.guidesContainer}>
        <div className={styles.btnGroup} onClick={handleGuideSwitch}>
          {guideTabs.map((tabName) => (
            <button
              key={tabName}
              className={tabName === activeGuideTab ? "btnActive" : ""}
            >
              {tabName}
            </button>
          ))}
        </div>
        <div className={styles.iphoneFrame}>
          {guideComponent && guideComponent()}
        </div>
      </div>
      <span className={styles.description}>
        <span className={styles.highlightLight}>No more uncertainties</span>
        <span className={styles.explainTextWhite}>
          {" "}
          Choose a path that shows what to do next, track progress, share
          timeline, or create your own guide.
        </span>
      </span>
      <div className={styles.backgroundCircleContainer}>
        <div className={circleClassname} />
        <div className={circleClassname} />
      </div>
    </section>
  );
};

export default GuidesPage;
