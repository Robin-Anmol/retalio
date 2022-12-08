import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components";
import { FcGoogle } from "react-icons/fc";
import { TextField } from "@mui/material";
const Signup = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-2  text-3xl font-sanspro font-medium  text-center">
            Welcome to Airbnb
          </h1>
          <h1 className="mb-4 text-2xl font-sanspro font-medium text-center">
            Sign up
          </h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <CustomButton
            BtnText="Create Account"
            className={
              "bg-primary-500 mt-2 py-2 text-white hover:bg-primary-600 hover:text-white w-full "
            }
          />

          <CustomButton
            StartIcon={<FcGoogle />}
            BtnText="Sign In with  Google"
            className={
              "bg-black mt-4 py-2 text-white hover:bg-white hover:text-black w-full "
            }
          />
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <Link
              to="/"
              className="no-underline border-b border-redAccent-500 text-gray-500 "
            >
              {" "}
              Terms of Service and
            </Link>
            <Link
              to="/"
              className="no-underline ml-4  border-b text-gray-500 border-redAccent-500 text-grey-dark"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link to="/login" className=" ml-4   text-primary-500  ">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
