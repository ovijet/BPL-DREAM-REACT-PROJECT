import React from "react";
import dollar from "../../assets/dollar_1.png";

const Navbar = ({coin}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-14 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="">
          <div className="flex gap-2 font-bold">
            <img src={dollar} alt="" />
            <p className="flex">{coin} coins</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
