import Image from "next/image";

import appStoreGray from "../../../public/assets/app-store-gray.svg";
import googlePlayGray from "../../../public/assets/google-play-gray.svg";
import appStoreBlack from "../../../public/assets/app-store-black.svg";
import googlePlayBlack from "../../../public/assets/google-play-black.svg";

import styles from "./StoreButton.module.scss";

const storeSources = {
  apple_gray: appStoreGray,
  apple_black: appStoreBlack,
  google_gray: googlePlayGray,
  google_black: googlePlayBlack,
};

const storeLinks = {
  apple: "https://www.apple.com/app-store/",
  google: "https://play.google.com/store/apps",
};

interface StoreButtonProps {
  store: "apple" | "google";
  color: "gray" | "black";
}

export const StoreButton: React.FC<StoreButtonProps> = ({ store, color }) => {
  const src = storeSources[`${store}_${color}`];
  const href = storeLinks[store];
  const style = { animationDuration: store === "google" ? "0.6s" : "0.5s" };

  return (
    <div className={styles.store} style={style}>
      <a href={href} target="_blank">
        <Image src={src} alt={`${store} store`} layout="fill" />
      </a>
    </div>
  );
};
