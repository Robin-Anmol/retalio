import React, { useEffect, useState } from "react";
import { IoIosAdd, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FeatureConstant } from "../../utlis";
import { Button, Checkbox } from "@mui/material";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";

const Amenities = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [allAmenities, SetAllAmenities] = useState([...FeatureConstant]);
  const [notSelectedAmenities, setNotSelectedAmenities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [SearchResult, setSearchResult] = useState([]);
  const [currentSelect, setCurrentSelect] = useState("");
  const [search, setSearch] = useState("");

  //impelement like todo

  useEffect(() => {
    const selected = allAmenities.filter((item) => item.selected === true);
    setSelectedAmenities(selected);
    // const Notselected = allAmenities.filter((item) => item.selected !== true);
    // setNotSelectedAmenities(Notselected);
  }, [setSelectedAmenities, allAmenities]);

  useEffect(() => {
    const searchResult = allAmenities.filter(
      (item) =>
        item?.value?.toLowerCase() === search.toLowerCase() ||
        item?.value.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(searchResult);
  }, [setSearchResult, allAmenities, search]);

  const changes = () => {
    const current = allAmenities?.map((item) => {
      if (item.value === currentSelect) {
        return { ...item, selected: true };
      } else {
        return { ...item };
      }
    });
    SetAllAmenities(current);
  };

  useEffect(() => {
    changes();
  }, [currentSelect]);
  const SearchHanlder = (e) => {
    setSearch(e.target.value);
  };

  const checkHandler = (value) => {
    const current = allAmenities?.map((item) => {
      if (item.value === value) {
        return { ...item, selected: true };
      } else {
        return { ...item };
      }
    });

    SetAllAmenities(current);
    const select = selectedAmenities.map((item) => {
      if (item.value === value) {
        return { ...item, selected: false };
      } else {
        return { ...item };
      }
    });
    console.log(select);
    setSelectedAmenities(select);

    // SetAllAmenities(current);
  };
  // console.log(currentSelect);

  // console.log(selectedAmenities);
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
          className="flex flex-col h-full  gap-4 justify-start w-full "
          //   onSubmit={FormSubmitHandler}
        >
          <div className="flex flex-col h-full lg:flex-row justify-between gap-4">
            <div className="flex h-full gap-2 w-full lg:w-[40%] ">
              <div className="flex  h-full flex-col w-full">
                <label className="mb-2 text-lg lg:text-xl font-medium ">
                  Features<span className="text-primary-500">*</span>
                </label>
                <div className="w-full relative">
                  <div
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="w-full px-5 cursor-pointer active:scale-[.999] rounded-md py-2 flex bg-primary-500 text-white  items-center justify-between "
                  >
                    <div className="">Select Features</div>
                    {open ? (
                      <AiFillCaretUp className="text-xl" />
                    ) : (
                      <AiFillCaretDown className="text-xl" />
                    )}
                  </div>
                  {open && (
                    <div className="absolute z-10 bg-white top-12 rounded-sm w-full  shadow-lg">
                      <div className="w-full relative flex   items-center ">
                        <input
                          autoFocus
                          value={search}
                          onChange={SearchHanlder}
                          className="w-full px-4 mx-4 mt-2 rounded-xl outline-none text-white bg-black  placeholder:text-white py-2"
                          placeholder="Search amenities.."
                        />
                        <AiOutlineSearch className="absolute text-white top-5 right-8 text-xl " />
                      </div>
                      <ul className="px-3 py-2  bg-white   mt-3 w-full flex flex-col overflow-x-hidden max-h-[300px] overflow-y-scroll">
                        {SearchResult.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="text-white  justify-start flex  items-center"
                              onChange={() => checkHandler(item?.value)}
                            >
                              <Checkbox
                                id={`${item.value}`}
                                sx={{
                                  color: "#f75656",
                                  "&.Mui-checked": {
                                    color: "#f75656",
                                  },
                                }}
                                className="cursor-pointer"
                              />
                              <label
                                htmlFor={`${item.value}`}
                                className="cursor-pointer text-black  break-words
                           whitespace-pre-line  text-md"
                              >
                                {item.value}
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* city name */}
            <div className="flex flex-col gap-1 w-full lg:w-[40%]">
              <label className="mb-2 text-lg lg:text-xl font-medium ">
                Enter Custom Features{" "}
              </label>

              <div className="flex items-center gap-3  relative ">
                <input
                  //onchange left
                  placeholder=""
                  type="text"
                  className="z-0 px-3 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                />
                <Button className=" h-full bg-primary-500 text-white hover:bg-primary-500">
                  Add
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full lg:w-[40%] ">
            <div className="flex flex-col w-full">
              <label className="mb-2 text-lg text-primary-500 lg:text-xl font-medium ">
                Selected Features
              </label>
              <div className="w-full ">
                <ul className="w-full gap-1 bg-black text-white rounded-lg  flex flex-col justify-center items-start ">
                  {selectedAmenities.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className=" px-3 py-2 shadow-lg rounded-md flex w-full items-center relative justify-between "
                        // onChange={() => checkHandler(item?.value)}
                      >
                        <span className="text-md   ">
                          {index + 1}. {item.value}
                        </span>
                        <MdDeleteOutline className=" cursor-pointer text-3xl absolute right-5  text-primary-500" />
                      </li>
                    );
                  })}
                </ul>
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

export default Amenities;
