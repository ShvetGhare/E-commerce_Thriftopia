import { createContext, useEffect, useState } from "react";
import products from "../data/antique_limited_items.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [Search, SetSearch] = useState("");
  const [ShowSearch, SetShowSearch] = useState(false);
  const [CartItems, SetCartItems] = useState({});
  const navigate = useNavigate();

  // Add item to cart function
  const AddtoCart = (itemId) => {
    if (!itemId) return;

    let cartData = structuredClone(CartItems);
    const product = products.find((p) => p._id === itemId);

    if (!product) return;
    if (cartData[itemId]) {
      cartData[itemId].quantity += 1;
    } else {
      cartData[itemId] = {
        quantity: 1,
        price: product.price,
        name: product.name,
        image: product.image,
      };
    }

    SetCartItems(cartData);
    toast.success("Item added successfully!");
  };

  // Get total count of items in the cart
  const GetcartCount = () => {
    let Totalcount = 0;
    for (const itemId in CartItems) {
      Totalcount += CartItems[itemId].quantity;
    }
    return Totalcount;
  };

  // Calculate the total amount of the cart
  const getcartAmount = () => {
    let totalAmount = 0;
    for (const itemId in CartItems) {
      if (CartItems.hasOwnProperty(itemId)) {
        const iteminfo = products.find(
          (product) => product._id === Number(itemId)
        );

        if (iteminfo) {
          totalAmount += iteminfo.price * CartItems[itemId].quantity;
        }
      }
    }
    return totalAmount;
  };

  // Update item quantity
  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(CartItems);

    if (quantity <= 0) {
      delete cartData[itemId]; // Remove the item from the cart if quantity is 0 or negative
    } else {
      cartData[itemId].quantity = quantity; // Update quantity if valid
    }

    SetCartItems(cartData);
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(CartItems);
    delete cartData[itemId]; // Remove item from the cart object
    SetCartItems(cartData);
    toast.info("Item removed from cart!"); // Show success toast after removal
  };

  useEffect(() => {}, [CartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    Search,
    SetSearch,
    ShowSearch,
    SetShowSearch,
    CartItems,
    AddtoCart,
    GetcartCount,
    updateQuantity,
    removeFromCart,
    getcartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
