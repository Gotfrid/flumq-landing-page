import Image from "next/image";
import { FC } from "react";

import styles from "./SocialIcon.module.scss";

type SocialIconProps = {
  href: string;
  src: any;
  alt: string;
};

export const SocialIcon: FC<SocialIconProps> = ({ href, src, alt }) => {
  return (
    <a href={href} target="_blank" className={styles.socialIcon}>
      <Image src={src} alt={alt} layout="fill" />
    </a>
  );
};
