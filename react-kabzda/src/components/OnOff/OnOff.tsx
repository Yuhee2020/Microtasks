import React from "react";

type PropsType={
    on:boolean
    setOn: (on:boolean)=>void
}



export const OnOff=(props: PropsType)=>{


    const onStyle={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"

    }
    const offStyle={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "5px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle={
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? "green": "red"

    }

    return (<div>
        <div onClick={()=>{props.setOn(true)}} style={onStyle}>On</div>
        <div onClick={()=>{props.setOn(false)}} style={offStyle}>Off</div>
        <div style={indicatorStyle}></div>

    </div>)

}