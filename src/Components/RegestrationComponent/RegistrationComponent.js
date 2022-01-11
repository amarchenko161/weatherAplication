import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import classNames from "classnames";
import firebaseInstans from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";

const RegistrationComponent = () => {
  const { currentUser, setUser } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const history = useHistory();
  const [errInput, setErrInput] = useState({
    checkErrorForLogin: false,
    checkErrorForPassword: false,
    checkErrorForRepeatPassword: false,
  });

  const {
    checkErrorForLogin,
    checkErrorForPassword,
    checkErrorForRepeatPassword,
  } = errInput;

  const inpEmail = classNames({
    "border-err": checkErrorForLogin === true,
    "border-none": checkErrorForLogin === false,
  });

  const inpPassword = classNames({
    "border-err": checkErrorForPassword === true,
    "border-none": checkErrorForPassword === false,
  });

  const inpRepPassword = classNames({
    "border-err": checkErrorForRepeatPassword === true,
    "border-none": checkErrorForRepeatPassword === false,
  });

  const textErrorEmail = classNames({
    "display-error-alert": checkErrorForLogin === true,
    "hidden-error-alert": checkErrorForLogin === false,
  });

  const textErrorPassword = classNames({
    "display-error-alert": checkErrorForPassword === true,
    "hidden-error-alert": checkErrorForPassword === false,
  });

  const textErrorRepeatPassword = classNames({
    "display-error-alert": checkErrorForRepeatPassword === true,
    "hidden-error-alert": checkErrorForRepeatPassword === false,
  });

  const checkValidate = () => {
    const regExpForLogin = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regExpForPassword =
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    const flagIsErrorLoging = regExpForLogin.test(login);
    const flagIsErorPassword = regExpForPassword.test(password);
    const flagIsRepeatPassword = password === repeatPassword;

    const errors = {
      checkErrorForLogin: !flagIsErrorLoging,
      checkErrorForPassword: !flagIsErorPassword,
      checkErrorForRepeatPassword: !flagIsRepeatPassword,
    };

    setErrInput({ ...errors });
    let atLeastOneError = false;
    const objToArrErrors = Object.entries(errors);

    objToArrErrors.forEach(([key, value]) => {
      if (value === true) atLeastOneError = true;
    });

    if (!atLeastOneError) {
      createUserWithEmailAndPassword(firebaseInstans.auth, login, password)
        .then((user) => {
          localStorage.setItem("token", user.user.refreshToken);
          const userNew = firebaseInstans.auth.currentUser;
          setUser(userNew);
          history.push("/overview");
        })
        .catch((error) => {
          // some err
        });
    }
  };

  return (
    <div>
      <div className="form-container">
        <div className="login-form-content">
          <label>Email:</label>
          <span className={textErrorEmail}>Email don't correct</span>
          <input
            type="text"
            name="name"
            value={login}
            placeholder="Email"
            className={inpEmail}
            onChange={(e) => setLogin(e.target.value.trim())}
          />
          <label>Password:</label>
          <span className={textErrorPassword}>Password don't correct</span>
          <input
            type="password"
            value={password}
            name="name"
            placeholder="Password"
            className={inpPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Repeat password:</label>
          <span className={textErrorRepeatPassword}>
            Password's don't match
          </span>
          <input
            type="password"
            value={repeatPassword}
            name="name"
            className={inpRepPassword}
            placeholder="Repeat password"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div className="link-style">
            <button onClick={() => checkValidate()}>Enter</button>
            <Link to="/singin">LogIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
