import Image from "next/image";

import community3x from "../public/assets/community3x.png";

const CommunityPage = () => {
  return (
    <section className="page community">
      <div className="communityHeroText">
        <span className="joinText">Join the</span>
        <span className="communityText">Community</span>
        <span>
          <span className="highlightDark">You're not alone</span>
          <span className="explainText">
            {" "}
            Meet new people, join discussions, share your experience, ask
            questions, and more.
          </span>
        </span>
      </div>
      <div className="communityContainer">
        <Image src={community3x} layout="fill" objectFit="contain" />
      </div>
      <div className="whiteBubbleBoth" />
      <div className="communityGradient" />
    </section>
  );
};

export default CommunityPage;
