import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  // Get the current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString(); // Format: "2/9/2025, 4:13:27 PM" or similar

  return (
    <>
      <Navbar />
      <div className="border-t ml-20 mr-20 pt-16">
        <div className="text-2xl">
          <Title text1={"MY"} text2={"ORDERS"} />
        </div>
        <div className="">
          {products.slice(1, 4).map((item, index) => {
            return (
              <div
                key={index}
                className="py-4 border-t border-b-0 text-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-6 text-sm">
                  <img src={item.image} alt="" className="w-16 sm:w-20" />
                  <div>
                    <p className="sm:text-base font-medium">{item.name}</p>
                    <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                      <p className="text-lg">
                        Price: {currency} {item.price}
                      </p>
                      <p>Quantity: 1</p>
                    </div>
                    <p className="mt-2">
                      Date:{" "}
                      <span className="text-gray-400">{formattedDate}</span>
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                    <p className="text-sm md:text-base">Ready to ship</p>
                  </div>
                  <button className="border mr-5 px-4 py-2 text-sm font font-medium rounded-sm">
                    Track Order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Orders;
