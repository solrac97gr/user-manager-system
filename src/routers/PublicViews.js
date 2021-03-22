import React from "react";
import { Router } from "@reach/router";
import { routesName } from "./routesName";
//PublicViews
import { Login } from "../views/Login";
import { Register } from "../views/Register";

export const PublicViews = () => {
  return (
    <Router id="PublicViews">
      <Login path={routesName.Login.path} />
      <Register path={routesName.Register.path} />
    </Router>
  );
};
