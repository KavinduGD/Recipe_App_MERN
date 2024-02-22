import React from "react";
import logo from "../images/logo.png";
function Navbar() {
  return (
    <div>
      <div className="flex px-[10%] justify-between items-center flex-col sm:flex-row ">
        <div className="left ]">
          <div className=" flex items-center gap-2 sm:gap-3">
            <div className="py-[20px] ">
              <img src={logo} alt="logo" className="w-[90px] sm:w-100px] " />
            </div>
            <p
              className="font-semibold text-4xl text-[#3d2d30]  "
              style={{ fontFamily: "Protest Revolution" }}
            >
              Recipe Blog
            </p>
          </div>
        </div>
        <div className="right w-[100%] sm:w-auto">
          <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[50px] w-[100%] px-[100px] ">
            <div className="flex justify-center">Home</div>
            <div className="flex justify-center">Home</div>
            <div className="flex justify-center">Home</div>
            <div className="flex justify-center">Home</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
