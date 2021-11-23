import React, { useState, useEffect } from "react";
import { ListContainer, ListItem, DecryptButton } from "./StyledElements";
var CryptoJS = require("crypto-js");

const PasswordList = (props) => {
  const { item } = props;
  const [isDecrypted, setIsDecrypted] = useState(false);

  var bytes = CryptoJS.AES.decrypt(item.password, "secret key 123");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  useEffect(() => {
    setInterval(() => alert("you need to change your passwords"), 19000);
  }, [item]);

  return (
    <ListContainer>
      <ListItem style={{ fontSize: "18px" }}>{item.accountname}</ListItem>
      <ListItem style={{ fontSize: "18px" }}>{item.email}</ListItem>
      <ListItem style={{ fontSize: "18px", minWidth: "420px" }}>
        {isDecrypted ? originalText : item.password}
      </ListItem>
      <DecryptButton onClick={() => setIsDecrypted(true)}>Decrypt Password</DecryptButton>
    </ListContainer>
  );
};

export default PasswordList;
