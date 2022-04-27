import React, {useState} from "react";

type PropsType={

}



export const UCOnOff=(props: PropsType)=>{
    let [on, setOn] = useState(true)

    const onStyle={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"

    }
    const offStyle={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle={
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green": "red"

    }

    return (<div>
        <div onClick={()=>{setOn(true)}} style={onStyle}>On</div>
        <div onClick={()=>{setOn(false)}} style={offStyle}>Off</div>
        <div style={indicatorStyle}></div>

    </div>)

}