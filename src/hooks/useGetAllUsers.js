import { useState, useEffect } from "react";
import { getAllUsers } from "../api/users/getAllUsers";

export const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(getAllUsers);
  }, []);
  return users;
};
