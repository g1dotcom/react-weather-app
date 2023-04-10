import React, { useState } from "react";

//icons

import { GoLocation } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";

const CityInput = ({ setQuery }) => {
  //UseState for the input
  const [city, setCity] = useState("");

  //Handle the submit
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  //Handle the navigation
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  return (
    <div className="h-full max-w-full sm:mt-14 mt-6 flex justify-center items-center">
      <div className="h-full max-w-full flex flex-col items-center justify-center">
        {" "}
        <div className="h-1/6  max-w-full flex flex-row items-center justify-center mb-5 sm:mt-2 ">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSearchClick();
            }}
            type="text"
            placeholder="Search for places"
            className=" focus:outline-none 
          input max-w-full   bg-gray-100 "
          />
          <div className="">
            <AiOutlineSearch
              className="hover:scale-110 hover:bg-gray-300 rounded-full   cursor-pointer"
              size={25}
              onClick={handleSearchClick}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-around items-center sm:mb-6 mt-2">
          <h1 className="font-main 2xl:text-xl text-base text-center">
            Get the weather for where I live
          </h1>
          <button className="bg-gray-800 text-white  rounded-full p-2 mr-2 hover:bg-gray-300 hover:scale-105 cursor-pointer">
            <GoLocation onClick={handleLocationClick} size={20} />
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CityInput;
