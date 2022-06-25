import React, {useEffect, useState} from "react";

export const UseEffectWithSetTimeout=()=>{
    const[counter, setCounter]=useState(0)
    const[counter2, setCounter2]=useState(0)

    useEffect(()=> {
        console.log("SetTimeout")
       setTimeout(()=>{
           document.title=counter.toString()
       },2000)
    },[counter])


    return(<div>
            <button onClick={()=>setCounter(counter+1)}>counter</button>
            {counter}
            <button onClick={()=>setCounter2(counter2+1)}>counter2</button>
            {counter2}
        </div>

    )


}