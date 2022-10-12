import { MouseEventHandler, useState } from "react";

import DescriptionContent from "./GuidesWidget/DescriptionContent";
import StatsContent from "./GuidesWidget/StatsContent";
import TimelineContent from "./GuidesWidget/TimelineContent";

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
    <section className="page guides">
      <span className="accessText">Access</span>
      <span className="guidesText">Step-by-Step Guides</span>
      <div className="guidesContainer">
        <div className="btn-group" onClick={handleGuideSwitch}>
          {guideTabs.map((tabName) => (
            <button
              key={tabName}
              className={tabName === activeGuideTab ? "btn-active" : ""}
            >
              {tabName}
            </button>
          ))}
        </div>
        <div className="iphoneFrame">{guideComponent && guideComponent()}</div>
      </div>
      <span className="description">
        <span className="highlightLight">No more uncertainties</span>
        <span className="explainTextWhite">
          {" "}
          Choose a path that shows what to do next, track progress, share
          timeline, or create your own guide.
        </span>
      </span>
      <div className="backgroundCircleContainer">
        <div className={circleClassname} />
        <div className={circleClassname} />
      </div>
    </section>
  );
};

export default GuidesPage;
