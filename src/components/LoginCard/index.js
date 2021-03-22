import React from "react";
import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";
import { Title } from "../Title";
import { StyledCard, Container } from "./styles";
import { Link } from "@reach/router";
import { routesName } from "../../routers/routesName";
import { GoogleOutlined } from "@ant-design/icons";

export const LoginCard = () => {
  const handleLoginWithGoogle = () => {
    alert("Google");
  };
  const handleLogin = () => {
    alert("Password");
  };
  return (
    <Container>
      <StyledCard>
        <Title content="Sing In" />
        <span>Email</span>
        <CustomInput></CustomInput>
        <span>Password</span>
        <CustomInput></CustomInput>
        <CustomButton
          type="primary"
          content={"Register"}
          onClick={handleLogin}
        />
        <CustomButton
          type="danger"
          content={"Google"}
          icon={<GoogleOutlined />}
          onClick={handleLoginWithGoogle}
        />
        <div>
          <span>
            You do not have an account?
            <Link to={routesName.Register.path}> Sign Up</Link>
          </span>
        </div>
      </StyledCard>
    </Container>
  );
};
