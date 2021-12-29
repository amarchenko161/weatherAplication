import React from "react";
import firebaseInstans from "../../firebaseConfig";
import { useHistory } from "react-router-dom";
import "./ProfileComponent.scss";
import MyComponent from "../MainPageComponent/MainPageComponent";
import CurrentCityWeatherComponent from "../CurrentCityWeatherComponent/CurrentCityWeatherComponent";

const ProfileComponent = () => {
  const user = firebaseInstans.auth.currentUser;
  const history = useHistory();
  const logOut = () => {
    firebaseInstans.auth
      .signOut()
      .then((res) => {
        localStorage.removeItem("token");
      })
      .catch((error) => {
        // some err
      });
    history.push("/");
  };

  return (
    // <div className="display-hello-user">
    //   <div>
    //     Hello <span className="current-name">{user.email} </span>{" "}
    //   </div>
    //   <button onClick={() => logOut()}>Log Out</button>
    //   </div>
    <div>
      <MyComponent />
      <CurrentCityWeatherComponent />
    </div>
  );
};

export default ProfileComponent;
