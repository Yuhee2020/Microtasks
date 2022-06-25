import React, {useEffect, useState} from "react";

export const UseEffectWithSetInterval=()=>{
    const[counter, setCounter]=useState(0)


    useEffect(()=> {
       setInterval(()=>{
          setCounter((state)=>state+1)
       },1000)
    },[])


    return(<div>
            {counter}
        </div>

    )


}