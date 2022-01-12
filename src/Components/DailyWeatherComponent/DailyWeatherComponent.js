import React, { useState, useEffect } from "react";
import moment from "moment";
import "./DailyWeatherComponent.scss";

const DailyWeatherComponent = () => {
  const [lng, setLng] = useState(38.89688);
  const [lat, setLat] = useState(47.23617);
  const [apiData, setApiData] = useState([]);
  // key for weather
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${apiKey}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("---------->data", data);
        setApiData(data.daily);
      });
  }, []);

  console.log("---------->apiData", apiData[0]);

  const weekArray = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  const weekdayName = new Date().toLocaleString("ru", { weekday: "long" });
  let indexOfDay = weekArray.indexOf(
    weekdayName.slice(0, 1).toUpperCase() + weekdayName.slice(1)
  );

  const sortedWeekArray = [];

  for (let i = 0; i < 7; i++) {
    sortedWeekArray.push(weekArray[indexOfDay]);
    if (indexOfDay === 6) {
      indexOfDay = 0;
    } else {
      indexOfDay++;
    }
  }

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="daily-container">
      <div className="current-day">
        <div>{sortedWeekArray[0]}</div>
        <div>
          {apiData[0] ? (
            <img
              src={`http://openweathermap.org/img/w/${apiData[0].weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          ) : (
            ""
          )}
        </div>
        <div>{apiData[0] ? kelvinToFarenheit(apiData[0].temp.day) : ""}</div>
      </div>
      <div className="current-day">
        <div>{sortedWeekArray[1]}</div>
        <div>
          {apiData[1] ? (
            <img
              src={`http://openweathermap.org/img/w/${apiData[1].weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          ) : (
            ""
          )}
        </div>
        <div>{apiData[1] ? kelvinToFarenheit(apiData[1].temp.day) : ""}</div>
      </div>
      <div className="current-day">
        <div>{sortedWeekArray[2]}</div>
        <div>
          {apiData[2] ? (
            <img
              src={`http://openweathermap.org/img/w/${apiData[2].weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          ) : (
            ""
          )}
        </div>
        <div>{apiData[2] ? kelvinToFarenheit(apiData[2].temp.day) : ""}</div>
      </div>
      <div className="current-day">
        <div>{sortedWeekArray[3]}</div>
        <div>
          {apiData[3] ? (
            <img
              src={`http://openweathermap.org/img/w/${apiData[3].weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          ) : (
            ""
          )}
        </div>
        <div>{apiData[3] ? kelvinToFarenheit(apiData[3].temp.day) : ""}</div>
      </div>
      <div className="current-day">
        <div>{sortedWeekArray[4]}</div>
        <div>
          {apiData[4] ? (
            <img
              src={`http://openweathermap.org/img/w/${apiData[4].weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          ) : (
            ""
          )}
        </div>
        <div>{apiData[4] ? kelvinToFarenheit(apiData[4].temp.day) : ""}</div>
      </div>
      <div className="current-day">
        <div>{sortedWeekArray[5]}</div>
        <div>
          {apiData[5] ? (
            <img
              src={`http://openweathermap.org/img/w/${apiData[5].weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          ) : (
            ""
          )}
        </div>
        <div>{apiData[5] ? kelvinToFarenheit(apiData[5].temp.day) : ""}</div>
      </div>
      <div className="current-day">
        <div>{sortedWeekArray[6]}</div>
        <div>
          {apiData[6] ? (
            <img
              src={`http://openweathermap.org/img/w/${apiData[6].weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          ) : (
            ""
          )}
        </div>
        <div>{apiData[6] ? kelvinToFarenheit(apiData[6].temp.day) : ""}</div>
      </div>
    </div>
  );
};

export default DailyWeatherComponent;
