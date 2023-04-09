import React from "react";
import { iconUrlFromCode } from "../../../services/weatherService";

const getDay = ({ items }) => {
  return (
    <div className="h-64 my-12 mx-2 flex max-w-full    justify-center sm:justify-between   items-center">
      {items.map((item) => (
        <div className="bg-white xl:mx-4 xl:py-16 xl:px-6  mb-4  mx-2 sm:px-4 sm:py-8 p-2 rounded-3xl flex  flex-col justify-between items-center hover:shadow-sm shadow-xl shadow-gray-600 hover:scale-105 transition-all duration-500 ">
          <h1>{item.title}</h1>
          <img src={iconUrlFromCode(item.icon)} alt="" />
          <p>{`${item.temp.toFixed()}°C`}</p>
        </div>
      ))}
    </div>
  );
};

export default getDay;
