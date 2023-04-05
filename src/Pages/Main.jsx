import React from "react";

//components
import Left from "../Components/Left";
import Right from "../Components/Right";

const Main = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className=" flex-1 bg-red-400">
        <Left />
      </div>
      <div className="flex-2 bg-slate-500">
        <Right />
      </div>
    </div>
  );
};

export default Main;
