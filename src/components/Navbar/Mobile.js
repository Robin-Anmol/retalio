import React from "react";
import { IoMdClose } from "react-icons/io";
import { TbBrandAirbnb } from "react-icons/tb";
import { Link } from "react-router-dom";
const Mobile = ({ setOpen, open }) => {
  return (
    <div
      className={`absolute ${
        open ? "left-0" : "-left-[100%]"
      }   z-50 duration-500 lg:hidden transition ease-in-out`}
    >
      <div
        className=" fixed inset-0 bg-gray-800 opacity-25"
        onClick={() => setOpen(!open)}
      ></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <Link className="mr-auto text-3xl flex items-center gap-1 font-bold leading-none">
            <TbBrandAirbnb className=" text-3xl lg:text-4xl text-primary-500" />
            <span className="text-3xl text-primary-500">Airbnb</span>
          </Link>
          <button className="" onClick={() => setOpen(!open)}>
            <IoMdClose className="text-3xl" />
          </button>
        </div>
        <div>
          <ul>
            <li className="">
              <Link
                to="/becomeahost"
                className="block p-4 text-sm font-semibold capitalize text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
              >
                Become a host
              </Link>
            </li>
            <li className="">
              <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                About Us
              </Link>
            </li>
            <li className="">
              <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                Services
              </Link>
            </li>

            <li className="">
              <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <Link
              to="login"
              className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-primary-500 hover:bg-primary-600 rounded-xl"
            >
              Sign Up
            </Link>
          </div>
          <p className="my-4 text-xs text-center text-gray-400">
            <span>Copyright © 2021</span>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Mobile;
