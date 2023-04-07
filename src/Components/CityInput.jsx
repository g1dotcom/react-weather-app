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
    <div className="h-full w-full mt-10 flex justify-center items-center">
      <div className="h-1/6  w-full flex flex-row items-center justify-center  p-5">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for places"
          className=" focus:outline-none 
          input min-w-full   bg-gray-100 "
        />
        <div className="">
          <AiOutlineSearch
            className="hover:scale-105"
            size={25}
            onClick={handleSearchClick}
          />
        </div>
      </div>
      <button className="bg-gray-200 rounded-full p-2 mr-2 hover:bg-gray-300 hover:scale-105">
        <GoLocation onClick={handleLocationClick} size={25} />
      </button>
    </div>
  );
};

export default CityInput;
