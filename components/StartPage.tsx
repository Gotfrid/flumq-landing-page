import styles from "../styles/StartPage.module.css";

const StartPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textLogo}>Logo1</div>
      <div className={styles.imageLogo}>Logo2</div>
      <h1 className={styles.title}>Your guide to moving abroad</h1>
      <p className={styles.subtitle}>
        Choose country, access multiple guides, ask questions and share your
        experience
      </p>
      <div className={styles.integrations}>
        <div>App store</div>
        <div>iPhone</div>
        <div>Google play</div>
      </div>
    </div>
  );
};

export default StartPage;
