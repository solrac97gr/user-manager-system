import { useState, useEffect } from "react";
import { getCurrentUser } from "../api/users/getCurrentUser";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [isAuth, setAuth] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      const currUser = await getCurrentUser();
      if (currUser) {
        setAuth(true);
      }
    };
    const token = Cookies.get("token");
    if (token) {
      setAuth(true);
    }
    getUser();
  }, []);
  return isAuth;
};
