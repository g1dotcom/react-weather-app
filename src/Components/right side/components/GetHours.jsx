import React from "react";
import { iconUrlFromCode } from "../../../services/weatherService";

const GetHours = ({ items, units, darkMode }) => {
  return (
    <div className="h-full my-6  mt-2 mx-2 flex-wrap flex max-w-full justify-center sm:justify-center items-center ">
      {items.map((item) => (
        <div
          className={`${
            darkMode
              ? "dark-right-button shadow-xl shadow-gray-900 text-white"
              : "bg-white"
          } xl:mx-4 2xl:py-16 xl:px-6  mb-4 text-xs  md:text-md 2xl:text-xl lg:text-md mx-1 sm:mx-2 sm:px-4 sm:py-8 p-2 rounded-3xl flex  flex-col justify-between items-center hover:shadow-sm shadow-xl shadow-gray-600 hover:scale-105 transition-all duration-500`}
        >
          <h1>{item?.title}</h1>
          <img src={iconUrlFromCode(item.icon)} alt="" />
          <p>
            {`${item.temp.toFixed()}`} {units === "metric" ? "°C" : "°F"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GetHours;
