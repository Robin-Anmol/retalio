import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components";

const Login = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-4  text-3xl font-medium  text-center">
            Welcome to Back
          </h1>
          <h1 className="mb-8 text-2xl font-medium text-center">Sign up</h1>

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

          <CustomButton
            BtnText="Login In"
            className={
              "bg-primary-500 mt-3 py-2 text-white hover:bg-primary-600 hover:text-white w-full "
            }
          />

          <CustomButton
            StartIcon={<FcGoogle />}
            BtnText="Sign In with  Google"
            className={
              "bg-black mt-4 py-2 text-white hover:bg-white hover:text-black w-full "
            }
          />
        </div>

        <div className="text-grey-dark mt-6">
          New to Airbnb Create account?
          <Link to="/signup" className=" ml-4   text-primary-500  ">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
