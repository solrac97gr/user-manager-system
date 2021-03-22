import { useState, useEffect } from "react";

export const useAdmin = (userId) => {
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    //TODO:Call to the api for ask for user permissions
    setAdmin(true)
  }, []);
  return !isAdmin
};
