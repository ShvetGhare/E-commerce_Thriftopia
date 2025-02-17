import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title.jsx";
import contact from "/contactusimg.png";
import NewsLetter from "../components/NewLetter.jsx";
import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Fade-up animation for this section */}
      <motion.div
        className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28"
        initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly down
        animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in original position
        transition={{ duration: 0.8 }} // Duration of the animation
      >
        <img src={contact} className="w-full md:max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-2xl text-gray-600">Our Store</p>
          <p className="text-gray-500 text-lg">
            54709 Willms Station <br />
            Suite 350, Washington DC{" "}
          </p>
          <p className="text-gray-500 text-lg">
            Tel: 91+ 7249832504 <br />
          </p>{" "}
          <p className="font-semibold text-2xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500 text-lg">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-lg hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </motion.div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Contact;
