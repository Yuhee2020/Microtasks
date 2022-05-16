import {ChangeEvent, useRef, useState} from "react";


export const UncontrolledInput=()=>{
    <input/>
}

export const TrackValueOfInput=()=>{
    const [value, setValue]=useState("")
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.currentTarget.value)
    }
    return <> {value} <input value={value} onChange={onChangeHandler}/></>
}

export const GetValueOfUCInput=()=>{
    const [value, setValue]=useState("")
    const inputRef= useRef<HTMLInputElement | null>(null)
    const onClickHandler=()=>{
       if(inputRef.current){
           setValue(inputRef.current.value)
       }
    }
    return <> <input ref={inputRef}/>
        <button onClick={onClickHandler}>save</button> actual value {value}
        </>
}