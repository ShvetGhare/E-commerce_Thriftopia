import React from "react";
import Button from "./Button";
import Ad from "/Add.jpg";
import "../Advertise.css";

const Advertise = ({ text1, text2 }) => {
  return (
    <div className="h-auto  w-full flex items-center justify-center mt-10 mb-">
      <div className="ola w-4/5 rounded-4xl h-56 text-white">
        <h1 className="m-5 ml-9 text-5xl">{text1}</h1>
        <p className="m-2 ml-10">{text2}</p>
        <div className="flex items-end justify-end mr-10 mb-10">
          <Button title="REGISTER NOW!" />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
