import React, {useEffect, useState} from "react";

export const ExampleWithUseEffect=()=>{
    const[counter, setCounter]=useState(0)
    const[counter2, setCounter2]=useState(0)

    useEffect(()=>{
        console.log("UseEffect every render")
        document.title=counter.toString()
    })
    useEffect(()=>{
        console.log("UseEffect only first render(ComponentDidMount)")
        document.title=counter.toString()
    },[])

    useEffect(()=>{
        console.log("UseEffect first render and every counter change")
        document.title=counter.toString()
    },[counter])



    return(<div>
            <button onClick={()=>setCounter(counter+1)}>counter</button>
            {counter}
            <button onClick={()=>setCounter2(counter2+1)}>counter2</button>
            {counter2}
        </div>

    )


}