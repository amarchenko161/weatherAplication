import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./MainPageComponent.scss";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MainPageComponent = () => {
  //state for map
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [coordinates, setCoordinates] = useState({
    lng: 38.89688,
    lat: 47.23617,
  });
  const { lng, lat } = coordinates;
  const [zoom, setZoom] = useState(11);
  // state for weather
  const [apiData, setApiData] = useState({});
  // key for weather
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl =
    process.env.REACT_APP_API_URL + `${apiKey}&lat=${lat}&lon=${lng}`;

  //FOR WEATHER
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  // FOR MAP
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  navigator.geolocation.getCurrentPosition(
    // Функция обратного вызова при успешном извлечении локации
    function (position) {
      setCoordinates({
        ...coordinates,
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      });
    }
  );

  //FUNC FOR WEATHER
  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="main-page-container">
      <div ref={mapContainer} className="map-container" />
      <div className="page-weather-container">
        {apiData.name}
        <div className="container">
          {apiData.main ? (
            <div className="card-body">
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />
              <div className="main-info-card">
                {kelvinToFarenheit(apiData.main.temp)}&deg; C
                <strong>
                  Min:
                  {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                </strong>
                <strong>
                  Max:
                  {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                </strong>
                <strong>{apiData.weather[0].main}</strong>
              </div>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPageComponent;
