import React from "react";
import { formatToLocalTime } from "../services/weatherService";
import { AiOutlineCloud } from "react-icons/ai";
import { MdGrain } from "react-icons/md";

const CityInfo = ({
  weather: { dt, timezone, name, details, humidity, temp, country },
}) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-between items-center">
        <img
          className="w-60 h-60"
          src="https://freepngimg.com/thumb/weather/23525-5-weather-free-download.png"
          alt=""
        />
        <div className="flex flex-col   w-full p-5">
          <h1 className="text-6xl font-bold font-mono">
            {`${temp.toFixed()}`}°c
          </h1>
          <h1 className="text-lg  font-medium font-main my-5">
            {formatToLocalTime(dt, timezone)}{" "}
          </h1>
          <hr />
          <p className="flex mx-1 mt-3">
            {" "}
            <AiOutlineCloud size={30} />
            <h1 className="mx-2"> {`${details}`}</h1>
          </p>
          <p className="flex mx-1 my-1">
            <MdGrain size={30} />
            <h1 className="mx-2"> {`${humidity}`}%</h1>
          </p>
          <div className=" flex justify-center items-center w-full truncate">
            <img
              className="relative bg-cover w-full mt-10 h-32 rounded-3xl opacity-50"
              src="https://i.pinimg.com/600x315/66/81/ee/6681eea42fc9c35376a8171f0f82e97f.jpg"
              alt=""
            />
            <h1 className="absolute text-gray-500 text-4xl font-semibold truncate">
              {name},{country}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityInfo;
