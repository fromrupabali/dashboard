import React, {useEffect,useState} from 'react';

import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Device, DeviceType } from './model';
import Header from './Components/Header';
import Devices from './Components/Devices/Devices';
import DeviceTypes from './Components/DeviceType/DeviceTypes';
import SingleDevice from './Components/Devices/SingleDevice';
import SingleDeviceType from './Components/DeviceType/SingleDeviceType';
import PrimaryCard from './Components/Cards/PrimaryCard';

function App() {
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
  let total = 0;
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
  console.log("Types", typeList)
  return (
    <div className="App">
      {/* Header */}
      <Header />
     <div>
      
       <button onClick={()=>fetchDevices()}>Refresh</button>
       {
         typeList.map((item, index)=>{
           return<SingleDeviceType selectedIndex={selectedTypeIndex} index={index} device={item} ClickHandler={selectType}/>
         })
       }
       {/* <DeviceTypes /> */}
       <div>
         <PrimaryCard value={typeList.length > 0 ?typeList[selectedTypeIndex].total:0} title="Total Card" color="#000"/>
       <p>    Total {typeList.length > 0 &&typeList[selectedTypeIndex].total}</p>
       <p>    Online {typeList.length > 0 &&typeList[selectedTypeIndex].online}</p>
       <p>    Failed {typeList.length > 0 &&typeList[selectedTypeIndex].failed}</p>
       </div>
       {/* <Devices name="momin" /> */}
       {
         devices.map(device=>{
           return <SingleDevice {...device}/>
         })
       }
     </div>
    </div>
  );
}

export default App;
