import React from "react";

//components
import Left from "../Components/Left";
import Right from "../Components/Right";

const Main = () => {
  return (
    <div className="flex justify-center rounded-3xl  h-full shadow-2xl shadow-slate-600">
      <div className=" w-2/6 rounded-l-3xl bg-white">
        <Left />
      </div>
      <div className="w-4/6 rounded-r-3xl  bg-slate-100">
        <Right />
      </div>
    </div>
  );
};

export default Main;
