import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Search_png from "/Search.svg";
import X from "/x.svg";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { Search, SetSearch, SetShowSearch, ShowSearch } =
    useContext(ShopContext);
  const [Visible, SetVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      SetVisible(true);
    } else {
      SetVisible(false);
    }
  }, [location]);

  return ShowSearch && Visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4">
        <input
          value={Search}
          onChange={(e) => SetSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img className="w-4" src={Search_png} alt="" />
      </div>
      <img
        src={X}
        className="w-3 inline cursor-pointer"
        onClick={() => SetShowSearch(false)}
        alt=""
      />
    </div>
  ) : null;
};

export default Searchbar;
