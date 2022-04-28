export interface Device{
    id: number;
    connectionStatus: string;
    deviceType: string;
    name: string;
    serialNumber: string
    status: string;
}
// [key: string]: any
export interface DeviceType{
    total: number;
    name: string;
    online: number;
    failed: number
}

export interface SingleDeviceTypeProps {
    ClickHandler: (name:string, index:number) => void,
    device:DeviceType,
    index: number,
    selectedIndex: number
}

export interface PrimaryCardProps{
    title:string,
    color:string,
    value: number
}