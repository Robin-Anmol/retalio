import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AmenitiesType } from "../../utlis";
import { Button } from "@mui/material";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineSearch,
} from "react-icons/ai";

const Amenities = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [latestAmenities, setLatestAmenities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([
    "Wifi",
    "TV Included",
    "Wine Cellar",
  ]);

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
          Add Amenities
        </span>
        <form
          className="flex flex-col   gap-4 justify-start w-full "
          //   onSubmit={FormSubmitHandler}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="flex gap-2 w-full lg:w-[40%] ">
              <div className="flex flex-col w-full">
                <label className="mb-2 text-lg lg:text-xl font-medium ">
                  Amenities<span className="text-primary-500">*</span>
                </label>
                <div className="w-full relative">
                  <div
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="w-full px-5 cursor-pointer active:scale-[.999] rounded-md py-2 flex bg-black text-white  items-center justify-between "
                  >
                    <div className="">Select Amenities</div>
                    {open ? (
                      <AiFillCaretUp className="text-xl" />
                    ) : (
                      <AiFillCaretDown className="text-xl" />
                    )}
                  </div>
                  {open && (
                    <div className="absolute z-1 bg-black top-12 rounded-sm w-full h-[300px] shadow-lg">
                      <div className="w-full relative flex   items-center ">
                        <input
                          className="w-full px-4 mx-4 mt-2 rounded-xl outline-none  placeholder:text-primary-500 py-2"
                          placeholder="Search amenities.."
                        />
                        <AiOutlineSearch className="absolute top-5 right-8 text-xl " />
                      </div>
                      <ul>
                        {/* <li className="text-white">Air Conditioning</li> //checkbox and span  */}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-2 w-full lg:w-[40%] ">
              <div className="flex flex-col w-full">
                <label className="mb-2 text-lg text-primary-500 lg:text-xl font-medium ">
                  Selected Amenities
                </label>
                <div className=""></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Amenities;
