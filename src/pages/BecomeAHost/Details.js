import React, { useState } from "react";
import { CustomButton } from "../../components";
import { IoIosArrowBack } from "react-icons/io";
import { IoResizeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Select from "react-select";
import CancelRounded, {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Locationtype } from "../../utlis";
import { MdApartment, MdCancel } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
const Details = () => {
  const navigate = useNavigate();
  const [option, setOptions] = useState(Locationtype);
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
    <div className="w-full h-full px-3 py-4 ">
      <button
        className={`bg-primary-500 mb-5 flex py-2 px-4 rounded-md items-center gap-1 hover:bg-primary-500 text-white lg:hidden `}
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack />
        <span className="capitalize text-lg "> back</span>
      </button>
      <div className="w-full h-full px-4 lg:px-10 py-4 shadow-lg flex flex-col gap-6 justify-start ">
        <span className="text-black font-semibold uppercase  text-2xl text-start  ">
          Add Property Details and Description
        </span>
        <form
          className="flex flex-col  gap-4 justify-start w-full   "
          onSubmit={FormSubmitHandler}
        >
          <div className="flex gap-2 w-full lg:w-[50%] ">
            <div className="flex flex-col w-full">
              <label className="mb-2 text-lg lg:text-xl font-medium ">
                Type of Location<span className="text-primary-500">*</span>
              </label>
              <div className="">
                <Select
                  className="cursor-pointer "
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
            <div className="flex flex-col gap-2 w-full lg:w-[50%]">
              <label className="mb-2 text-lg lg:text-xl font-medium ">
                Enter your Location Type
                <span className="text-primary-500">*</span>
              </label>
              <div className="flex items-center  relative ">
                <input
                  required
                  placeholder="Add New Location"
                  type="text"
                  //onchange left
                  className=" px-3 pl-10 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
                />
                <MdApartment className="left-2 text-primary-500 text-2xl absolute " />
              </div>
            </div>
          )}
          {/* property Size  of the location */}
          <div className="flex flex-col gap-2 w-full lg:w-[50%]">
            <label className="mb-2 text-lg lg:text-xl font-medium ">
              Property Size in Sq ft<span className="text-primary-500">*</span>
            </label>
            <div className="flex items-center  relative ">
              <input
                required
                type="number"
                placeholder="eg:2500"
                //onchange left
                className=" px-3 pl-10 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
              />
              <IoResizeOutline className="left-2 text-primary-500 text-2xl absolute " />
            </div>
          </div>
          {/* name of the Location */}
          <div className="flex flex-col gap-2 w-full lg:w-[50%]">
            <label className="mb-2 text-lg lg:text-xl font-medium ">
              Name of the Location <span className="text-primary-500">*</span>
            </label>
            <div className="flex items-center  relative ">
              <input
                required
                placeholder="Enter your location name"
                //onchange left
                min={1}
                type="text"
                className=" px-3 pl-10 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
              />
              <MdApartment className="left-2 text-primary-500 text-2xl absolute " />
            </div>
          </div>
          {/* accommodates means no of people  */}
          <div className="flex flex-col gap-2 w-full lg:w-[50%]">
            <label className="mb-2 text-lg lg:text-xl font-medium ">
              Accommodates <span className="text-primary-500">*</span>
            </label>

            <div className="flex items-center  relative ">
              <input
                required
                //onchange left
                placeholder="eg:100"
                type="number"
                className=" px-3 pl-10 py-2 w-full text-lg  border rounded-md border-gray-500 focus:outline-primary-500 "
              />
              <BsPeople className="left-2 text-primary-500 text-2xl absolute " />
            </div>
          </div>
          {/*   In House Parking Facility Available  */}
          <div className="flex flex-col gap-2 w-full lg:w-[50%]">
            <label className="mb-2 text-lg capitalize lg:text-xl font-medium ">
              In House Parking Facility Available{" "}
              <span className="text-primary-500">*</span>
            </label>
            <RadioGroup
              className="flex flex-row gap-4 "
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="House_Parking_Facility_Available"
              // value={value}
              // onChange={handleChange}
            >
              <FormControlLabel
                className="uppercase "
                value="yes"
                control={
                  <Radio
                    required
                    color="error"
                    className="uppercase text-primary-500"
                  />
                }
                label="yes"
              />
              <FormControlLabel
                value="no"
                className="uppercase "
                control={
                  <Radio
                    required
                    color="error"
                    className="uppercase text-primary-500"
                  />
                }
                label="no"
              />
            </RadioGroup>
          </div>
          {/* Street parking facility Available  */}
          <div className="flex flex-col gap-2 w-full lg:w-[50%]">
            <label className="mb-2 text-lg lg:text-xl capitalize font-medium ">
              Street parking facility Available{" "}
              <span className="text-primary-500">*</span>
            </label>
            <div className="flex w-full gap-10 items-center">
              <RadioGroup
                className="flex flex-row gap-4 "
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="Street_parking_facility_Available"
                // value={value}
                // onChange={handleChange}
              >
                <FormControlLabel
                  className="uppercase "
                  value="yes"
                  control={
                    <Radio
                      required
                      color="error"
                      className="uppercase text-primary-500"
                    />
                  }
                  label="yes"
                />
                <FormControlLabel
                  value="no"
                  className="uppercase "
                  control={
                    <Radio
                      required
                      color="error"
                      className="uppercase text-primary-500"
                    />
                  }
                  label="no"
                />
              </RadioGroup>
            </div>
          </div>
          {/* Security Camera Available */}
          <div className="flex flex-col gap-2 w-full lg:w-[50%]">
            <label className="mb-2 text-lg lg:text-xl capitalize font-medium ">
              Security Camera Available
              <span className="text-primary-500">*</span>
            </label>
            <div className="flex w-full gap-10 items-center">
              <RadioGroup
                className="flex flex-row gap-4 "
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="Security_Camera_Available"
                // value={value}
                // onChange={handleChange}
              >
                <FormControlLabel
                  className="uppercase "
                  value="yes"
                  control={
                    <Radio
                      required
                      color="error"
                      className="uppercase text-primary-500"
                    />
                  }
                  label="yes"
                />
                <FormControlLabel
                  value="no"
                  className="uppercase "
                  control={
                    <Radio
                      required
                      color="error"
                      className="uppercase text-primary-500"
                    />
                  }
                  label="no"
                />
              </RadioGroup>
            </div>
          </div>
          {/* Description of the  peoperty */}
          <div className="flex flex-col gap-2 w-full lg:w-[50%]">
            <label className="mb-2 text-lg lg:text-xl capitalize font-medium ">
              Description of the Property{" "}
              <span className="text-primary-500">*</span>
            </label>
            <TextareaAutosize
              className="border  px-2 py-3 text-lg rounded-md focus:outline-primary-500 border-gray-500"
              aria-label="minimum height"
              minRows={6}
              maxLength={2000}
              name="property_Description"
              placeholder="Eg: Tell us something about your property....  "
              // onChange={handleChange}
              // value={property_desc ? property_desc.property_info : ""}

              required
            />
          </div>
          <Button
            className="flex  py-2 text-base flex-col gap-2 bg-black text-white hover:bg-black  w-full lg:w-[50%]"
            type="reset"
          >
            Reset Form
          </Button>
          <Button
            className="flex mb-7 py-2 text-base flex-col gap-2 bg-primary-500 text-white hover:bg-primary-500  w-full lg:w-[50%]"
            type="submit"
          >
            Save And Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Details;
