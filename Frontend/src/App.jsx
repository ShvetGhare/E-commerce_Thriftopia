import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LimitedCollection from "./pages/LimitedCollection";
import AntiqueCollection from "./pages/AntiqueCollection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import LimitedAccess from "./pages/LimitedAccess";
import AntiqueAccess from "./pages/AntiqueAccess";
import Onopen from "./pages/Onopen";
import Cart from "./pages/Cart";
import LEProduct from "./pages/LEProduct";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";

function App() {
  return (
    <>
      {/* // <div className="px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]"> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Onopen />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/limited-access/limited-collection"
          element={<LimitedCollection />}
        />
        <Route
          path="/antique-access/antique-collection"
          element={<AntiqueCollection />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<LEProduct />} />
        <Route path="/limited-access" element={<LimitedAccess />} />
        <Route path="/antique-access" element={<AntiqueAccess />} />
      </Routes>
    </>
  );
}

export default App;
