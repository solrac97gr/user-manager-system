import React from "react";
import { StyledButton } from "./styles";

export const CustomButton = (props) => {
  return <StyledButton {...props}>{props.content}</StyledButton>;
};