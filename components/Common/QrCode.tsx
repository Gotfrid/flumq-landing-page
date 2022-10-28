import Image from "next/image";
import qrCode from "../../public/assets/qr-code.svg";
import styles from "./QrCode.module.scss";

const QrCode = ({ width }: { width: "5.5em" | "6.5em" }) => {
  return (
    <div className={styles.qrImage} style={{ width }}>
      <div>
        <Image src={qrCode} layout="fill" />
      </div>
    </div>
  );
};

export default QrCode;
