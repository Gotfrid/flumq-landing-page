import styles from "../../styles/Widget.module.scss";

const DescriptionContent = () => {
  return (
    <div className={styles.descriptionContent}>
      <h3>Moving to Canada</h3>
      <div className={styles.descriptionContent__textContainer}>
        <p>
          Hello everyone, This guide is for those who want to move permanently
          to Canada. I immigrated in 2022, so I share my real steps with you.
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
