import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

const getDay = ({ items }) => {
  return (
    <div className="h-64 my-16 mx-10 flex justify-between flex-wrap">
      {items.map((item) => (
        <div className="bg-white w-1/8 p-10 rounded-3xl flex flex-col justify-between items-center hover:shadow-sm shadow-xl shadow-gray-600 hover:scale-105 transition-all duration-500 hover:">
          <h1>{item.title}</h1>
          <img src={iconUrlFromCode(item.icon)} alt="" />
          <p>{`${item.temp.toFixed()}°C`}</p>
        </div>
      ))}
    </div>
  );
};

export default getDay;
