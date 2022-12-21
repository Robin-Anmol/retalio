import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();
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
          className="flex   gap-4 justify-start w-full "
          //   onSubmit={FormSubmitHandler}
        ></form>
      </div>
    </div>
  );
};

export default Location;
