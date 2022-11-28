import Image from "next/image";
import { CSSProperties } from "react";

import kite from "../../public/assets/kite.png";

type KiteProps = {
  top: string;
  left: string;
  scale: number;
};

const Kite = ({ top, left, scale }: KiteProps) => {
  const style: CSSProperties = {
    position: "absolute",
    zIndex: 1,
    top: top,
    left: left,
    transform: `scale(${scale})`,
  };
  return (
    <div className="kite" style={style}>
      <Image src={kite} alt="Small kite image" />
    </div>
  );
};

export default Kite;
