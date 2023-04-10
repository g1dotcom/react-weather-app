import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";

const CityBox = () => {
  return (
    <div className="bg-black min-w-full h-full flex flex-col md:flex-row p-2 items-center justify-around">
      <div className="bg-gray-100 my-2 w-full h-full flex md:flex-col items-center justify-evenly mx-1 py-5 rounded-full">
        <h1>wind</h1>
        <FontAwesomeIcon icon={faWind} />
        <h1>Normal</h1>
      </div>
      <div className="bg-gray-100 my-2 w-full h-full flex md:flex-col items-center justify-evenly mx-1 py-5 rounded-full">
        <h1>wind</h1>
        <FontAwesomeIcon icon={faWind} />
        <h1>Normal</h1>
      </div>
      <div className="bg-gray-100 my-2 w-full h-full flex md:flex-col items-center justify-evenly mx-1 py-5 rounded-full">
        <h1>wind</h1>
        <FontAwesomeIcon icon={faWind} />
        <h1>Normal</h1>
      </div>
      <div className="bg-gray-100 my-2 w-full h-full flex md:flex-col items-center justify-evenly mx-1 py-5 rounded-full">
        <h1>wind</h1>
        <FontAwesomeIcon icon={faWind} />
        <h1>Normal</h1>
      </div>
    </div>
  );
};

export default CityBox;
