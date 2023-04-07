import React, { useEffect, useState } from "react";

//components
import Left from "../Components/Left";
import Right from "../Components/Right";
import getFormattedWeatherData from "../services/weatherService";

const Main = () => {
  const [query, setQuery] = useState({ q: "izmir" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="flex justify-center rounded-3xl  h-full shadow-2xl shadow-slate-600">
      <div className=" w-1/6 rounded-l-3xl bg-main-left">
        {weather && <Left weather={weather} />}
      </div>
      <div className="w-5/6 rounded-r-3xl  bg-main-right">
        {weather && <Right weather={weather} />}
      </div>
    </div>
  );
};

export default Main;
