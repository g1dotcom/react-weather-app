import React from "react";

//icons
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const CityInput = ({ setQuery, setUnits, units }) => {
  return (
    <div className="h-full w-full mt-10">
      <div className="h-1/6  w-full flex flex-row items-center justify-center  p-5">
        <input
          type="text"
          placeholder="Search for places"
          className=" focus:outline-none 
          input w-full   bg-gray-100 "
        />
        <div className="">
          <GoLocation size={25} />
        </div>
      </div>
    </div>
  );
};

export default CityInput;
