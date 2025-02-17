import React from "react";
import HeroPic from "/Hero-pic.png";

const Hero = () => {
  return (
    <div className="flex w-4/5 flex-col ml-45 border-2 sm:flex-row border-gray-400">
      {/* Hero Left */}
      <div className=" sm:w-1/2 flex items-center justify-center py10 sm:py-0  border-gray-100">
        <div className="text-[#414141] ">
          <div className="flex items-center gap-2 ">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-7xl sm:py-3 leading-relaxed">Latest Arrivals</h1>
          <div className="flex items-center gap-2 ">
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1.9px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* hERO RIGHT SIDE */}
      <img src={HeroPic} className="w-full sm:w-1/2" alt="" />
    </div>
  );
};

export default Hero;
