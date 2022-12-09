import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
// import Logo from "../../assets/Logo.png";
import { TbBrandAirbnb } from "react-icons/tb";
import CustomButton from "../Button";
import { MobileNavbar } from "..";
const Navbar = ({ open, setOpen }) => {
  return (
    <header className="sticky  top-0 ">
      <div className="  justify-between  px-6 lg:px-16 py-2 lg:py-4 flex  shadow-lg  w-full  items-center bg-white  ">
        <Link
          to="/"
          className="text-3xl flex items-center  gap-1 font-bold leading-none"
        >
          <TbBrandAirbnb className=" text-3xl lg:text-4xl text-primary-500" />
          <span className="text-3xl text-primary-500">Airbnb</span>
        </Link>

        <div>
          <div className=" self-end lg:hidden  ">
            <button
              className="navbar-burger flex items-center text-primary-500 p-3"
              onClick={() => setOpen(!open)}
            >
              <HiMenuAlt3 className="text-3xl lg:hidden text-primary-500" />
            </button>
          </div>
          <Link
            to="/becomeahost"
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

// {open && (
//   <div
//     className={`absolute ${
//       open ? "left-0 " : "-left-[100%]"
//     }  z-5000 duration-500 h-screen transition ease-in-out`}
//   >
//     <div
//       className="z-5000 fixed inset-0 bg-gray-800 opacity-25"
//       onClick={() => setOpen(!open)}
//     ></div>
//     <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
//       <div className="flex items-center mb-8">
//         <Link className="mr-auto text-3xl flex items-center gap-1 font-bold leading-none">
//           <TbBrandAirbnb className=" text-3xl lg:text-4xl text-primary-500" />
//           <span className="text-3xl text-primary-500">Airbnb</span>
//         </Link>
//         <button className="" onClick={() => setOpen(!open)}>
//           <svg
//             className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M6 18L18 6M6 6l12 12"
//             ></path>
//           </svg>
//         </button>
//       </div>
//       <div>
//         <ul>
//           <li className="mb-1">
//             <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
//               Home
//             </Link>
//           </li>
//           <li className="mb-1">
//             <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
//               About Us
//             </Link>
//           </li>
//           <li className="mb-1">
//             <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
//               Services
//             </Link>
//           </li>
//           <li className="mb-1">
//             <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
//               Pricing
//             </Link>
//           </li>
//           <li className="mb-1">
//             <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="mt-auto">
//         <div className="pt-6">
//           <Link className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl">
//             Sign in
//           </Link>
//           <Link className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl">
//             Sign Up
//           </Link>
//         </div>
//         <p className="my-4 text-xs text-center text-gray-400">
//           <span>Copyright © 2021</span>
//         </p>
//       </div>
//     </nav>
//   </div>
// )}
