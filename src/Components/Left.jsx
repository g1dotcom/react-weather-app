import React from "react";

//components
import CityInput from "./CityInput";
import CityInfo from "./CityInfo";

const Left = ({ weather, setQuery }) => {
  return (
    <div className="h-full w-full rounded-3xl">
      <div className="h-1/6 flex items-center justify-center rounded-3xl  p-5">
        <CityInput setQuery={setQuery} />
      </div>
      <div className="h-4/6 ">
        <CityInfo weather={weather} />
      </div>
      <div className="h-1/6 rounded-3xl  "></div>
    </div>
  );
};

export default Left;
