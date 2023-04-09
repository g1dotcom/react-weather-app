import React, { useEffect, useState } from "react";
//components
import CityButtons from "./components/CityButtons";
import GetDay from "./components/getDay";
import InfoWeather from "./components/infoWeather";
import GetHours from "./components/GetHours";
//react spring
import { useTransition, animated } from "react-spring";
import CityPercentage from "./components/CityPercentage";

const Right = ({ weather, setQuery, units, setUnits }) => {
  const [selected, setSelected] = useState("true");
  const [change, setChange] = useState("false");

  const handleclick = () => {
    setSelected(!selected);
    setChange(change);
  };
  //transitions
  useEffect(() => {
    const transition = setTimeout(() => setSelected(true), 1000);
    return () => clearTimeout(transition);
  }, []);
  //transitions
  const transitions = useTransition(selected, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <CityButtons setQuery={setQuery} />
      <div className="flex justify-center items-center 2xl:mt-10 ">
        <button
          className={` cursor-pointer hover:opacity-50 ${
            selected
              ? "text-gray-500 underline underline-offset-8 shadow-xl font-bold font-main shadow-slate-300"
              : "text-gray-400 font-main"
          }`}
          onClick={handleclick}
        >
          DAILY FORECAST{" "}
        </button>
        <span className="mx-5">||</span>
        <button
          className={`cursor-pointer hover:opacity-50 ${
            selected
              ? "text-gray-500 font-main "
              : "text-gray-500 underline underline-offset-8 shadow-xl font-bold font-main shadow-slate-300"
          }`}
          onClick={handleclick}
        >
          HOURLY FORECAST{" "}
        </button>
      </div>

      <div className="">
        {transitions((style, item) =>
          item ? (
            <animated.div style={style}>
              <GetDay items={weather.daily} />
            </animated.div>
          ) : (
            <animated.div style={style}>
              <GetHours items={weather.hourly} />
            </animated.div>
          )
        )}
      </div>

      <div className="">
        <InfoWeather weather={weather} />
      </div>
      <div className="mt-10 flex flex-wrap ">
        <CityPercentage weather={weather} units={units} setUnits={setUnits} />
      </div>
    </div>
  );
};

export default Right;
