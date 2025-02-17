import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestProducts from "../components/BestProducts";
import Advertise from "../components/Advertise";
import Description from "../components/Description";
import Qualities from "../components/Qualities";
import Footer from "../components/Footer";
import OurPolicy from "../components/OurPolicy";
import NewLetter from "../components/NewLetter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LatestCollection />
      <BestProducts />
      <Advertise
        text1={"NEW TO TRIFTOPIA? REGISTER NOW!"}
        text2={"GET A CHANCE TO WIN COUPON/VOUCHER FOR FLAT $10 DISCOUNT!"}
      />
      <Description />
      <Advertise
        text1={"WANT TO BECOME A SELLER AT TRITFOPIA?"}
        text2={"JOIN THE FOLLOWING COMMUNITY FOR MORE"}
      />
      {/* <Qualities /> */}
      <OurPolicy />
      <NewLetter />
      <Footer />
    </div>
  );
};

export default Home;
