import React from "react";
import "./DailyWeatherComponent.scss";

const DailyWeatherComponent = ({ currentDay, day }) => {
  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="current-day">
      <div>{day}</div>
      <div>
        {currentDay ? (
          <img
            src={`http://openweathermap.org/img/w/${currentDay.weather[0].icon}.png`}
            alt="weather status icon"
            className="weather-icon"
          />
        ) : (
          ""
        )}
      </div>
      <div>{currentDay ? kelvinToFarenheit(currentDay.temp.day) : ""}</div>
    </div>
  );
};

export default DailyWeatherComponent;
