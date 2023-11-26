import React from "react";
import logo from "../../Images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="p-4 shadow-lg justify-between flex">
        <img className="h-12 cursor-pointer" src={logo} alt="" />
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-10 px-5 text-2xl">
            <li className=" hover:text-blue-500 duration-300 cursor-pointer">Home</li>
            <li className=" hover:text-blue-500 duration-300 cursor-pointer">About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
