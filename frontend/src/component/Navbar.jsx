import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const activeStyle = "flex justify-center border-b-[3px] px-2 border-red-500";
const inactiveStyle = "flex justify-center";

function Navbar() {
  return (
    <div>
      <div className="flex  justify-between items-center flex-col sm:flex-row border-b-[1px]  pb-[5px] gap-[10px] sm:gap-[0]">
        <div className="left w-full sm:w-auto flex justify-center sm:px-[10%] border-b-2 sm:border-b-0 border-b-[#242020]">
          <div className=" flex items-center gap-2 sm:gap-3">
            <div className="pt-[5px]  ">
              <img src={logo} alt="logo" className="w-[90px] sm:w-100px] " />
            </div>
            <p
              className="font-semibold text-4xl text-[#3d2d30] "
              style={{ fontFamily: "Protest Revolution" }}
            >
              Recipe Blog
            </p>
          </div>
        </div>
        <div className="right w-[100%] sm:w-auto px-[10%]">
          <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[50px] w-[100%] px-[20%] sm:px-[0] font-crimsonPro text-[18px] ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Add Recipe
            </NavLink>
            <NavLink
              to="/manage"
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Manage
            </NavLink>

            {/* <div className="flex justify-center">Add Recipe</div>
            <div className="flex justify-center">Manage</div>
            <div className="flex justify-center">Refresh</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
