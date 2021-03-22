import React from "react";
import { CustomButton } from "../CustomButton";
import { useNavigate } from "@reach/router";

export const ActionEditButton = (userId) => {
  const navigate = useNavigate();
  const handleRedirectToEdit = (userId) => {
    navigate(`profile/${userId.userId}`);
  };
  return (
    <CustomButton
      content="Edit"
      onClick={() => handleRedirectToEdit(userId)}
      type="primary"
    ></CustomButton>
  );
};
