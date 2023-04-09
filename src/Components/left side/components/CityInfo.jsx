import React from "react";
import { formatToLocalTime } from "../../../services/weatherService";
import { AiOutlineCloud } from "react-icons/ai";
import { MdGrain } from "react-icons/md";

const CityInfo = ({
  weather: { dt, timezone, name, details, humidity, temp, country },
}) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-between items-center">
        {" "}
        <div className="weather-card sunny   mt-10 bg-gray-500 ">
          <div className="sun"></div>

          <div className="cloud ">
            {details === "Rain" ? (
              <div>
                <div className="animasyon my-4 mx-4"></div>
                <div className="animasyon my-8 mx-8"></div>
                <div className="animasyon my-12 mx-12"></div>
                <div className="animasyon my-8 mx-16"></div>
              </div>
            ) : null}
          </div>
          <div className="info font-main">
            <h2>{details}</h2>

            <h1 className="text-2xl font-medium font-main font-mono">
              <span className="text-lg font-main"> {name}</span>{" "}
              {`${temp.toFixed()}`}°c
            </h1>
          </div>
        </div>
        <div className="flex flex-col   w-full p-5">
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
              className="relative bg-cover w-full mt-10 h-32 rounded-3xl "
              src="https://i.pinimg.com/600x315/66/81/ee/6681eea42fc9c35376a8171f0f82e97f.jpg"
              alt=""
            />
            <h1 className="absolute mb-10 text-gray-500 text-2xl font-semibold truncate">
              {name},{country}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityInfo;
