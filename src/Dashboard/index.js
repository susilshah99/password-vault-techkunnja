import React, { useState, useEffect } from "react";
import AddPassword from "../AddPassword";

import {
  Wrapper,
  Header,
  Title,
  LogoutButton,
  Body,
  AddpasswordButton,
  ButtonWrapper,
  SearchBar,
} from "./StyledElements";
import PasswordList from "../AddPassword/PasswordList";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [encryptedData, setEncryptedData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterData, setFilterData] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const tempData =
      encryptedData &&
      encryptedData.filter((item) => item.accountname.toLowerCase().includes(searchInput));

    setFilterData(tempData);
  }, [searchInput]);

  return (
    <Wrapper>
      <Header>
        <Title>Password Vault</Title>
        <LogoutButton onClick={() => history.push("/")}>Log Out</LogoutButton>
      </Header>
      <Body>
        <Title style={{ color: "black" }}>My Passowrd Vault</Title>
        <ButtonWrapper>
          <AddpasswordButton onClick={() => setIsOpenModal(true)}>Add Password</AddpasswordButton>
          <div style={{ position: "relative" }}>
            <SearchBar
              placeholder="Search by account"
              type="text"
              value={searchInput}
              onChange={handleChange}
            />
            <i
              class="fa fa-search"
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "0px",
                left: "167px",
                backgroundColor: "white",
                padding: "11px",
                background: "#405089",
                color: "white",
              }}
            ></i>
          </div>
        </ButtonWrapper>

        {filterData && filterData.length > 0 ? (
          filterData.map((item, index) => (
            <div key={index} style={{ marginTop: "40px" }}>
              <PasswordList item={item} />
            </div>
          ))
        ) : encryptedData && encryptedData.length > 0 ? (
          encryptedData.map((item, index) => (
            <div key={index} style={{ marginTop: "40px" }}>
              <PasswordList item={item} />
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
            }}
          >
            <Title style={{ color: "black" }}> Your Password Vault is empty</Title>
          </div>
        )}
      </Body>
      {isOpenModal && (
        <AddPassword
          encryptedData={encryptedData}
          setEncryptedData={setEncryptedData}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </Wrapper>
  );
};
export default Dashboard;
