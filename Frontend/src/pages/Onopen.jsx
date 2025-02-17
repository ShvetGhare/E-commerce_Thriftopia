// import React, { useEffect, useState } from "react";
import "../Onopen.css";
import TrueFocus from "../components/TrueFocus";
import Button from "../components/Button";
import Image from "/Antique-Limited.jpg";
import SplitText from "../components/SplitText";

const Onopen = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="fixed w-full h-full bg-black">
      <div className="relative-img bg-black">
        <img src={Image} className="Img" alt="" />
        <div className="absolute-img w-full mt-28 h-96 items-center justify-center">
          <div className="text-center">
            <h1
              className={`text-8xl mb-15 transition-all duration-1000 ease-in-out`}
            >
              EXPLORE THE WORLD OF
            </h1>

            <SplitText
              text="TRIFTOPIA"
              className="text-8xl text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <hr className="mt-5 text-transparent mb-5" />
            <TrueFocus
              sentence="EXCLUSIVELY VINTAGE"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
          <div className="fade-in">
            <Button title="EXPLORE NOW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onopen;
