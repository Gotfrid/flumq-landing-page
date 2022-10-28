import Image from "next/image";
import qrCode from "../../public/assets/qr-code.svg";
import styles from "./QrCode.module.scss";

const QrCode = () => {
  return (
    <div className={styles.qrImage}>
      <div>
        <Image src={qrCode} layout="fill" />
      </div>
    </div>
  );
};

export default QrCode;
