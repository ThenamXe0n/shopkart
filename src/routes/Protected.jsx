import React from "react";
import { Navigate } from "react-router-dom";
import { path } from "./path";

const Protected = ({ children }) => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to={path.HOME} replace={true} />;
  }
  return <>{ children }</>;
};

export default Protected;
