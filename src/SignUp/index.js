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
} from "../Login/StyledElements";

import { FirstNameContainer, LastNameContainer } from "./StyledElements";

import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
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

  const handleInputChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleRegister = () => {
    if (
      !inputValues.email &&
      !inputValues.password &&
      !inputValues.firstName &&
      !inputValues.lastName
    )
      return;
    setIsLoading(true);

    localStorage.setItem("email", inputValues.email);
    localStorage.setItem("password", inputValues.password);
    setIsLoading(false);
    history.push("/");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    handleRegister();
  };

  return (
    <Wrapper>
      <Container>
        <LoginContainer>
          <Header>
            <Title>Register your account</Title>
          </Header>
          <Form>
            <FirstNameContainer>
              <Input
                type="text"
                name="firstName"
                required
                value={inputValues.firstName}
                onChange={handleInputChange}
                autoFocus
              />
              <Label>First Name</Label>
              {isSubmitted && !inputValues.firstName ? (
                <ValidationMessage>Please enter your firstname !</ValidationMessage>
              ) : null}
            </FirstNameContainer>
            <LastNameContainer>
              <Input
                type="text"
                name="lastName"
                required
                value={inputValues.lastName}
                onChange={handleInputChange}
              />
              <Label>Last Name</Label>
              {isSubmitted && !inputValues.lastName ? (
                <ValidationMessage>Please enter your lastname !</ValidationMessage>
              ) : null}
            </LastNameContainer>
            <EmailContainer>
              <Input
                type="text"
                name="email"
                required
                value={inputValues.email}
                onChange={handleInputChange}
              />
              <Label>Email</Label>
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
                onChange={handleInputChange}
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
              {isLoading ? "Signing Up" : "Sign Up"}
            </LoginButton>
          </Form>
          <Footer>
            <Message>Already have an account?</Message>
            <SignupButton onClick={() => history.push("/")}>Log In</SignupButton>
          </Footer>
        </LoginContainer>
      </Container>
    </Wrapper>
  );
};

export default SignUpPage;
