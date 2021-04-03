import React, { useState } from "react";
import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";
import { Title } from "../Title";
import { StyledCard, Container } from "./styles";
import { Link } from "@reach/router";
import { routesName } from "../../routers/routesName";
import { useInputValue } from "../../hooks/useInputValue";
import { register } from "../../api/auth/register";

export const RegisterCard = () => {
  const email = useInputValue("");
  const password = useInputValue("");
  const confirmPassword = useInputValue("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    const [error, errorMessageR, user] = await register({
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });
    if (error) {
      setError(true);
      setErrorMessage(errorMessageR);
      return;
    }
    window.location.reload();
  };
  return (
    <Container>
      <StyledCard>
        <Title content="Sign Up" />
        <span>Email</span>
        <CustomInput
          value={email.value}
          onChange={email.onChange}
        ></CustomInput>
        <span>Password</span>
        <CustomInput
          value={password.value}
          onChange={password.onChange}
          type="password"
        ></CustomInput>
        <span>Confirm Password</span>
        <CustomInput
          value={confirmPassword.value}
          onChange={confirmPassword.onChange}
          type="password"
        ></CustomInput>
        <CustomButton
          type="primary"
          content={"Register"}
          onClick={handleRegister}
        />
        <div>
          {error && <small style={{ color: "red" }}>{errorMessage}</small>}
        </div>
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
