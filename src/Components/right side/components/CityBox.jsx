import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";

const CityBox = ({
  weather: { speed, humidity, feels_like, name },
  units,
  setUnits,
}) => {
  // handleUnitsChange
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className=" min-w-full h-full flex flex-col md:flex-row p-2 items-center justify-around text-sm lg:text-2xl">
      <div className="bg-white my-2 w-full h-full flex md:flex-col items-center justify-evenly  mx-1 py-5 rounded-full shadow-lg shadow-gray-400 hover:scale-105 transition-all duration-500">
        <h1 className="md:mb-4 text-gray-400 ">Wind</h1>
        <div className="md:mb-4">
          <div className="flex items-center">
            <h1 className="md:text-6xl text-base mx-1">
              {" "}
              {`${speed.toFixed()}`}
            </h1>
            <span className="font-bold">km/h</span>
          </div>
        </div>
        <FontAwesomeIcon icon={faWind} />
        <h1 className="md:my-4 text-gray-400">{name}</h1>
      </div>
      <div className="bg-white my-2 w-full h-full flex md:flex-col items-center justify-evenly  mx-1 py-5 rounded-full shadow-lg shadow-gray-400 hover:scale-105 transition-all duration-500">
        <h1 className="md:mb-4 text-gray-400 ">Humidity</h1>
        <div className="md:mb-4">
          <div className="flex items-center">
            <h1 className="md:text-6xl text-base mx-1">
              {" "}
              {`${humidity.toFixed()}`}{" "}
            </h1>
            <span className="font-bold">%</span>
          </div>
        </div>
        <FontAwesomeIcon icon={faWind} />
        <h1 className="md:my-4 text-gray-400">{name}</h1>
      </div>
      <div className="bg-white my-2 w-full h-full flex md:flex-col items-center justify-evenly  mx-1 py-5 rounded-full shadow-lg shadow-gray-400 hover:scale-105 transition-all duration-500">
        <h1 className="md:mb-4 text-gray-400 ">Real Fell</h1>
        <div className="md:mb-4">
          <div className="flex items-center">
            <h1 className="md:text-6xl text-base mx-1">
              {`${feels_like.toFixed()}`}°
            </h1>
            <span className="font-bold"></span>
          </div>
        </div>
        <FontAwesomeIcon icon={faWind} />
        <h1 className="md:my-4 text-gray-400">{name}</h1>
      </div>
      <div className="bg-white my-2 w-full h-full flex md:flex-col items-center justify-evenly  mx-1 py-5 lg:py-16 rounded-full shadow-lg shadow-gray-400 hover:scale-105 transition-all duration-500">
        <button
          name="metric"
          className="btn btn-active"
          onClick={handleUnitsChange}
        >
          Celsius
        </button>
        <FontAwesomeIcon icon={faWind} />
        <button
          name="imperial"
          className="btn btn-active "
          onClick={handleUnitsChange}
        >
          Fahrenheit
        </button>
      </div>
    </div>
  );
};

export default CityBox;
