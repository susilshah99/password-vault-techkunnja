import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #505050;
`;

export const Modal = styled.div`
  min-width: 400px;
  min-height: 300px;
  background: white;
  border-radius: 5px;
  padding: 18px;
`;

export const ListItem = styled.h1`
  font-size: 25px;
  color: black;
  font-weight: 500;
  min-width: 290px;
`;

export const DecryptButton = styled.button`
 width: 200px;
  height: 40px;
  background: #405089
  color:white;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;`;

export const ListContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
