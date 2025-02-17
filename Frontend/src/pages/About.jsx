import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import { motion } from "framer-motion"; // Import motion from framer-motion
import NewLetter from "../components/NewLetter";
import about from "/aboutus.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* Fade-up animation on scroll */}
      <div className="my-10 justify-center flex flex-col md:flex-row gap-16">
        <motion.img
          src={about}
          className="w-full md:max-w-[450px]"
          alt=""
          initial={{ opacity: 0 }} // Initial state (invisible)
          animate={{ opacity: 1 }} // Final state (fully visible)
          transition={{ duration: 0.8 }} // Duration of the animation
        />

        <motion.div
          className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600"
          initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly down
          animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in original position
          transition={{ duration: 0.8 }} // Duration of the animation
        >
          <p>
            Welcome to Triftopia – Your ultimate destination for sustainable
            living and one-of-a-kind treasures! At Triftopia, we believe in the
            beauty of second chances and the power of reimagining what’s
            possible. We’re passionate about curating a collection of
            high-quality, pre-loved items that not only tell unique stories but
            also help reduce waste and promote a more sustainable way of living.
            Founded on the principles of eco-consciousness, creativity, and
            community, we offer a wide range of gently used clothing, furniture,
            accessories, and much more – all handpicked to inspire and elevate
            your lifestyle while making a positive impact on the planet.
          </p>
          <p className="text-gray-800 text-2xl">Our Mission</p>
          <p>
            At Triftopia, our mission is to redefine the way we think about
            consumption by making sustainability accessible, stylish, and
            affordable for everyone. We aim to foster a thriving community where
            people can find and share pre-loved treasures, reduce waste, and
            make a positive impact on the environment. By curating high-quality,
            second-hand items and promoting a circular economy, we empower our
            customers to make mindful choices that help preserve the planet for
            future generations. Together, we can create a world where every item
            tells a story and every purchase contributes to a greener, more
            conscious lifestyle.
          </p>
        </motion.div>
      </div>

      <div className="text-xl text-center py-4">
        <Title text1={"WHY CHOOSE"} text2={"US"} />
      </div>

      {/* Fade-up animation for each section */}
      <div className="flex flex-col text-lg md:flex-row mb-20">
        <motion.div
          className="px-10 hover:scale-110 transition-all duration-400 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <b>Sustainable Shopping:</b>
          <p className="text-gray-600">
            Every item you purchase helps reduce waste and supports a circular
            economy, making your choices better for the planet.
          </p>
        </motion.div>

        <motion.div
          className="px-10  hover:scale-110 transition-all duration-400 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <b>Unique Finds:</b>
          <p className="text-gray-600">
            Our curated collection of pre-loved treasures ensures you’ll
            discover something special and one-of-a-kind every time.
          </p>
        </motion.div>

        <motion.div
          className="px-10  hover:scale-110 transition-all duration-400 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <b>Affordable & Stylish:</b>
          <p className="text-gray-600">
            Enjoy high-quality, fashionable items at prices that won’t break the
            bank.
          </p>
        </motion.div>

        <motion.div
          className="px-10  hover:scale-110 transition-all duration-400 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <b>Eco-Conscious Community:</b>
          <p className="text-gray-600">
            Join a like-minded community committed to making sustainable living
            fun, easy, and accessible.
          </p>
        </motion.div>
      </div>

      <NewLetter />
      <Footer />
    </div>
  );
};

export default About;
