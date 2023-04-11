import React, { useState } from "react";

//icons

import { GoLocation } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CityInput = ({ setQuery, darkMode }) => {
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
    <div className="h-full max-w-full sm:mt-14 mt-2 flex justify-center items-center">
      <div className="h-full max-w-full flex flex-col items-center justify-center">
        <h1
          className={`my-4 font-bold ${
            darkMode ? "" : "bg-gray-500 text-white"
          }  w-full  rounded-xl text-center text-base xl:text-lg 2xl:text-xl`}
        >
          <FontAwesomeIcon icon={faCloud} className="mr-1" />
          Weather App
          <FontAwesomeIcon icon={faCloud} className="ml-1" />
        </h1>
        <div className="h-1/6  max-w-full flex flex-row items-center justify-center mb-4 sm:my-4 ">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSearchClick();
            }}
            type="text"
            placeholder="Search for places"
            className=" focus:outline-none 
          input max-w-full   bg-gray-300 "
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
            <button className="bg-gray-800  text-white  rounded-full p-2 mr-2 ml-2 md:mb-6 hover:bg-gray-300 hover:scale-105 cursor-pointer">
              <GoLocation onClick={handleLocationClick} size={20} />
            </button>
          </h1>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CityInput;
