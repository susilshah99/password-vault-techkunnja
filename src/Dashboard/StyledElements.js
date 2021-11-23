import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
`;

export const Header = styled.div`
  height: 90px;
  width: auto;
  background: #405089;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: white;
`;

export const LogoutButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: white;
  color: #405089;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Body = styled.div`
  padding: 50px;
`;

export const AddpasswordButton = styled.button`
  width: 150px;
  height: 40px;
  background: #405089;
  color: white;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBar = styled.input`
  padding: 10px 18px;
  &:focus {
    outline: 0;
  }
  border: 1px solid #405089;
`;
