import React from "react";
import "./ProfileComponent.scss";
import MainPageComponent from "../MainPageComponent/MainPageComponent";
import CurrentCityWeatherComponent from "../CurrentCityWeatherComponent/CurrentCityWeatherComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const ProfileComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <MainPageComponent />
      <CurrentCityWeatherComponent />
    </div>
  );
};

export default ProfileComponent;
