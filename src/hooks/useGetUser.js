import { useState, useEffect } from "react";
import { getOneUserById } from "../api/users/getOneUserById";
import { getUserProfile } from "../api/users/getUserProfile";
import Cookies from "js-cookie";
import {app} from '../api/firebase'

export const useGetUser = (userId) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      let user;
      if (userId) {
        user = await getOneUserById(userId);
        setUser(user);
      } else {
        const token = Cookies.get("token");
        if (token) {
          const base64Url = token.split(".")[1];
          const base64 = base64Url.replace("-", "+").replace("_", "/");
          const userInfo = JSON.parse(window.atob(base64));
          const profile = await getUserProfile(userInfo.email);
          const userFirebaseProfile = await app.auth().currentUser;
          setUser({ userInfo, ...profile,...userFirebaseProfile });
        }
      }
    };
    getUser();
  }, [userId]);
  return user;
};
