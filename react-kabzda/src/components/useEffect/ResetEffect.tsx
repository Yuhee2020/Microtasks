import React, {useEffect, useState} from "react";
import {log} from "util";



export const ResetEffect = () => {
    const [counter, setCounter]= useState(1)
    console.log("Component rendered with " + counter)

    useEffect(()=>{
        console.log("Effect occurred " + counter)
        return ()=>{
            console.log("Reset effect" + counter)
        }
    },[counter])

    const increase = ()=>{
        setCounter(counter+1)
    }

    return (
        <div>
            hello, counter: {counter} <button onClick={increase}>+</button>
        </div>
    );
};
