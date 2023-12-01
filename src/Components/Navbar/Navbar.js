import React from "react";
import logo from "../../Images/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <nav className="p-4 shadow-xl justify-between flex bg-sky-100">
        <Link to="/" >
          <img className="h-12 cursor-pointer shadow-xl rounded-full" src={logo} alt="" />
        </Link> 
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-10 px-5 text-2xl">
            <Link to="/">
                <li className=" hover:text-blue-500 duration-300 cursor-pointer">Home</li>
              </Link> 
              <Link to="/about">
                <li className=" hover:text-blue-500 duration-300 cursor-pointer">About</li>
              </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
