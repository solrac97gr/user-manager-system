import { useState, useEffect } from "react";

export const useAdmin = (userId) => {
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    if (userId) {
      setAdmin(true);
    } else {
      setAdmin(true);
    }
    //TODO:Call to the api for ask for user permissions
  }, [userId]);
  return isAdmin;
};
