import React from 'react'
import { Device } from '../../model';
import { TableData, TableRaw } from '../Styles/Container.styles';

const SingleDevice: React.FC<Device> = (props) =>{
    return(
        <TableRaw>
            <TableData>
                {props.id}
            </TableData>
            <TableData>
                {props.deviceType}
            </TableData>
            <TableData>
                {props.name}
            </TableData>
            <TableData>
                {props.connectionStatus}
            </TableData>
            <TableData>
                {props.status}
            </TableData>
        </TableRaw>
        
    )
}

export default SingleDevice;
