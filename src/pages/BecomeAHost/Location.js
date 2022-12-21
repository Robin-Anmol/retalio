import { Button } from "@mui/material";
import { Country } from "country-state-city";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
const Location = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  console.log(Country.getAllCountries());

  return (
    <div className="w-full h-full px-3 py-4">
      <button
        className={`bg-primary-500 mb-5 flex py-2 px-4 rounded-md items-center gap-1 hover:bg-primary-500 text-white lg:hidden `}
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack />
        <span className="capitalize text-lg "> back</span>
      </button>
      <div className="w-full h-full px-4 lg:px-10 py-4 shadow-lg flex flex-col gap-6 justify-start ">
        <span className="text-black font-semibold uppercase  text-2xl text-start  ">
          Add location Details
        </span>
        <form
          className="flex flex-col   gap-4 justify-start w-full "
          //   onSubmit={FormSubmitHandler}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            {/* country */}
            <div className="flex gap-2 w-full lg:w-[40%] ">
              <div className="flex flex-col w-full">
                <label className="mb-2 text-lg lg:text-xl font-medium ">
                  Country<span className="text-primary-500">*</span>
                </label>
                <div className="">
                  <Select
                    className="cursor-pointer "
                    // options={option}
                    // onChange={SelectOnChange}
                    // value={option[LocationIndex]}
                    required
                    // isDisabled={isCustomLocation}
                  />
                </div>
              </div>
            </div>
            {/* state  */}
            <div className="flex gap-2 w-full  lg:w-[40%] ">
              <div className="flex flex-col w-full">
                <label className="mb-2 text-lg lg:text-xl font-medium ">
                  State <span className="text-primary-500">*</span>
                  <span className="text-sm text-primary-500 ">
                    (Please select country first)
                  </span>
                </label>
                <div className="">
                  <Select
                    className="cursor-pointer "
                    // options={option}
                    // onChange={SelectOnChange}
                    // value={option[LocationIndex]}
                    required
                    // isDisabled={isCustomLocation}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* second div for city and pincode  */}

          <div className="flex flex-col lg:flex-row justify-between gap-4">
            {/* city name */}
            <div className="flex flex-col gap-1 w-full lg:w-[40%]">
              <label className="mb-2 text-lg lg:text-xl font-medium ">
                Enter City Name <span className="text-primary-500">*</span>
              </label>

              <div className="flex items-center  relative ">
                <input
                  required
                  //onchange left
                  placeholder="Eg: Haldwani"
                  type="text"
                  className=" px-3 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                />
                {/* <BsPeople className="left-2 text-primary-500 text-2xl absolute " /> */}
              </div>
            </div>
            {/* pinCode  */}
            <div className="flex flex-col gap-1 w-full lg:w-[40%]">
              <label className="mb-2 text-lg lg:text-xl font-medium ">
                Enter Pincode <span className="text-primary-500">*</span>
              </label>

              <div className="flex items-center  relative ">
                <input
                  required
                  //onchange left
                  placeholder="Eg: 263139"
                  type="number"
                  className=" px-3 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                />
                {/* <BsPeople className="left-2 text-primary-500 text-2xl absolute " /> */}
              </div>
            </div>
          </div>

          {/* Area and Landmark */}

          <div className="flex flex-col lg:flex-row justify-between gap-4">
            {/* Area  */}
            <div className="flex flex-col gap-1 w-full lg:w-[40%]">
              <label className="mb-2 text-lg lg:text-xl font-medium ">
                Area <span className="text-primary-500">*</span>
              </label>

              <div className="flex items-center  relative ">
                <input
                  required
                  //onchange left
                  placeholder=""
                  type="text"
                  className=" px-3 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                />
                {/* <BsPeople className="left-2 text-primary-500 text-2xl absolute " /> */}
              </div>
            </div>
            {/* Landmark  */}
            <div className="flex flex-col gap-1 w-full lg:w-[40%]">
              <label className="mb-2 text-lg lg:text-xl font-medium ">
                Landmark <span className="text-primary-500">*</span>
              </label>

              <div className="flex items-center  relative ">
                <input
                  required
                  //onchange left
                  placeholder="Eg: near xyz mall"
                  type="text"
                  className=" px-3 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                />
                {/* <BsPeople className="left-2 text-primary-500 text-2xl absolute " /> */}
              </div>
            </div>
          </div>
          {/*Longitude and  Latitude   */}
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            {/* Latitude  */}
            <div className="flex flex-col gap-1 w-full lg:w-[40%]">
              <label className="mb-2 text-lg lg:text-xl font-medium ">
                Location Latitude <span className="text-primary-500">*</span>
              </label>

              <div className="flex items-center  relative ">
                <input
                  required
                  //onchange left
                  placeholder="Eg:  29.2183"
                  type="number"
                  className=" px-3 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                />
                {/* <BsPeople className="left-2 text-primary-500 text-2xl absolute " /> */}
              </div>
            </div>
            {/* Longitude  */}
            <div className="flex flex-col gap-1 w-full lg:w-[40%]">
              <label className="mb-2 text-lg lg:text-xl font-medium ">
                Location Longitude <span className="text-primary-500">*</span>
              </label>

              <div className="flex items-center  relative ">
                <input
                  required
                  //onchange left
                  placeholder="Eg: 79.5130"
                  type="number"
                  className=" px-3 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                />
                {/* <BsPeople className="left-2 text-primary-500 text-2xl absolute " /> */}
              </div>
            </div>
          </div>
          {/* Location Address */}
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            {/* Latitude  */}
            <div className="flex flex-col gap-1 w-full lg:w-[60%]">
              <label className="mb-2 text-lg lg:text-xl font-medium ">
                Location Address <span className="text-primary-500">*</span>
              </label>

              <div className="flex items-center  relative ">
                <input
                  required
                  //onchange left
                  placeholder=""
                  type="text"
                  className=" px-3 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                />
                {/* <BsPeople className="left-2 text-primary-500 text-2xl absolute " /> */}
              </div>
            </div>
          </div>
          <Button
            className="flex  py-2 text-base flex-col gap-2 bg-black text-white hover:bg-black  w-full lg:w-[40%]"
            type="reset"
          >
            Reset Form
          </Button>
          <Button
            className="flex mb-7 py-2 text-base flex-col gap-2 bg-primary-500 text-white hover:bg-primary-500  w-full lg:w-[40%]"
            type="submit"
          >
            Save And Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Location;
