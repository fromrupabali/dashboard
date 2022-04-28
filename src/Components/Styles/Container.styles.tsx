import styled from "styled-components";

 const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

 const LeftContainer = styled.div`
  width: 20%;
  height: 100%;
  float: left;
  background: white;
`;

 const RightContainer = styled.div`
  width: 80%;
  height: 100%;
  background: #DEE1E7;
  float: right;
`;

 const DeviceContainer = styled.div`
  width: 80%;
  margin-left: 10%;
`;

 const LeftTopContainer = styled.div`
  width: 100%;
  height: 90%;
`;
const LogoContainer = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  border-bottom: 1px solid #eeee;
`;
const Logo = styled.img`
  width: 80px;
  height: 50px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
const LeftBottomContainer = styled.div`
  width: 100%;
  height: 8%;
  text-align: center;
  padding-top: 10px;
  border-top: 1px solid #eeee;
`;

const DeviceHeaderContainer = styled.div`
  width: 100%;
  height: 30vh;
`;
const DeviceListContainer = styled.div`
  width: 101%;
  height: 60vh;
  background: white;
  margin-top: 20px;
  overflow-y: scroll;
`;
const TableList = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const DataListContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const TableRaw = styled.tr``;

 const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #04aa6d;
  color: white;
  text-align: center;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const DeviceTypeContainer = styled.div`
  width: 80%;
  height: auto;
  margin-left: 10%;
`;

 const PrimaryTitle = styled.h3``;

 const CardsContainer = styled.div`
     width: 100%;
     height: 130px;
     display: flex;
     flex-flow: wrap;
     justify-content: space-between;
`
 const LoaderContainer = styled.div`
   width: 100%;
   height: 100vh;
   background: white;
   display: flex;
   justify-content: center;
`
const LoaderIcon = styled.img`
   width: 60px;
   height: 60px;
   margin: auto;
   display: block;
`

export {
  Container,
  LeftContainer,
  RightContainer,
  DeviceContainer,
  LeftTopContainer,
  LogoContainer,
  Logo,
  LeftBottomContainer,
  DeviceHeaderContainer,
  DeviceListContainer,
  TableList,
  DataListContainer,
  TableRaw,
  TableHeader,
  TableData,
  DeviceTypeContainer,
  PrimaryTitle,
  CardsContainer,
  LoaderContainer,
  LoaderIcon
  
}
