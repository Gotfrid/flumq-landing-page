import Image from "next/image";

import stats from "../../public/assets/stats3x.png";

const StatsContent = () => {
  return (
    <div className="statsContent">
      <Image src={stats} priority />
    </div>
  );
};

export default StatsContent;
