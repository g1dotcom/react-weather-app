import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

const GetHours = ({ items }) => {
  return (
    <div className="h-64 my-16 mx-10 flex justify-between flex-wrap">
      {items.map((item) => (
        <div className="bg-white w-1/6 p-10 rounded-3xl flex flex-col justify-between items-center shadow-xl shadow-gray-600 ">
          <h1>{item?.title}</h1>
          <img src={iconUrlFromCode(item.icon)} alt="" />
          <p>{`${item.temp.toFixed()}°C`}</p>
        </div>
      ))}
    </div>
  );
};

export default GetHours;
