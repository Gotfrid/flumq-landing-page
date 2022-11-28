import styles from "../../styles/Widget.module.scss";

const DescriptionContent = ({ visible }: { visible: boolean }) => {
  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    visibility: visible ? "unset" : "hidden",
    height: visible ? "100%" : "0",
  };
  return (
    <div className={styles.descriptionContent} style={style}>
      <div style={{ fontSize: "1.5em", marginBlock: "0.5em" }}>Moving to Canada</div>
      <div className={styles.descriptionContent__textContainer}>
        <p>
          Hello everyone, This guide is for those who want to move permanently to Canada. I immigrated in
          2022, so I share my real steps with you.
        </p>
        <p>Follow this guide if you have:</p>
        <ul>
          <li>&mdash; 3 years of work experience</li>
          <li>&mdash; Bachelor's degree</li>
          <li>&mdash; B2+ level of English</li>
          <li>...</li>
        </ul>
      </div>
      <div className={styles.descriptionContent__footer}>
        <span>By Alex Cross</span>
        <span>09/15/22</span>
      </div>
    </div>
  );
};

export default DescriptionContent;
