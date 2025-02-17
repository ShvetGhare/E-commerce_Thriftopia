import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";
import Title from "./Title";

const RelatedProducts = ({
  category,
  subcategory,
  rarity_level,
  condition,
}) => {
  const { products } = useContext(ShopContext);
  const [Related, SetRelated] = useState([]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (products.length > 0) {
      let Productscopy = products.slice();
      Productscopy = products.filter(
        (item) =>
          category === item.category &&
          subcategory === item.subcategory &&
          condition === item.condition &&
          rarity_level === item.rarity_level
      );
      SetRelated(Productscopy);
    }
  }, [category, subcategory, rarity_level, condition, products]);

  return (
    <>
      <div className="w-full text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {Related.slice(0, 5).map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
      <hr className="opacity-0 mt-10 mb-10" />
    </>
  );
};

export default RelatedProducts;
