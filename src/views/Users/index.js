import React from "react";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { UserTable } from "../../components/UserTable";

export const Users = () => {
  const users = useGetAllUsers();
  return <UserTable users={users}></UserTable>;
};
