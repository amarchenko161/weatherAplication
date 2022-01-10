import React from "react";

const AuthContext = React.createContext();

const useAuthContext = () => React.useContext(AuthContext);

export { AuthContext, useAuthContext };
