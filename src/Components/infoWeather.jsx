import React from "react";

//icons
import { BsCloudSun } from "react-icons/bs";
import { FiSunset } from "react-icons/fi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const infoWeather = () => {
  return (
    <div className="bg-gray-50 flex justify-around py-2 mx-16">
      <div className="flex justify-center items-center">
        <BsCloudSun className="mx-2" />
        Rise: <span className="font-bold mx-2">04:50 AM</span>
      </div>
      <div className="flex justify-center items-center ">
        <FiSunset className="mx-2" />
        Set: <span className="font-bold mx-2">04:50 PM</span>
      </div>
      <div className="flex justify-center items-center ">
        <AiOutlineArrowUp className="mx-2 " />
        High: <span className="font-bold mx-2">21°C</span>
      </div>
      <div className="flex justify-center items-center">
        <AiOutlineArrowDown className="mx-2" />
        Low: <span className="font-bold mx-2">10°C</span>
      </div>
    </div>
  );
};

export default infoWeather;
