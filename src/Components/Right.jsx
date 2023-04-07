import React, { useEffect, useState } from "react";
//components
import CityButtons from "./CityButtons";
import GetDay from "./getDay";
import InfoWeather from "./infoWeather";
import GetHours from "./GetHours";
//react spring
import { useTransition, animated } from "react-spring";
import CityPercentage from "./CityPercentage";

const Right = ({ weather }) => {
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
    <div>
      <CityButtons />
      <div className="flex justify-center items-center mt-10">
        <button
          className={` cursor-pointer hover:opacity-50 ${
            selected
              ? "text-gray-500 underline underline-offset-8 shadow-xl font-medium shadow-slate-300"
              : "text-gray-400"
          }`}
          onClick={handleclick}
        >
          DAILY FORECAST{" "}
        </button>
        <span className="mx-5">||</span>
        <button
          className={`cursor-pointer hover:opacity-50 ${
            selected
              ? "text-gray-500 "
              : "text-gray-500 underline underline-offset-8 shadow-xl font-medium shadow-slate-300"
          }`}
          onClick={handleclick}
        >
          HOURLY FORECAST{" "}
        </button>
      </div>
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

      <InfoWeather weather={weather} />
      <div className="p-10">
        <CityPercentage weather={weather} />
      </div>
    </div>
  );
};

export default Right;
