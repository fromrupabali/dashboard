import React, { useState, useEffect} from "react";
import { Device, DeviceType } from './model';
import axios from 'axios';
import { Container, DeviceContainer, DeviceHeaderContainer, DeviceListContaienr, LeftBottomContainer, LeftContainer, LeftTopContainer, RightContainer, TableList, TableRaw,TableHeader, TableData, DataListContainer, LogoContainer, Logo, DeviceTypeContainer, PrimaryTitle, CardsContainer } from "./Components/Styles/Container.styles";
import LogoSrc from './assets/Logo.png';
import { LogoutButton, PrimaryButton } from "./Components/Styles/Button.styles";
import PrimaryCard from "./Components/Cards/PrimaryCard";
import { Card1, CardTitle, CardValue } from "./Components/Styles/Cards.styles";
import SingleDeviceType from "./Components/DeviceType/SingleDeviceType";
import SingleDevice from "./Components/Devices/SingleDevice";

function App(){
    const [deviceList, setDeviceList] = useState<Device[]>([]);
    const [devices, setDevices] = useState<Device[]>([]);
    const [fetchDone, setDone] = useState<boolean>(false);
    const [selectedTypeIndex, setSelectedTypeIndex] = useState<number>(0);
    const [typeList, setTypeList] = useState<DeviceType[]>([
      {
        name: "All",
        total: 0,
        online: 0,
        failed: 0
      }
    ]);
    const fetchDevices = async()=>{
        try{
          setDone(false);
          setTypeList([]);
          let webApiUrl = 'https://vstechtest.azurewebsites.net/api/GetData';
          let tokenStr = 'ade74927-f3df-4718-8f85-d10bab443b1c';
            const res = await  axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} })
          // .then(res=>{
            console.log("Hi", res)
            const allDevices = res.data;
             setDevices(allDevices);
             setDeviceList(allDevices);
             setDone(true);
             allDevices.map((device: { deviceType: string; connectionStatus:string, status: string },index: number)=>{
               //console.log("Index", index)
              // if(typeList.length > 0){
                let newList = typeList;
                for(let i = 0; i<typeList.length; i++){
                  let updatedType = typeList[i];
                  if(device.deviceType === updatedType.name){
                   
                   updatedType.total = updatedType.total + 1;
                   if(device.connectionStatus === "Online"){
                    updatedType.online = updatedType.online + 1;
                    newList[0].online = newList[0].online + 1;
                   }
                   if(device.status === "Failed"){
                    updatedType.failed = updatedType.failed + 1;
                    newList[0].failed = newList[0].failed + 1;
                   }
                   
                   newList[i] = updatedType;
                   newList[0].total = newList[0].total + 1;
                   setTypeList(newList);
                   break;
                  }
                  else if(device.deviceType !== updatedType.name && i === typeList.length - 1){
    
                    let newType = {
                      name: device.deviceType,
                      total: 1,
                      online: 0,
                      failed: 0
                   }
                   if(device.connectionStatus === "Online"){
                     newType.online = newType.online + 1;
                     newList[0].online = newList[0].online + 1;
                   }
                   if(device.status === "Failed"){
                     newType.failed = newType.failed + 1;
                     newList[0].failed = newList[0].failed + 1;
                   }
               
                   newList.push(newType);
                   newList[0].total = newList[0].total + 1;
                   setTypeList(newList)
                  }
                 
                }   
             })
          // }
          // )
        }catch(err){
          setDone(true);
          throw err;
        }
      }
     
      const selectType = (name:string, index:number) =>{
        try{
          console.log(index)
          if(name === "All"){
            setDevices(deviceList);
            setSelectedTypeIndex(0);
            return;
          }
            let newDevices: Device[] =[];
            deviceList.map(device=>{
             if(device.deviceType === name){
               newDevices.push(device);
             }
           });
          //  console.log("New devices", newDevices)
          setSelectedTypeIndex(index);
           setDevices(newDevices);
        }catch(err){
          throw err;
        }
      }
      
      useEffect(()=>{
        console.log('i fire once');
        fetchDevices();
      },[]);
    return(
        <Container>
            <LeftContainer>
         
              <LeftTopContainer>
                     <LogoContainer>
                         <Logo src={LogoSrc}/>
                     </LogoContainer>
                     <DeviceTypeContainer>
                         <PrimaryTitle>
                             Device Type
                         </PrimaryTitle>
                         {/* <PrimaryButton>All</PrimaryButton>
                         <PrimaryButton>BCM</PrimaryButton>
                         <PrimaryButton>Emered</PrimaryButton>
                         <PrimaryButton>Networking</PrimaryButton> */}
                          {
                                typeList.map((item, index)=>{
                                return <SingleDeviceType selectedIndex={selectedTypeIndex} index={index} device={item} ClickHandler={selectType}/>
                                })
                        }
                     </DeviceTypeContainer>
              </LeftTopContainer>
              <LeftBottomContainer>
                    <LogoutButton>Logout</LogoutButton>
              </LeftBottomContainer>
            </LeftContainer>
            <RightContainer>
                <DeviceContainer>
                    <DeviceHeaderContainer>
                        <PrimaryTitle>{typeList.length > 0 ?typeList[selectedTypeIndex].name:""} Devices</PrimaryTitle>
                        <CardsContainer>
                        <PrimaryCard value={typeList.length > 0 ?typeList[selectedTypeIndex].total:0} title="Total" color="#FF8B24"/> 
                        <PrimaryCard value={typeList.length > 0 ?typeList[selectedTypeIndex].online:0} title="Online" color="#54BD68"/> 
                        <PrimaryCard value={typeList.length > 0 ?typeList[selectedTypeIndex].failed:0} title="Failed" color="#6666FB"/> 

                        </CardsContainer>
                    </DeviceHeaderContainer>
                    <DeviceListContaienr>
                        <TableList>
                            <TableRaw>
                                <TableHeader>
                                    ID
                                </TableHeader>
                                <TableHeader>
                                    Device Type
                                </TableHeader>
                                <TableHeader>
                                    Name
                                </TableHeader>
                                <TableHeader>
                                    Connection Status
                                </TableHeader>
                                <TableHeader>
                                    Status
                                </TableHeader>
                            
                            </TableRaw>
                            {/* <DataListContainer> */}
                    
                            {
                             devices.map(device=>{
                                return <SingleDevice {...device}/>
                              })
                            }
                            
                            
                           
                           
                            {/* </DataListContainer> */}
                            
                        </TableList>
                    </DeviceListContaienr>
                </DeviceContainer>
            </RightContainer>
           
        </Container>
    )

}
export default App;