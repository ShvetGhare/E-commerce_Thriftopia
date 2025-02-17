import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestProducts = () => {
  const { products } = useContext(ShopContext);
  const [BestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const BestProduct = products.filter((item) => item.bestseller);
    setBestSeller(BestProduct.slice(0, 5));
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
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          "Discover the finest handpicked treasures—our best collection sellers,
          where rarity meets excellence!"
        </p>
      </div>

      {/* Grid for Best Sellers */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {BestSeller.map((item, index) => (
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
  );
};

export default BestProducts;
