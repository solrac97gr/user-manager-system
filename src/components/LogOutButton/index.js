import React from "react";
import { LogOutStyledButton } from "./styles";
import Cookies from "js-cookie";
import { app } from "../../api/firebase";

export const LogOutButton = () => {
  const handleLogOut = async () => {
    await Cookies.remove("token");
    await app.auth().signOut().then(() =>{
      window.location.reload();
    });
    
  };
  return (
    <LogOutStyledButton
      content="Log Out"
      type="primary"
      onClick={handleLogOut}
    />
  );
};
