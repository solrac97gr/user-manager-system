import React from "react";
import { StyledManageUsersButton } from "./styles";
import { useNavigate } from "@reach/router";

export const ManageUsersButton = ({action,content}) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/users");
  };
  return (
    <StyledManageUsersButton
      content={content?content:"Manage Users"}
      type="danger"
      onClick={() =>action?action():handleRedirect()}
    />
  );
};
