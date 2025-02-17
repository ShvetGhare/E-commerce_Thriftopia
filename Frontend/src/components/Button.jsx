import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Button = ({ title }) => {
  return (
    <div className="flex items-start mt-10 justify-center h-auto">
      <div className="relative group">
        <Link
          to="/home"
          className="relative w-54 inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl  transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 rounded-xl bg-white p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

          <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
            <div className="relative z-10 flex items-center space-x-2">
              <span className="transition-all text-l duration-500 group-hover:translate-x-1">
                {title}
              </span>
              <svg
                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fillRclipRule="evenodd"
                ></path>
              </svg>
            </div>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Button;
