import React from "react";

//icons
import { WiSunrise } from "react-icons/wi";
import { FiSunset } from "react-icons/fi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { HiOutlineSun } from "react-icons/hi";
import { formatToLocalTime } from "../../../services/weatherService";

const infoWeather = ({
  weather: { sunrise, sunset, temp_min, temp_max, timezone },
  darkMode,
}) => {
  return (
    <div
      className={` ${
        darkMode
          ? "dark-right-button shadow-xl shadow-gray-900 text-white hover:bg-gray-600"
          : "bg-main-left hover:bg-gray-200"
      }  flex sm:flex-row justify-center  md:justify-between  py-2 mx-16 sm:px-10 shadow-lg shadow-gray-500
       transition-all duration-500 flex-wrap w-full 2xl:text-xl text-sm mt-4 rounded-xl`}
    >
      <div className="flex justify-center items-center md:mx-2 ">
        <WiSunrise size={25} className="mx-2" />
        Rise:{" "}
        <span className="font-bold mx-2">
          {formatToLocalTime(sunrise, timezone, "hh:mm a")}
        </span>
      </div>
      <div className="flex justify-center items-center md:mx-6 ">
        <FiSunset className="mx-2" />
        Set:{" "}
        <span className="font-bold mx-2">
          {" "}
          {formatToLocalTime(sunset, timezone, "hh:mm a")}
        </span>
      </div>
      <div className="flex justify-center items-center md:mx-6">
        <HiOutlineSun />
        <AiOutlineArrowUp />
        High: <span className="font-bold mx-2">{`${temp_min.toFixed()}`}°</span>
      </div>
      <div className="flex justify-center items-center md:mx-2">
        <HiOutlineSun />
        <AiOutlineArrowDown />
        Low: <span className="font-bold mx-2">{`${temp_max.toFixed()}`}°</span>
      </div>
    </div>
  );
};

export default infoWeather;
