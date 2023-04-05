import React from "react";
//components
import CityButtons from "./CityButtons";
import GetDay from "./getDay";
import InfoWeather from "./infoWeather";
import SelectedTime from "./SelectedTime";

const Right = () => {
  return (
    <div>
      <CityButtons />
      <SelectedTime />
      <GetDay />
      <InfoWeather />
    </div>
  );
};

export default Right;
