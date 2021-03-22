import React from "react";
import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";
import { Title } from "../Title";
import { StyledCard, Container } from "./styles";
import { Link } from "@reach/router";
import { routesName } from "../../routers/routesName";
import { GoogleOutlined } from "@ant-design/icons";

export const RegisterCard = () => {
  const handleRegisterWithGoogle = () => {
    alert("Google");
  };
  const handleRegister = () => {
    alert("Password");
  };
  return (
    <Container>
      <StyledCard>
        <Title content="Sign Up" />
        <span>Email</span>
        <CustomInput></CustomInput>
        <span>Password</span>
        <CustomInput></CustomInput>
        <span>Confirm Password</span>
        <CustomInput></CustomInput>
        <CustomButton
          type="primary"
          content={"Register"}
          onClick={handleRegister}
        />
        <CustomButton
          type="danger"
          content={"Google"}
          icon={<GoogleOutlined />}
          onClick={handleRegisterWithGoogle}
        />
        <div>
          <span>
            You already has an account?
            <Link to={routesName.Login.path}> Sign In</Link>
          </span>
        </div>
      </StyledCard>
    </Container>
  );
};
