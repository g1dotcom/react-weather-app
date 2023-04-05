import React from "react";

//components
import CityInput from "./CityInput";

const Left = () => {
  return (
    <div className="h-full w-full rounded-3xl">
      <div className="h-1/6 flex items-center justify-center rounded-3xl  p-5">
        <CityInput />
      </div>
      <div className="h-4/6 bg-red-200"></div>
      <div className="h-1/6 rounded-3xl  "></div>
    </div>
  );
};

export default Left;
