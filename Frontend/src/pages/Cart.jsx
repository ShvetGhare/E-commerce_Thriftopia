import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import Bin from "/bin.png";
import Navbar from "../components/Navbar";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer.jsx";

const Cart = () => {
  const { currency, CartItems, removeFromCart, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartdata, setCartdata] = useState([]);

  useEffect(() => {
    // Convert CartItems into an array of cartData
    const tempData = Object.entries(CartItems).map(([itemId, item]) => ({
      _id: itemId,
      quantity: item.quantity,
      name: item.name || "Unknown Product",
      image: item.image || "",
      price: item.price || 0,
    }));

    setCartdata(tempData);
  }, [CartItems]);

  // Get the current date and time for display
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString(); // Format: "2/9/2025, 4:13:27 PM"

  return (
    <>
      <Navbar />
      <div className="border-t pt-7">
        <div className="text-2xl mb-3 text-center">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div>
          {cartdata.length === 0 ? (
            <p className="text-gray-500 text-center text-xl">
              Your cart is empty
            </p>
          ) : (
            cartdata.map((item, index) => (
              <div
                key={index}
                className="py-4 border-t border-b-0 text-gray-700 grid-cols-[4fr_0.5fr0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 flex justify-between items-center"
              >
                <div className="flex items-start gap-6">
                  {item.image ? (
                    <img
                      src={item.image}
                      className="w-16 ml-4 sm:w-20"
                      alt={item.name}
                    />
                  ) : (
                    <p>No Image Available</p>
                  )}
                  <div>
                    <p className="text-xl sm:text-2xl font-bold">
                      <b>{item.name}</b>
                    </p>
                    <div className="flex items-center w-90 justify-between">
                      <p className="text-lg font-semibold sm:text-md">
                        Price: {currency} {item.price}
                      </p>

                      <input
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(item._id, Number(e.target.value))
                        }
                        type="number"
                        className="border-1 border-gray-400  w-52 h-10 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 sm:py-2"
                        name=""
                        min={1}
                        defaultValue={item.quantity}
                        id=""
                      />
                    </div>
                  </div>
                </div>
                <img
                  src={Bin}
                  className="w-auto mr-4 cursor-pointer"
                  alt=""
                  onClick={() => removeFromCart(item._id)}
                />
              </div>
            ))
          )}
        </div>
        <hr />

        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end ">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black mr-10 text-white text-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
