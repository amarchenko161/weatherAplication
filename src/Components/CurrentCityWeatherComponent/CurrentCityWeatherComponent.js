import React from "react";
import CityContainerComponent from "../CityContainerComponent/CityContainerComponent";
import "./CurrentCityWeatherComponent.scss";

const CurrentCityWeatherComponent = () => {
  const cities = [
    "Moscow",
    "Rostov-on-don",
    "Krasnodar",
    "Kazan",
    "Novosibirsk",
    "Sochi",
    "Volgograd",
    "Voronezh",
  ];

  return (
    <div className="additional-cities">
      {cities.map((element, index) => {
        return <CityContainerComponent city={element} key={`city-${index}`} />;
      })}
    </div>
  );
};

export default CurrentCityWeatherComponent;
