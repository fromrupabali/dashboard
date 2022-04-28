import React from 'react';
import { SingleDeviceTypeProps } from '../../model';
import { ActiveButton, PrimaryButton } from '../Styles/Button.styles';


const SingleDeviceType: React.FC<SingleDeviceTypeProps> = ({device, ClickHandler, index,selectedIndex}) =>{
    return(
        index === selectedIndex ?
        <ActiveButton onClick={()=>ClickHandler(device.name, index)}>
             {device.name}
        </ActiveButton>
        :
        <PrimaryButton  onClick={()=>ClickHandler(device.name, index)}>
          {device.name}
        </PrimaryButton>
        // <button onClick={()=>ClickHandler(device.name, index)} style={{border:"1px solid red"}}>
        //     {device.name}
        // </button>
    )
}

export default SingleDeviceType;