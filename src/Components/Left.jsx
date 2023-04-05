import React from "react";

//components
import CityInput from "./CityInput";

const Left = () => {
  return (
    <div className="h-full w-full">
      <div className="h-1/6 flex items-center justify-center  p-5">
        <CityInput />
      </div>
      <div className="h-4/6 bg-red-200"></div>
      <div className="h-1/6 bg-amber-300"></div>
    </div>
  );
};

export default Left;
