import React from "react";
import Logo from "/weblogo.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm"></div>
        <div>
          <img src={Logo} alt="" className="w-32 mb-5" />
          <p className="w-full max-w-100 md:2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor
            perferendis maxime et nemo molestias voluptatum sunt laborum odio.
            Dolor quidem iure officiis velit fugit praesentium nesciunt saepe
            magni consequuntur!
          </p>
        </div>
        <div className="ml-30">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div className="ml-30">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-72498-32504</li>
            <li>ghareshvet@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="w-4/5 ml-35 mt-5 " />
        <p className="py-5 text-l font-semibold text-center">
          Copyright 2025@ Triftopia - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
