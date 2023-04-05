import React from "react";

//icons
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const CityInput = () => {
  return (
    <div className="h-full w-full">
      <div className="h-1/6 flex items-center justify-center  p-5">
        <input
          type="text"
          placeholder="Search for places"
          className="focus:outline-none flex justify-end items-end input w-full max-w-xl bg-slate-100 "
        />
        <BiSearch size={25} />
        <GoLocation size={25} />
      </div>
    </div>
  );
};

export default CityInput;
