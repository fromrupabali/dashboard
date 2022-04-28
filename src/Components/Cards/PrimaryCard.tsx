import React from "react";
import { PrimaryCardProps } from "../../model";
import { Card1, CardTitle, CardValue } from "../Styles/Cards.styles";

const PrimaryCard: React.FC<PrimaryCardProps> = (props) =>{
    return(
        <Card1 style={{backgroundColor:props.color}}>
            <CardValue>{props.value}</CardValue>
            <CardTitle>{props.title}</CardTitle>
        </Card1>
        // <div style={{border:"1px solid red"}}>
        //     {/* ID {props.id}
        //     Device Type {props.deviceType} */}
        //    {props.title} {props.value}
        // </div>
    )
}

export default PrimaryCard;
