import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type PropsType={
    callBack: (title:string)=>void

}


export const FullInput=(props:PropsType)=>{
    let [title, setTitle] = useState("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask();
        }
    }
    const addTask = () => {
        props.callBack(title);
        setTitle("");
    }
    return(
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTask}>+</button>
        </div>
    )
}