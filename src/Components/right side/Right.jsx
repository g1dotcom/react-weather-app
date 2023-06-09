import React, { useEffect, useState } from "react";
//components
import CityButtons from "./components/CityButtons";
import GetDay from "./components/getDay";
import InfoWeather from "./components/infoWeather";
import GetHours from "./components/GetHours";
//react spring
import { useTransition, animated } from "react-spring";

import CityBox from "./components/CityBox";

const Right = ({
  weather,
  setQuery,
  units,
  setUnits,
  handleDarkMode,
  darkMode,
}) => {
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
      <CityButtons
        setQuery={setQuery}
        handleDarkMode={handleDarkMode}
        darkMode={darkMode}
      />
      <div className="flex justify-center items-center 2xl:my-4 mt-2 mb-2">
        <button
          className={` cursor-pointer hover:opacity-50 ${
            selected
              ? "text-gray-500 underline underline-offset-8 shadow-xl  font-main shadow-slate-300  2xl:text-xl text-sm font-bold "
              : "text-gray-500 font-main  text-md 2xl:text-xl text-sm font-bold "
          } ${darkMode ? "text-white" : "text-black"} `}
          onClick={handleclick}
        >
          DAILY FORECAST
        </button>
        <span className="mx-5">||</span>
        <button
          className={`cursor-pointer hover:opacity-50 ${
            selected
              ? "text-gray-500 font-main 2xl:text-xl text-sm font-bold  "
              : "text-gray-500 underline underline-offset-8 shadow-xl font-bold font-main shadow-slate-300 2xl:text-xl text-sm  "
          } ${darkMode ? "text-white" : "text-black"}`}
          onClick={handleclick}
        >
          HOURLY FORECAST{" "}
        </button>
      </div>

      <div className="w-full h-full flex justify-center">
        {transitions((style, item) =>
          item ? (
            <animated.div style={style}>
              <GetDay items={weather.daily} units={units} darkMode={darkMode} />
            </animated.div>
          ) : (
            <animated.div style={style}>
              <GetHours
                items={weather.hourly}
                units={units}
                darkMode={darkMode}
              />
            </animated.div>
          )
        )}
      </div>

      <div className="flex items-center justify-center">
        <InfoWeather weather={weather} darkMode={darkMode} />
      </div>
      <div className="mt-10 w-full h-full ">
        <CityBox
          weather={weather}
          units={units}
          setUnits={setUnits}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default Right;
