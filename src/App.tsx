import React, { useState, useEffect} from "react";
import { Device, DeviceType } from './model';
import axios from 'axios';
import { Container, DeviceContainer, DeviceHeaderContainer, DeviceListContainer,LeftBottomContainer, LeftContainer, LeftTopContainer, RightContainer, TableList, TableRaw,TableHeader, LogoContainer, Logo, DeviceTypeContainer, PrimaryTitle, CardsContainer } from "./Components/Styles/Container.styles";
import LogoSrc from './assets/Logo.png';
import { LogoutButton } from "./Components/Styles/Button.styles";
import PrimaryCard from "./Components/Cards/PrimaryCard";
import SingleDeviceType from "./Components/DeviceType/SingleDeviceType";
import SingleDevice from "./Components/Devices/SingleDevice";
import Loader from "./Components/Loader";

import { URL, TOKEN } from './Components/Keys';

const App:React.FC =()=>{
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
            const res = await  axios.get(URL, { headers: {"Authorization" : `Bearer ${TOKEN}`} })
            if(res.status !== 200) return;
            const allDevices = res.data;
             setDevices(allDevices);
             setDeviceList(allDevices);
           
             allDevices.map((device: { deviceType: string; connectionStatus:string, status: string },index: number)=>{
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
                      total: 0,
                      online: 0,
                      failed: 0
                   }
                   newList.push(newType);
                  }
                }   
             })
             setDone(true);
         
        }catch(err){
          throw err;
        }
      }
     
      const selectType = (name:string, index:number) =>{
        try{
          document.getElementById("device-list")?.scrollTo(0,0);
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
          
          setSelectedTypeIndex(index);
           setDevices(newDevices);
        }catch(err){
          throw err;
        }
      }
      
      useEffect(()=>{
        fetchDevices();
      },[]);
    return(
      fetchDone?
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
                         
                          {
                            typeList.map((item, index)=>{
                                return <SingleDeviceType key={index} selectedIndex={selectedTypeIndex} index={index} device={item} ClickHandler={selectType}/>
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
                    <DeviceListContainer id ="device-list">
                        <TableList>
                            <tbody>
                            <TableRaw >
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
                            {
                             devices.map((device, index)=>{
                                return <SingleDevice key={index} {...device}/>
                              })
                            }
                            </tbody>
                           
                            
                            
                        </TableList>
                    </DeviceListContainer>
                </DeviceContainer>
            </RightContainer>
           
        </Container>:
        <Loader />
    )

}
export default App;