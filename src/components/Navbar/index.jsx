import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
// import Logo from "../../assets/Logo.png";
import { TbBrandAirbnb } from "react-icons/tb";
import CustomButton from "../Button";
import { MobileNavbar } from "..";
const Navbar = ({ open, setOpen }) => {
  return (
    <header className="sticky z-50  top-0 ">
      <div className="  justify-between  px-6 lg:px-16 py-2 lg:py-4 flex  shadow-sm  w-full  items-center bg-white  ">
        <Link
          to="/"
          className="text-3xl flex items-center  gap-1 font-bold leading-none"
        >
          <TbBrandAirbnb className=" text-3xl lg:text-4xl text-primary-500" />
          <span className="text-3xl text-primary-500">Retalio</span>
        </Link>

        <div>
          <div className=" self-end lg:hidden">
            <button
              className="navbar-burger flex items-center text-primary-500 p-3"
              onClick={() => setOpen(!open)}
            >
              <HiMenuAlt3 className="text-3xl lg:hidden text-primary-500" />
            </button>
          </div>
          <Link
            to="/becomeahost/details"
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          >
            Become a host
          </Link>
          <Link
            to="login"
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="hidden lg:inline-block py-2 px-6 bg-primary-500 hover:bg-primary-600 text-sm text-white font-bold rounded-xl transition duration-200"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
