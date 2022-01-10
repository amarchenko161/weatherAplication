import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LogInComponent from "./Components/LogInComponent/LogInComponent";
import ProfileComponent from "./Components/ProfileComponent/ProfileComponent";
import RegistrationComponent from "./Components/RegestrationComponent/RegistrationComponent";
//import { AuthContext, useAuthContext } from "./context/AuthContext";
//import firebaseInstans from "./firebaseConfig";

const App = () => {
  // const createNewUser = () => {
  //   useAuthContext = firebaseInstans.auth.currentUser;
  // };

  return (
    // <AuthContext.Provider value={createNewUser}>
    <Switch>
      <Route path="/singup">
        <RegistrationComponent />
      </Route>
      <Route path="/singin">
        <LogInComponent />
      </Route>
      <Route
        path="/profile"
        render={() =>
          localStorage.getItem("token") ? (
            <ProfileComponent />
          ) : (
            <Redirect to="/" />
          )
        }
      ></Route>
      <Redirect from="/" to="/singin" />
    </Switch>
    // </AuthContext.Provider>
  );
};

export default App;
