import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Auth from "../../utils/auth";

const PrivateRoutes = () => {
  if (Auth.loggedIn()) {
    return <Outlet />;
  } else {
    return <Navigate to="/join" replace={true} />;
  }
};

export default PrivateRoutes;
