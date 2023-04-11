import React, { useEffect, useState } from "react";

//components
import Left from "../Components/left side/Left";
import Right from "../Components/right side/Right";
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
    <div className="flex lg:flex-row flex-col justify-center rounded-3xl max-w-full   max-h-full shadow-2xl shadow-slate-600">
      <div className=" w-full lg:w-1/6 md:rounded-l-3xl bg-main-left">
        {weather && (
          <Left
            setQuery={setQuery}
            units={units}
            setUnits={setUnits}
            weather={weather}
          />
        )}
      </div>
      <div className="w-full lg:w-5/6 md:rounded-r-3xl  bg-main-right">
        {weather && (
          <Right
            units={units}
            setUnits={setUnits}
            setQuery={setQuery}
            weather={weather}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
