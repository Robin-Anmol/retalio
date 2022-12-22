import React, { useEffect, useState } from "react";
import { IoIosAdd, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AmenitiesType } from "../../utlis";
import { Button, Checkbox } from "@mui/material";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

const Amenities = () => {
  const navigate = useNavigate();
  const [inputDonts, setInputDonts] = useState("");
  const [inputDos, setInputDos] = useState("");
  const [Do_s, setDo_s] = useState([
    "Do advise us of any change in your personal circumstances. We can try and help",
    "Ask if you are not sure of anything.",
  ]);
  const [Dont_s, setDont_s] = useState([
    "Dont Be rude or aggressive or rude towards any member of the Cooke & Co staff as this will not be tolerated.",
    "Dont Damage the landlords property in any way.",
  ]);

  const AddDontsHandler = () => {
    if (!Dont_s.includes(inputDonts) && inputDonts !== "") {
      setDont_s((prev) => [...prev, inputDonts]);
      setInputDonts("");
    } else {
      if (inputDonts === "") {
        alert("enter something");
      } else {
        alert("already added");
      }
    }
  };

  const AddDosHandler = () => {
    if (!Do_s.includes(inputDos) && inputDos !== "") {
      setDo_s((prev) => [...prev, inputDos]);
      setInputDos("");
    } else {
      if (inputDos === "") {
        alert("enter something");
      } else {
        alert("already added");
      }
    }
  };

  const donts_hanlder = (e) => {
    setInputDonts(e.target.value);
  };
  const dos_hanlder = (e) => {
    setInputDos(e.target.value);
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
      <div className="w-full h-full px-4 lg:px-10 py-4 shadow-lg flex flex-col gap-6 justify-start ">
        <span className="text-black font-semibold uppercase  text-2xl text-start  ">
          Add Do and Don'ts
        </span>
        <form
          className="flex flex-col h-full  gap-4 justify-start w-full "
          onSubmit={FormSubmitHandler}
        >
          {/* do and don'ts */}
          <div className="flex flex-col h-full lg:flex-row justify-between gap-4">
            <div className="flex h-full gap-2 w-full lg:w-[40%] ">
              <div className="flex  h-full flex-col w-full">
                <label className="mb-2 text-lg lg:text-xl font-medium ">
                  Do's
                </label>
                <div className="flex gap-2 w-full items-center  relative ">
                  <input
                    value={inputDos}
                    onChange={dos_hanlder}
                    placeholder=""
                    type="text"
                    className=" px-3 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                  />
                  <Button
                    variant="contained"
                    onClick={AddDosHandler}
                    className="h-full py-2 bg-primary-500 hover:bg-primary-500 text-white"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex h-full gap-2 w-full lg:w-[40%] ">
              <div className="flex  h-full flex-col w-full">
                <label className="mb-2 text-lg lg:text-xl font-medium ">
                  Do's
                </label>

                <div className="flex  items-center gap-2 relative ">
                  <input
                    value={inputDonts}
                    onChange={donts_hanlder}
                    placeholder=""
                    type="text"
                    className=" px-3 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                  />
                  <Button
                    onClick={AddDontsHandler}
                    variant="contained"
                    className="h-full py-2 bg-primary-500 hover:bg-primary-500 text-white"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* dont's and do's rule */}
          <div className="flex flex-col h-full lg:flex-row justify-between gap-4">
            <div className="flex h-full gap-2 w-full lg:w-[40%] ">
              <div className="flex  h-full flex-col w-full">
                <label className="mb-2 text-lg lg:text-xl font-medium ">
                  Do's Rule's
                </label>
                <div className="flex gap-2 w-full items-center  relative ">
                  <ul className="w-full gap-1 bg-white  text-black rounded-lg  flex flex-col justify-center items-start ">
                    {Do_s.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" px-1 py-2  gap-2 rounded-md flex w-full items-center relative justify-start "
                          // onChange={() => checkHandler(item?.value)}
                        >
                          <span className="text-md font-medium">
                            {index + 1}.
                          </span>
                          <span className="text-md break-words pr-10   font-medium">
                            {item}
                          </span>
                          <MdDeleteOutline className=" cursor-pointer text-3xl absolute right-5  text-primary-500" />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex h-full gap-2 w-full lg:w-[40%] ">
              <div className="flex  h-full flex-col w-full">
                <label className="mb-2 text-lg lg:text-xl font-medium ">
                  Don'ts Rule's
                </label>

                <div className="flex w-full    gap-2 relative ">
                  <ul className="w-full gap-1 bg-white  text-black rounded-lg  flex flex-col justify-end  ">
                    {Dont_s.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" px-1 py-2  gap-2 rounded-md flex w-full  relative  "
                          // onChange={() => checkHandler(item?.value)}
                        >
                          <span className="text-md font-medium">
                            {index + 1}.
                          </span>
                          <span className="text-md break-words w-[80%]   font-medium">
                            {item}
                          </span>
                          <MdDeleteOutline className=" cursor-pointer text-3xl absolute right-5  text-primary-500" />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
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

export default Amenities;
