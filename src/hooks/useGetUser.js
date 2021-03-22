import { useState, useEffect } from "react";
import { getOneUserById } from "../api/users/getOneUserById";
import { getCurrentUser } from "../api/users/getCurrentUser";

export const useGetUser = (userId) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (userId) {
      setUser(getOneUserById(userId));
    } else {
      setUser(getCurrentUser());
    }
  }, [userId]);
  return user;
};
