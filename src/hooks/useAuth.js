import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuth, setAuth] = useState(false);
  let userId = "";
  useEffect(() => {
    setAuth(true);
    //TODO:Call to the api for ask for user permissions
  }, []);
  return [isAuth, userId];
};
