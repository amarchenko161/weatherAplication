import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LogInComponent from "./Components/LogInComponent/LogInComponent";
import ProfileComponent from "./Components/ProfileComponent/ProfileComponent";
import RegistrationComponent from "./Components/RegestrationComponent/RegistrationComponent";

const App = () => {
  return (
    <Switch>
      <Route path="/singup">
        <RegistrationComponent />
      </Route>
      <Route path="/singin">
        <LogInComponent />
      </Route>
      <Route path="/profile">
        <ProfileComponent />
      </Route>
      <Redirect from="/" to="/singin" />
    </Switch>
  );
};

export default App;
