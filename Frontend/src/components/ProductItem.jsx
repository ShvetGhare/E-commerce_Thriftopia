import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer ">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110  rounded-2xl transition ease-in w-72 h-72"
          src={image}
          alt="no img"
        />
        <p className="pt-3 pb-1 text-xl font-semibold">{name}</p>
        <p className="text-l font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
