import { NavLink, Link } from "react-router-dom";
import Search from "/Search.svg";
import Person from "/person.svg";
import user from "/user.png";
import Menu from "/menu.svg";
import Cart from "/shopping-cart.svg";
import Logo from "/Logo.png";
import Searchbar from "./Searchbar";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [Visible, SetVisible] = useState(false);

  const { SetShowSearch, GetcartCount } = useContext(ShopContext);
  return (
    <>
      <div className="flex items-center justify-center py-5 font-bold">
        <NavLink to="/" className="hidden sm:flex gap-15 text-grey-700">
          <img className="h-15 w-auto" src={Logo} alt="" />
        </NavLink>
        <ul className="hidden sm:flex gap-15 font-light text-[17px] text-grey-700 ml-120">
          <NavLink to="/home" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/limited-access"
            className="flex flex-col items-center gap-1"
          >
            <p>Limited-Access</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/antique-access"
            className="flex flex-col items-center gap-1"
          >
            <p>Antique-Access</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img
            onClick={() => SetShowSearch(true)}
            src={Search}
            className="w-5 ml-10 cursor-pointer"
            alt=""
          />
          <div className="group relative">
            <Link to="/login">
              <img src={user} className="w-5 ml-2 cursor-pointer" alt="" />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 pl-10">
              <div className="flex flex-col gap-2 py-5 px-5 w-40 bg-slate-100 bg-gray-400 rounded-2xl">
                <p className="cursor-pointer rounded hover:bg-gray-400 p-1 transition 200ms hover:text-black">
                  My profile
                </p>
                <hr className="w-auto border-none h-[0.9px] bg-gray-700 " />
                <p className="cursor-pointer rounded hover:bg-gray-400 p-1 transition 200ms hover:text-black">
                  Orders
                </p>
                <hr className="w-auto border-none h-[1px] bg-gray-700 " />
                <p className="cursor-pointer rounded hover:bg-gray-400 p-1 transition 200ms hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative w-5">
            <img src={Cart} alt="" />
            {/* Fix the display of the cart count by calling GetcartCount() */}
            <p className="absolute left-[17px] bottom-[19px] w-3 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
              {GetcartCount()} {/* Call GetcartCount() as a function */}
            </p>
          </Link>
        </div>
      </div>
      <Searchbar />
    </>
  );
};

export default Navbar;
