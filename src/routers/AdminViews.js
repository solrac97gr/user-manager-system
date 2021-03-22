import React from "react";
import { Router } from "@reach/router";
import { routesName } from "./routesName";
//PublicViews
import { Users } from "../views/Users";
import { Profile } from "../views/Profile";

export const AdminViews = () => {
  return (
    <Router id="AdminViews">
      <Users path={routesName.Users.path} />
      <Profile path={routesName.Profile.path} />
    </Router>
  );
};
