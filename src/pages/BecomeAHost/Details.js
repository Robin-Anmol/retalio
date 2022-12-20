import React, { useState } from "react";
import { CustomButton } from "../../components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import CancelRounded, { Button, TextField } from "@mui/material";
import { LocationType } from "../../utlis";
import { MdCancel } from "react-icons/md";
const Details = () => {
  const navigate = useNavigate();
  const [option, setOptions] = useState(LocationType);
  const [LocationIndex, SetLocationIndex] = useState(0);
  const [isCustomLocation, setCustomLocation] = useState(false);

  const SelectOnChange = (e) => {
    if (e.value !== "Add New") {
      option.map((item, index) => {
        if (e.value === item.value) {
          SetLocationIndex(index);
        }
      });

      // setPropertyDescr({
      //   ...property_desc,
      //   location_type: e.value,
      // });
    } else {
      setCustomLocation(true);
    }
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-full px-3 py-4">
      <button
        className={`bg-primary-500 mb-5 flex py-2 px-4 rounded-md items-center gap-1 hover:bg-primary-500 text-white lg:hidden `}
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack />
        <span className="capitalize text-lg "> back</span>
      </button>
      <div className="w-full h-full px-4 lg:px-10 py-4 shadow-lg flex flex-col gap-3 justify-start ">
        <span className="text-black font-semibold uppercase  text-2xl text-start  ">
          Add location Details
        </span>
        <form
          className="flex flex-col  gap-4 justify-start w-full   "
          onSubmit={FormSubmitHandler}
        >
          <div className="flex gap-3 w-full lg:w-[50%] ">
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium ">
                Type of Location<span style={{ color: "red" }}>*</span>
              </label>
              <div className="">
                <Select
                  className="cursor-pointer focus:outline-primary-500 "
                  options={option}
                  onChange={SelectOnChange}
                  value={option[LocationIndex]}
                  required
                  isDisabled={isCustomLocation}
                />
              </div>
            </div>
            {isCustomLocation && (
              <span
                className="w-auto  cursor-pointer self-center mt-8 text-primary-500  "
                onClick={() => setCustomLocation(false)}
              >
                <MdCancel className="text-2xl  " />
              </span>
            )}
          </div>
          {isCustomLocation && (
            <div className="flex flex-col gap-3 w-full lg:w-[50%]">
              <label className="mb-2 font-medium ">
                Add New Location<span style={{ color: "red" }}>*</span>
              </label>
              <div className="flex gap-2">
                <input
                  id="outlined-basic"
                  placeholder="Add New Location"
                  variant="outlined"
                  className=" px-3 py-2 w-full text-lg  border rounded-sm border-gray-500 focus:outline-primary-500 "
                />
                <Button
                  // onClick={}
                  variant="contained"
                  className="cursor-pointer bg-primary-500 h-full hover:bg-primary-500 text-white "
                >
                  Add
                </Button>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-3 w-full lg:w-[50%]">
            <label className="mb-2 font-medium ">
              Property Size in Sq ft<span style={{ color: "red" }}>*</span>
            </label>
            <div className="flex gap-2">
              <input
                id="outlined-basic"
                placeholder="Add New Location"
                variant="outlined"
                className=" px-3 py-2 w-full text-lg  border rounded-sm border-gray-500 focus:outline-primary-500 "
              />
              <Button
                // onClick={}
                variant="contained"
                className="cursor-pointer bg-primary-500 h-full hover:bg-primary-500 text-white "
              >
                Add
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
