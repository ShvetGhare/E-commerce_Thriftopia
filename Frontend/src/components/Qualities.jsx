import React from "react";
import "../Onopen.css";
import Title from "./Title";

const Qualities = () => {
  return (
    <div className="w-full h-auto mt-10">
      <div className="my-10">
        <div className="text-center py-8 text-5xl">
          <Title text1={"WHY"} text2={"CHOOSE TRITOPIA"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600"></p>
        </div>
        <div className="w-full h-96  flex justify-center items-center">
          <ul className="w-full mb-15 grid grid-cols-3 gap-5 relative top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <li className="fade-out p-20 text-4xl pl-25 w-[95%] ml-5 h-80 rounded-3xl">
              Curated Rare Items
            </li>
            <li className="fade-out p-20 text-4xl pl-25 w-[95%] h-80 rounded-3xl">
              Transparent Pricing
            </li>
            <li className="fade-out p-20 text-4xl pl-25 w-[95%] h-80 rounded-3xl">
              Exclusive Access
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
