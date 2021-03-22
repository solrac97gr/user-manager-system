import React from "react";
import { Router } from "@reach/router";
import { routesName } from "./routesName";
//PublicViews
import { Profile } from "../views/Profile";

export const UserViews = () => {
  return (
    <Router id="UserViews">
      <Profile path={routesName.Profile.path} />
    </Router>
  );
};
