import { useState, useEffect } from "react";
import { getCurrentUser } from "../api/users/getCurrentUser";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const currUser = await getCurrentUser();
      if (currUser) {
        setUser(currUser);
        setAuth(true);
      }
    };
    const token = Cookies.get("token");
    if (token) {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      const userInfo = JSON.parse(window.atob(base64));
      setUser(userInfo);
      setAuth(true);
    }
    getUser();
  }, []);
  return isAuth;
};
