import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import classNames from "classnames";
import firebaseInstans from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
import "./LogInComponent.scss";

const LogInComponent = () => {
  const { currentUser, setUser } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [errInput, setErrInput] = useState({
    checkErrorForLogin: false,
    checkErrorForPassword: false,
  });
  const { checkErrorForLogin, checkErrorForPassword } = errInput;

  const inpEmail = classNames({
    "border-err": checkErrorForLogin === true,
    "border-none": checkErrorForLogin === false,
  });

  const inpPassword = classNames({
    "border-err": checkErrorForPassword === true,
    "border-none": checkErrorForPassword === false,
  });

  const textErrorEmail = classNames({
    "display-error-alert": checkErrorForLogin === true,
    "hidden-error-alert": checkErrorForLogin === false,
  });

  const textErrorPassword = classNames({
    "display-error-alert": checkErrorForPassword === true,
    "hidden-error-alert": checkErrorForPassword === false,
  });

  const checkValidate = async () => {
    const regExpForLogin = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regExpForPassword =
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    const flagIsErrorLoging = regExpForLogin.test(login);
    const flagIsErorPassword = regExpForPassword.test(password);

    const errors = {
      checkErrorForLogin: !flagIsErrorLoging,
      checkErrorForPassword: !flagIsErorPassword,
    };

    setErrInput({ ...errors });
    let atLeastOneError = false;
    const objToArrErrors = Object.entries(errors);

    objToArrErrors.forEach(([key, value]) => {
      if (value === true) atLeastOneError = true;
    });

    if (!atLeastOneError) {
      signInWithEmailAndPassword(firebaseInstans.auth, login, password)
        .then((user) => {
          localStorage.setItem("token", user.user.refreshToken);
          const userNew = firebaseInstans.auth.currentUser;
          setUser(userNew);
          history.push("/overview");
        })
        .catch((error) => {
          // Handle error.
        });
    }
  };

  return (
    <div className="form-container">
      <div className="login-form-content">
        <label>Email:</label>
        <span className={textErrorEmail}>Email don't correct</span>
        <input
          type="text"
          name="name"
          className={inpEmail}
          value={login}
          placeholder="Email"
          onChange={(e) => setLogin(e.target.value.trim())}
        />
        <label>Password:</label>
        <span className={textErrorPassword}>Password don't correct</span>
        <input
          type="password"
          value={password}
          className={inpPassword}
          name="name"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="link-style">
          <button onClick={() => checkValidate()}>Enter</button>
          <Link to="/singup">Registration</Link> 
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
