import { SocialIcon } from "../Icon";

import facebookIcon from "../../../public/icons/facebook-icon.svg";
import instagramIcon from "../../../public/icons/instagram-icon.svg";
import youtubeIcon from "../../../public/icons/youtube-icon.svg";
import twitterIcon from "../../../public/icons/twitter-icon.svg";
import linkedinIcon from "../../../public/icons/linkedin-icon.svg";

import styles from "./IconBar.module.scss";

type TSocialDictionary = {
  [key: string]: { href: string; src: any; alt: string };
};

const socialDictionary: TSocialDictionary = {
  facebook: { href: "https://www.facebook.com/flumq", src: facebookIcon, alt: "Facebook icon" },
  instagram: { href: "https://www.instagram.com/flumq.app/", src: instagramIcon, alt: "Instagram icon" },
  youtube: {
    href: "https://www.youtube.com/channel/UCFrC1y1KCd8hz9HA6DN48bQ",
    src: youtubeIcon,
    alt: "Youtube icon",
  },
  twitter: { href: "https://twitter.com/FlumqApp", src: twitterIcon, alt: "Twitter icon" },
  linkedin: { href: "https://www.linkedin.com/company/flumq", src: linkedinIcon, alt: "Linkedin icon" },
};

const iconsToScale = ["youtube"];

export const IconBar = () => {
  const socialNetworks = Object.keys(socialDictionary);
  return (
    <ul className={styles.socialBar}>
      {socialNetworks.map((network) => (
        <li key={network} style={iconsToScale.includes(network) ? { scale: "1.2" } : undefined}>
          <SocialIcon {...socialDictionary[network]} />
        </li>
      ))}
    </ul>
  );
};
