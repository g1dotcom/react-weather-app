import React from "react";

//icons
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const CityInput = () => {
  return (
    <div className="h-full w-full">
      <div className="h-1/6 flex items-center justify-center  p-5">
        <GoLocation size={20} />
        <input
          type="text"
          placeholder="Search for places"
          className=" focus:outline-none flex justify-end items-end input w-full max-w-xl bg-gray-50 "
        />
        <BiSearch size={35} className="mr-4" />

        <button className="text-lg font-semibold mx-2 rounded-3xl btn btn-outline  px-2 ">
          °C
        </button>
        <h1 className="mx-1">|</h1>
        <h1 className="mx-1">|</h1>

        <button className="text-lg font-semibold mx-2 rounded-3xl btn btn-outline px-2">
          °F
        </button>
      </div>
    </div>
  );
};

export default CityInput;
