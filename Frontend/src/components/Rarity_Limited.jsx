import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import TrueFocus from "../components/TrueFocus.jsx";
import { Link } from "react-router-dom";

const Rarity = () => {
  const { products } = useContext(ShopContext);

  const [Common, SetCommon] = useState([]);
  const [Rare, SetRare] = useState([]);
  const [UltraRare, SetUltraRare] = useState([]);

  useEffect(() => {
    const Limited_Common = products.filter(
      (item) =>
        item.category === "Limited-Edition" && item.rarity_level === "Common"
    );
    SetCommon(Limited_Common.slice(0, 5));
  }, [products]);

  useEffect(() => {
    const Limited_Rare = products.filter(
      (item) =>
        item.category === "Limited-Edition" && item.rarity_level === "Rare"
    );
    SetRare(Limited_Rare.slice(0, 5));
  }, [products]);

  useEffect(() => {
    const Limited_Ultra_Rare = products.filter(
      (item) =>
        item.category === "Limited-Edition" &&
        item.rarity_level === "Ultra-Rare"
    );
    SetUltraRare(Limited_Ultra_Rare.slice(0, 5));
  }, [products]);

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="mt-10"></div>
      <TrueFocus
        sentence="LIMITED ACCESS"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

      <div className="my-10">
        <div className="text-center flex justify-around items-center text-4xl py-8">
          <Title text1={"RARITY:"} text2={"COMMON"} />
          <Link
            to="/limited-access/limited-collection"
            className="w-40 text-xs sm:text-sm md:text-base text-gray-600"
          >
            DIVE IN
          </Link>
        </div>

        {/* Grid for Best Sellers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {Common.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible" // Animation triggers when scrolled into view
              viewport={{ once: true, amount: 0.2 }} // Ensures animation plays once when 20% visible
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* rare */}
      <div className="mt-10">
        <div className="text-center flex justify-around items-center text-4xl py-8">
          <Title text1={"RARITY:"} text2={"RARE"} />
          <Link
            to="/limited-access/limited-collection"
            className="w-40 text-xs sm:text-sm md:text-base text-gray-600"
          >
            DIVE IN
          </Link>
        </div>

        {/* Grid for Best Sellers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {Rare.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible" // Animation triggers when scrolled into view
              viewport={{ once: true, amount: 0.2 }} // Ensures animation plays once when 20% visible
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* ultra rare */}
      <div className="mt-10">
        <div className="text-center flex justify-around items-center text-4xl py-8">
          <Title text1={"RARITY:"} text2={"ULTRA-RARE"} />
          <Link
            to="/limited-access/limited-collection"
            className="w-40 text-xs sm:text-sm md:text-base text-gray-600"
          >
            DIVE IN
          </Link>
        </div>

        {/* Grid for Best Sellers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {UltraRare.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible" // Animation triggers when scrolled into view
              viewport={{ once: true, amount: 0.2 }} // Ensures animation plays once when 20% visible
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rarity;
