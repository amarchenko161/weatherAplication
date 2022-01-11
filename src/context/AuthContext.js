import React, { useEffect, useState } from "react";
import firebaseInstans from "../firebaseConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const { auth, onAuthStateChanged } = firebaseInstans;

  const setUser = (user) => {
    setCurrentUser(user.email);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user.email);
    } else {
      console.log("---------->onAuthStateChanged error");
    }
  });

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
