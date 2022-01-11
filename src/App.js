import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import NavigationBarComponent from "./Components/NavigationBarComponent/NavigationBarComponent";
import LogInComponent from "./Components/LogInComponent/LogInComponent";
import RegistrationComponent from "./Components/RegestrationComponent/RegistrationComponent";
import { AuthProvider } from "./context/AuthContext";
import MainPageComponent from "./Components/MainPageComponent/MainPageComponent";
import CurrentCityWeatherComponent from "./Components/CurrentCityWeatherComponent/CurrentCityWeatherComponent";

const App = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/singup">
          <RegistrationComponent />
        </Route>
        <Route path="/singin">
          <LogInComponent />
        </Route>
        <Route
          path="/overview"
          render={() =>
            localStorage.getItem("token") ? (
              <>
                <HeaderComponent />
                <NavigationBarComponent />
                <MainPageComponent />
                <CurrentCityWeatherComponent />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        ></Route>
        <Route
          path="/location"
          render={() =>
            localStorage.getItem("token") ? (
              <>
                <HeaderComponent />
                <NavigationBarComponent />
                <MainPageComponent />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        ></Route>
        <Route
          path="/favorites"
          render={() =>
            localStorage.getItem("token") ? (
              <>
                <HeaderComponent />
                <NavigationBarComponent />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        ></Route>
        <Redirect from="/" to="/singin" />
      </Switch>
    </AuthProvider>
  );
};

export default App;
