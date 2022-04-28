import styled from 'styled-components';

 const LogoutButton = styled.button`
  padding: 9px 0;
  width: 90%;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:hover{
    color: red;
  }
`;

 const PrimaryButton = styled.button`
  width: 100%;
  padding: 9px 0;
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: none;
  &:hover {
    border: 1px solid orangered;
    color: orangered;
  }
`;
 const ActiveButton = styled.button`
  width: 100%;
  padding: 9px 0;
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid orangered;
  border-radius: 5px;
  background: none;
  background: orangered;
  color: white;
`;

export{
  LogoutButton,
  PrimaryButton,
  ActiveButton
}
