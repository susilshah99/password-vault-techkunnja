import React, { useState } from "react";
import { ModalWrapper, Modal } from "./StyledElements";
import {
  Header,
  Title,
  Form,
  EmailContainer,
  Input,
  Label,
  PasswordContainer,
  LoginButton,
  ValidationMessage,
  Footer,
  SignupButton,
} from "../Login/StyledElements";

import { useHistory } from "react-router-dom";
var CryptoJS = require("crypto-js");

const AddPassword = (props) => {
  const [inputValues, setInputValues] = useState({ accountname: "", email: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { setEncryptedData, setIsOpenModal, encryptedData } = props;

  const handleInputChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleEncryption = () => {
    var ciphertext = CryptoJS.AES.encrypt(inputValues.password, "secret key 123").toString();
    setEncryptedData([
      ...encryptedData,
      { accountname: inputValues.accountname, password: ciphertext, email: inputValues.email },
    ]);
    setIsOpenModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    handleEncryption();
  };

  return (
    <ModalWrapper>
      <Modal>
        <Header>
          <Title>Add Password to Vault</Title>
        </Header>
        <Form>
          <EmailContainer>
            <Input
              type="text"
              name="accountname"
              required
              value={inputValues.accountname}
              onChange={handleInputChange}
              autoFocus
            />
            <Label>Account Name</Label>
            {isSubmitted && !inputValues.accountname ? (
              <ValidationMessage>Please enter your Account name !</ValidationMessage>
            ) : null}
          </EmailContainer>
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
          <LoginButton onClick={handleFormSubmit}>Encrypt and Save Password</LoginButton>
          <Footer style={{ marginTop: "20px", padding: "0px" }}>
            <SignupButton onClick={() => setIsOpenModal(false)}>Cancel</SignupButton>
          </Footer>
        </Form>
      </Modal>
    </ModalWrapper>
  );
};
export default AddPassword;
