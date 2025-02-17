import { useCallback } from "react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title.jsx";
import { motion } from "framer-motion";
import ProductItem from "../components/ProductItem.jsx";

const LimitedCollection = () => {
  const { products, Search, ShowSearch } = useContext(ShopContext);
  const [ShowFilter, SetShowFilter] = useState(false);
  const [Allproducts, SetAllproducts] = useState([]);
  const [Category, SetCategory] = useState([]);
  const [SubCategory, SetSubCategory] = useState([]);
  const [sort_type, setsort_type] = useState("Relevant");

  const toggleCategory = (e) => {
    const value = e.target.value;
    SetCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    SetSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const Limited_products = products.filter(
    (item) => item.category === "Limited-Edition"
  );

  useEffect(() => {
    SetAllproducts(Limited_products);
  }, [products]);

  const ApplyFilter = useCallback(() => {
    let filteredProducts = Limited_products.slice();

    // Filter by search term, even if ShowSearch is false
    if (Search) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(Search.toLowerCase())
      );
    }

    if (Category.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        Category.includes(item.rarity_level)
      );
    }

    if (SubCategory.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        SubCategory.some((sub) => item[sub] === true)
      );
    }

    // Apply sorting after filtering
    switch (sort_type) {
      case "Low-High":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "High-Low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    SetAllproducts(filteredProducts);
  }, [Category, SubCategory, sort_type, Search, products]);

  useEffect(() => {
    ApplyFilter();
  }, [ApplyFilter, ShowSearch, Search]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  return (
    <div>
      <Navbar />
      <div className="ml-35 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-0 ">
        {/* filter options */}
        <div className="min-w-60">
          <p
            onClick={() => SetShowFilter(!ShowFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
          </p>
          <img
            src=""
            className={`h-3 sm:hidden ${ShowFilter ? "rotate-90" : ""}`}
            alt=""
          />
          {/* Category filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              ShowFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-xl font-medium ">CATEGORIES</p>
            <div className="flex flex-col gap-2 font-medium text-l text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Common"
                  onChange={toggleCategory}
                />{" "}
                Common
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Rare"
                  onChange={toggleCategory}
                />{" "}
                Rare
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Ultra-Rare"
                  onChange={toggleCategory}
                />{" "}
                Ultra-Rare
              </p>
            </div>
          </div>
          {/* Sub-Category */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              ShowFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-xl font-medium ">TYPE</p>
            <div className="flex flex-col gap-2 font-medium text-l text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value="bestseller"
                  onChange={toggleSubCategory}
                />{" "}
                Bestseller
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value="Trusted"
                  onChange={toggleSubCategory}
                />{" "}
                Triftopia-Trusted
              </p>
            </div>
          </div>
        </div>

        {/* Right-side */}
        <div className="flex-1">
          <div className="flex justify-between text-balance sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            {/* Product sort */}
            <select
              onChange={(e) => setsort_type(e.target.value)}
              className="border-2 border-gray-300 text-sm px-4 mb-4 py-2 mr-10"
            >
              <option value="Relevant">Sort by: Relevance</option>
              <option value="Low-High">Sort by: Low to High</option>
              <option value="High-Low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Map products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mr-10 gap-y-6">
            {Allproducts.map((item, index) => (
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
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedCollection;
