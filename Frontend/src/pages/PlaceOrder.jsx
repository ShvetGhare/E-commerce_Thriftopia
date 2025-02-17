import React, { useContext, useState } from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartTotal from "../components/CartTotal";
import Stripe from "/stripe.png";
import Razorpay from "/razorpay.png";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setmethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  return (
    <>
      <Navbar />
      <div className="flex pl-10 flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
        {/* Left side yo! */}
        <div className="flex flex-col gap-4 w-1/2 sm:max-[400px]:">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
            <div className="flex gap-3">
              <input
                placeholder="First Name"
                className="border border-gray-300 rounded py-1.5 px-3.5 w-auto"
                type="text"
              />
              <input
                placeholder="Last Name"
                className="border border-gray-300 rounded py-1.5 px-3.5 w-auto"
                type="text"
              />
            </div>
            <input
              placeholder="Email Address"
              className="border mt-4.5 border-gray-300 rounded py-1.5 px-3.5 w-[40.8rem]"
              type="email"
              required
            />
            <input
              placeholder="Street"
              className="border mt-4.5 border-gray-300 rounded py-1.5 px-3.5 w-[40.8rem]"
              type="text"
              required
            />
            <div className="flex mt-4.5 gap-3">
              <input
                placeholder="City"
                className="border border-gray-300 rounded py-1.5 px-3.5 w-auto"
                type="text"
              />
              <input
                placeholder="State"
                className="border border-gray-300 rounded py-1.5 px-3.5 w-auto"
                type="text"
              />
            </div>
            <div className="flex mt-4.5 gap-3">
              <input
                placeholder="Pincode"
                className="border border-gray-300 rounded py-1.5 px-3.5 w-auto"
                type="text"
              />
              <input
                placeholder="Country"
                className="border border-gray-300 rounded py-1.5 px-3.5 w-auto"
                type="text"
              />
            </div>
            <input
              placeholder="Phone"
              className="border mt-4.5 border-gray-300 rounded py-1.5 px-3.5 w-[40.8rem]"
              type="number"
            />
          </div>
        </div>
        {/* Right side yo */}
        <div className="mt-8 mr-20">
          <div className="mt-8 mr-20 min-w-80">
            <CartTotal />
          </div>
          <div className="mt-7">
            <Title text1={"PAYEMENT"} text2={"METHOD"} />
            {/* Payment method selection yo */}
            <div className="flex gap-3 flex-col lg:flex-row">
              <div
                onClick={() => setmethod("stripe")}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "stripe" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img src={Stripe} className="h-5 mx-4" alt="" />
              </div>
              <div
                onClick={() => setmethod("razorpay")}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "razorpay" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img src={Razorpay} className="h-5 mx-4" alt="" />
              </div>
              <div
                onClick={() => setmethod("cod")}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "cod" ? "bg-green-400" : ""
                  }`}
                ></p>
                <p className="text-gray-500 text-sm font-medium mx-4 mr-5">
                  CASH ON DELIVERY
                </p>{" "}
              </div>
            </div>
            <div className="w-full text-end mt-8">
              <button
                onClick={() => navigate("/orders")}
                className="bg-black text-white px-16 py-3 text-sm"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlaceOrder;
