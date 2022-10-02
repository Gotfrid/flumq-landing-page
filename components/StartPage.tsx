import styles from "../styles/StartPage.module.css";
import logoText from "../public/logo-text.svg";
import logoSymbol from "../public/logo-symbol.svg";
import Image from "next/image";

const StartPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textLogo}>
        <Image src={logoText} height="50px" />
      </div>
      <div className={styles.imageLogo}>
        <Image src={logoSymbol} height="50px" />
      </div>
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
