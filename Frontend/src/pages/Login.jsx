import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const [currentState, SetCurrentState] = useState("Sign Up");

  const HandleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={HandleSubmit}
        className="flex flex-col items-center w-[90%] pb-30 sm:max-w-96 m-auto gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-3 py-2 border border-gray-800"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-3 py-2 border border-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-3 py-2 border border-gray-800"
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot Password?</p>
          {currentState === "Login" ? (
            <p
              className="cursor-pointer"
              onClick={() => SetCurrentState("Sign Up")}
            >
              Login Here
            </p>
          ) : (
            <p
              className="cursor-pointer"
              onClick={() => SetCurrentState("Login")}
            >
              Create Account
            </p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">
          {currentState === "Sign Up" ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Login;
