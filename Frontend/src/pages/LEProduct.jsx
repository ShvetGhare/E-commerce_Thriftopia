import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Star from "/star.png";
import Navbar from "../components/Navbar";
import RelatedProducts from "../components/RelatedProducts";

const LEProduct = () => {
  const { products, currency, AddtoCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [ProductData, setProductData] = useState(false);
  const [Image, SetImage] = useState("");

  const fetchdata = () => {
    // Find the product by productId
    const data = products.find((item) => item._id == productId);
    setProductData(data);
    SetImage(data.image);
  };

  useEffect(() => {
    fetchdata();
  }, [productId, products]);

  return ProductData ? (
    <>
      <Navbar />
      <div className="container px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Product Images */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              <button className={`w-20 h-20 border rounded-lg overflow-hidden`}>
                <img src={Image} alt="" />
              </button>
            </div>
            {/* Main Image */}
            <div
              className="flex-1 sticky top-0 z-10 hover:scale-110 hover:translate-x-10 transition duration-500"
              style={{ top: "10px" }}
            >
              <img src={Image} className="rounded-lg" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-6 pl-10">
            <h1 className="font-medium text-3xl mt-2 ">{ProductData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={Star} alt="" className="w-3.5" />
              <img src={Star} alt="" className="w-3.5" />
              <img src={Star} alt="" className="w-3.5" />
              <img src={Star} alt="" className="w-3.5" />
              <img src={Star} alt="" className="w-3.5" />
              <div className="flex items-center gap-2">
                <p className="text-gray-600 pl-2">(122)</p>
              </div>
            </div>
            <p className=" text-3xl font-semibold">
              {currency} {ProductData.price}
            </p>
            <p className="text-xl">
              EMI: {currency} {ProductData.emi_option} Vaild upto 24 months!{" "}
            </p>
            <button
              onClick={() => AddtoCart(ProductData._id)} // Pass the product ID here
              className="bg-black w-40 text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              ADD TO CART
            </button>
            <hr />
            <div className="text-sm text-gray-500 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash on Delivery is Available with this product.</p>
              <p>Easy exchange and return policy within 7 days.</p>
            </div>
          </div>
        </div>
        {/* Description and review sections */}
        <div className="mt-20 mx-24">
          <div className="flex ">
            <b className="border px-5 py-3 text-sm">DESCRIPTION</b>
            <b className="border px-5 py-3 text-sm">REVIEWS (122)</b>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>{ProductData.description}</p>
            {/* <p></p> */}
          </div>
          {/* display similar products */}
        </div>
      </div>
      <div className="w-full">
        <RelatedProducts
          category={ProductData.category}
          subcategory={ProductData.subcategory}
          condition={ProductData.condition}
          rarity_level={ProductData.rarity_level}
        />
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default LEProduct;
