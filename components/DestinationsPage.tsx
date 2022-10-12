import Image from "next/image";

import destinations from "../public/assets/destinations.png";
import searchIcon from "../public/icons/magnifying-glass.svg";
import settingsIcon from "../public/icons/adjustments-vertical.svg";

const DestinationsPage = () => {
  return (
    <section className="page destination">
      <div className="blackBackground" />
      <div className="destinationsContainer">
        <span className="iconContainer searchIcon">
          <Image src={searchIcon} />
        </span>
        <span className="iconContainer settingsIcon">
          <Image src={settingsIcon} />
        </span>
        <div className="destinationsImageContainer">
          <Image src={destinations} />
        </div>
        <div className="destinations"></div>
      </div>
      <div className="destinationsHeroText">
        <span className="findText">Find your</span>
        <span className="destinationText">Destination</span>
        <span>
          <span className="highlightDark">Know your options</span>
          <span className="explainText">
            {" "}
            Search countries by filters, compare and make your choice.
          </span>
        </span>
      </div>
      <div className="whiteBubbleBottom"></div>
    </section>
  );
};

export default DestinationsPage;
