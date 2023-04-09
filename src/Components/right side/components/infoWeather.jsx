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
}) => {
  return (
    <div className="bg-main-left flex justify-around py-2 mx-16 shadow-lg shadow-gray-500 hover:bg-gray-200  transition-all duration-500">
      <div className="flex justify-center items-center">
        <WiSunrise size={25} className="mx-2" />
        Rise:{" "}
        <span className="font-bold mx-2">
          {formatToLocalTime(sunrise, timezone, "hh:mm a")}
        </span>
      </div>
      <div className="flex justify-center items-center ">
        <FiSunset className="mx-2" />
        Set:{" "}
        <span className="font-bold mx-2">
          {" "}
          {formatToLocalTime(sunset, timezone, "hh:mm a")}
        </span>
      </div>
      <div className="flex justify-center items-center ">
        <HiOutlineSun />
        <AiOutlineArrowUp />
        High: <span className="font-bold mx-2">{`${temp_min.toFixed()}`}°</span>
      </div>
      <div className="flex justify-center items-center">
        <HiOutlineSun />
        <AiOutlineArrowDown />
        Low: <span className="font-bold mx-2">{`${temp_max.toFixed()}`}°</span>
      </div>
    </div>
  );
};

export default infoWeather;
