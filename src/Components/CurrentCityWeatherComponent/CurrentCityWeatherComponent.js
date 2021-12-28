import React, { useEffect, useState } from 'react';

const CurrentCityWeatherComponent = () => {
  const apiKey = 'c80c5631988234bf3332f153fdaff827';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

  const [apiData, setApiData] = useState({});

  let lat = 55.644466;
  let lng = 37.395744;
  //FOR WEATHER
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className='test'>
      <h3> {apiData.name} </h3>
      <img
        src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
        alt='weather status icon'
        className='weather-icon'
      />
      {kelvinToFarenheit(apiData.main.temp)}&deg; C
    </div>
  );
};

export default CurrentCityWeatherComponent;
