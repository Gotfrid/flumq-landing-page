import Image from "next/image";

import timeline from "../../public/assets/timeline3x.png";

const TimelineContent = () => {
  return (
    <div className="timelineContent">
      <div className="timelineContent__image">
        <Image src={timeline} priority width={183} height={288} />
      </div>
      <div className="timelineContent__text">
        <p>English language test</p>
        <p>
          There are two approved language tests: CELPIP and IELTS. I suggest
          taking IELTS because I found it way easier. You need to take IELTS
          General since IELTS Academic is not accepted by the IRCC.
        </p>
      </div>
    </div>
  );
};

export default TimelineContent;
