import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  width: 20%;
  height: 100%;
  float: left;
  background: white;
`;

export const RightContainer = styled.div`
  width: 80%;
  height: 100%;
  background: #DEE1E7;
  float: right;
`;

export const DeviceContainer = styled.div`
  width: 80%;
  margin-left: 10%;
`;

export const LeftTopContainer = styled.div`
  width: 100%;
  height: 90%;
`;
export const LogoContainer = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  border-bottom: 1px solid #eeee;
`;
export const Logo = styled.img`
  width: 100px;
  height: 50px;
  margin: 0;
  padding: 0;
`;
export const LeftBottomContainer = styled.div`
  width: 100%;
  height: 8%;
  text-align: center;
  padding-top: 10px;
  border-top: 1px solid #eeee;
`;

export const DeviceHeaderContainer = styled.div`
  width: 100%;
  height: 30vh;
`;

export const DeviceListContaienr = styled.div`
  width: 100%;
  height: 60vh;
  background: white;
  margin-top: 20px;
  overflow-y: scroll;
`;
export const TableList = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const DataListContainer = styled.div`
  width: 100%;
  height: 400px;
  background: red;
`;

export const TableRaw = styled.tr``;
export const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  text-align: center;
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

export const DeviceTypeContainer = styled.div`
  width: 80%;
  height: auto;
  margin-left: 10%;
`;

export const PrimaryTitle = styled.h3``;

export const CardsContainer = styled.div`
     width: 100%;
     height: 130px;
     display: flex;
     flex-flow: wrap;
     justify-content: space-between;
`
