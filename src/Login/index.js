import React, { useState, useEffect } from "react";
import {
  Wrapper,
  LoginContainer,
  Container,
  Header,
  Title,
  Form,
  EmailContainer,
  Input,
  Label,
  PasswordContainer,
  LoginButton,
  SignupButton,
  Message,
  Footer,
  LogoContainer,
  Image,
  ValidationMessage,
  ErrorMessage,
} from "./StyledElements";

import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("./welcomepage");
    }
  }, []);

  const handleEmailInputChange = (event) => {
    setInputValues({ ...inputValues, email: event.target.value });
  };

  const handlePasswordInputChange = (event) => {
    setInputValues({ ...inputValues, password: event.target.value });
  };

  const handleLogin = () => {
    if (!inputValues.email && !inputValues.password) return;
    setIsLoading(true);

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email === inputValues.email && password === inputValues.password) {
      setIsLoading(false);
      history.push("/welcomepage");
      localStorage.setItem("isVerified", true);
    } else {
      setIsLoading(false);
      setErrorMessage("User doesnot exist");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    handleLogin();
  };

  return (
    <Wrapper>
      <Container>
        <LoginContainer>
          <Header>
            <Title>Login to Password Vault</Title>
          </Header>
          <Form>
            <EmailContainer>
              <Input
                type="text"
                name="email"
                required
                value={inputValues.email}
                onChange={handleEmailInputChange}
                autoFocus
              />
              <Label>Work Email</Label>
              {isSubmitted && !inputValues.email ? (
                <ValidationMessage>Please enter your email address !</ValidationMessage>
              ) : null}
            </EmailContainer>
            <PasswordContainer>
              <Input
                type="password"
                name="password"
                required
                value={inputValues.password}
                onChange={handlePasswordInputChange}
              />
              <Label>Password</Label>
              {isSubmitted && !inputValues.password ? (
                <ValidationMessage>Please enter your password !</ValidationMessage>
              ) : null}
            </PasswordContainer>
            {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
            <LoginButton onClick={handleFormSubmit} style={{ opacity: isLoading ? 0.6 : 1 }}>
              {isLoading ? (
                <i
                  class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"
                  style={{ fontSize: "20px" }}
                ></i>
              ) : null}
              {isLoading ? "Logging In" : "Log In"}
            </LoginButton>
          </Form>
          <Footer>
            <Message>Don't have an account?</Message>
            <SignupButton onClick={() => history.push("/signup")}>Sign Up</SignupButton>
          </Footer>
        </LoginContainer>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
