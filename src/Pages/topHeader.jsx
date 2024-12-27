import React from "react";
import trophy from "../assets/trophy.png";

const TopHeader = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#3f5efb] to-[#c5fc46] px-24 py-4 flex items-center justify-around flex-wrap text-white">
        <div className="flex items-center gap-4">
          <img src={trophy} alt="Trophy" className="text-2xl text-[#00ffc8] w-4" />
          <span className="text-md font-semibold text-black">LATEST: TentWood  South India's Best International Holiday Brand!</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
