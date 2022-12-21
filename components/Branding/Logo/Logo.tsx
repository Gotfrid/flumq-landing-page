import { FC } from "react";
import Image from "next/image";

import logoText from "../../../public/logo/logo-text.svg";
import logoSymbol from "../../../public/logo/logo-symbol.svg";

const srcDict = {
  text: logoText,
  symbol: logoSymbol,
} as const;

interface LogoProps {
  variant: keyof typeof srcDict;
}
export const Logo: FC<LogoProps> = ({ variant }) => {
  return <Image src={srcDict[variant]} alt="Flumq logo" height="50px" />;
};
