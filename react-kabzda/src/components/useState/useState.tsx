import React, {useMemo, useState} from "react";
import {log} from "util";

const DifficultData=()=>{
    console.log("DifficultData")
    return 293872837892734
}



export const ExampleUseState = () => {

    // let DD=useMemo(DifficultData,[])


    const [count, setCount] = useState(DifficultData)// закидываем как initial state функцию, которая возвращает значение
    console.log(count)
    const changer=(state:number)=>{
     return   state+1
        //закидываем функцию , результат ее вызова будет сетаться в стейт

    }
    return <>

        <button onClick={()=>setCount(changer)}>+</button>

        {count}
    </>
}