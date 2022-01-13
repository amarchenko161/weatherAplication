import React, { useState, useEffect } from "react";
import DailyWeatherComponent from "../DailyWeatherComponent/DailyWeatherComponent";

const CurrentDayWeatherComponent = () => {
  const [coordinates, setCoordinates] = useState({
    lng: 38.89688,
    lat: 47.23617,
  });
  const { lng, lat } = coordinates;
  const [apiData, setApiData] = useState([]);
  // key for weather
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl =
    process.env.REACT_APP_API_URL_FOR_WEEKEND +
    `${apiKey}&lat=${lat}&lon=${lng}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        ...coordinates,
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.daily);
      });
  }, []);

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

  return (
    <div className="daily-container">
      {apiData
        .map((element, index) => {
          return (
            <DailyWeatherComponent
              currentDay={element}
              key={`weather-${index}`}
              day={sortedWeekArray[index]}
            />
          );
        })
        .slice(0, -1)}
    </div>
  );
};

export default CurrentDayWeatherComponent;
