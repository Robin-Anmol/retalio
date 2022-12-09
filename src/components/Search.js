import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import CustomButton from "./Button";
import CountryDropdown from "./CountryDropDown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";
const Search = () => {
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <CustomButton
        BtnText="Search"
        className="bg-primary-500 hover:bg-primary-600 transition w-full lg:max-w-[162px] h-14 rounded-lg flex justify-center items-center text-white text-lg"
      />
    </div>
  );
};

export default Search;
