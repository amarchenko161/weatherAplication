import React, { useEffect, useState } from "react";
import "./CityContainerComponent.scss";

const CityContainerComponent = ({ city }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL + `${apiKey}&q=${city}`;
  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  const [apiData, setApiData] = useState({});
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [city, apiUrl]);

  return (
    <div className="weather-container">
      {apiData.main ? (
        <div className="weather-content">
          {apiData.name}
          <img
            src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
            alt="weather status icon"
            className="weather-icon"
          />
          {kelvinToFarenheit(apiData.main.temp)}&deg; C
          <strong>{apiData.weather[0].main}</strong>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default CityContainerComponent;
