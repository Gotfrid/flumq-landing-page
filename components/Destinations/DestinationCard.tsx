import Image, { StaticImageData } from "next/image";

import us from "../../public/assets/countries/us.png";
import ca from "../../public/assets/countries/ca.png";
import au from "../../public/assets/countries/au.png";
import nz from "../../public/assets/countries/nz.png";
import fr from "../../public/assets/countries/fr.png";
import ge from "../../public/assets/countries/ge.png";

import usFlag from "../../public/assets/countries/flag-us.png";
import caFlag from "../../public/assets/countries/flag-ca.png";
import auFlag from "../../public/assets/countries/flag-au.png";
import nzFlag from "../../public/assets/countries/flag-nz.png";
import frFlag from "../../public/assets/countries/flag-fr.png";
import geFlag from "../../public/assets/countries/flag-ge.png";

const countryImages = new Map<string, StaticImageData>([
  ["United States", us],
  ["Canada", ca],
  ["Australia", au],
  ["New Zealand", nz],
  ["France", fr],
  ["Germany", ge],
]);

const countryFlags = new Map<string, StaticImageData>([
  ["United States", usFlag],
  ["Canada", caFlag],
  ["Australia", auFlag],
  ["New Zealand", nzFlag],
  ["France", frFlag],
  ["Germany", geFlag],
]);

type Props = {
  country: string;
};

export const DestinationCard: React.FC<Props> = ({ country }) => {
  const countryImage = countryImages.get(country) ?? us;
  const countryFlag = countryFlags.get(country) ?? usFlag;
  return (
    <div style={{ position: "relative", width: "10em" }}>
      <Image src={countryImage} />
      <div
        style={{
          padding: "0.6em 1.2em",
          position: "absolute",
          bottom: "-1em",
          right: "-1em",
          letterSpacing: "-0.02em",
          fontWeight: 600,
          color: "#454267",
          borderRadius: "2em",
          background: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0px 8px 64px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(4px)",
          whiteSpace: "nowrap",
        }}
      >
        <Image src={countryFlag} width={15} height={10} />
        <span
          style={{
            marginLeft: "0.3em",
            boxShadow: "0 0.5em 4em 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          {country}
        </span>
      </div>
    </div>
  );
};
