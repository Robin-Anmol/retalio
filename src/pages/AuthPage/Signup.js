import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowBack, IoIosArrowRoundBack } from "react-icons/io";
import { TextField } from "@mui/material";
import { BiHide, BiLock, BiShow } from "react-icons/bi";
import { SignUp } from "../../store/StoreSlice/AuthSlice";

const Signup = () => {
  const [fullname, setFullame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  const passwordCheck = (pass) => pass.length >= 8 && pass === confirmPassword;

  const SignUpHandler = async (event) => {
    event.preventDefault();
    if (
      fullname !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      passwordCheck(password)
    ) {
      try {
        const response = await SignUp(email, password);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    } else {
      //  toaster
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white   px-6 py-5 rounded shadow-md text-black w-full">
          <h1 className="mb-2  text-3xl font-sanspro font-medium  text-center">
            Welcome to Retalio
          </h1>
          <h1 className="mb-4 text-2xl font-sanspro font-medium text-center">
            Sign up
          </h1>
          <form onSubmit={SignUpHandler}>
            <input
              required
              type="text"
              value={fullname}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              onChange={(e) => setFullame(e.target.value)}
            />

            <input
              required
              value={email}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex relative  items-center ">
              <input
                required
                type={`${show ? "text" : "password"}`}
                value={password}
                className="block border    border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {show ? (
                <BiShow
                  className="absolute cursor-pointer active:scale-95 mb-3 mr-2 text-2xl right-0  "
                  onClick={() => setShow(!show)}
                />
              ) : (
                <BiHide
                  className="absolute active:scale-95 cursor-pointer mb-3 mr-2 text-2xl right-0 "
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
            <input
              required
              value={confirmPassword}
              type={`${show ? "text" : "password"}`}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <CustomButton
              eventType="submit"
              BtnText="Create Account"
              className={
                "bg-primary-500 mt-2 py-2 text-white hover:bg-primary-600 hover:text-white w-full "
              }
            />
          </form>

          <CustomButton
            StartIcon={<FcGoogle />}
            BtnText="Sign In with  Google"
            className={
              "bg-black mt-4 py-2 text-white hover:bg-black hover:text-white w-full "
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
              className="no-underline ml-4   border-b text-gray-500 border-redAccent-500 text-grey-dark"
            >
              Privacy Policy
            </Link>
          </div>
          <Link
            to="/"
            className=" flex items-center gap-2  hover:text-black justify-center w-full capitalize text-sm font-medium mt-5 text-primary-500 "
          >
            <IoIosArrowRoundBack className="text-xl  font-extrabold " />
            <span> back to site</span>
          </Link>
        </div>

        <div className="text-grey-dark w-full text-center mt-6">
          Already have a account?
          <Link to="/login" className=" ml-4   text-primary-500  ">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
