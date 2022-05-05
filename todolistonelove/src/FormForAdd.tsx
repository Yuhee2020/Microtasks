import s from "./Todolist.module.css";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";

export type FormForAddType={
    callBack: (title:string)=>void

}

export const FormForAdd = (props:FormForAddType) => {
    const [title, setTitle] = useState("")
    const [error, setError] = useState("")
    const onChangeTitleHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
        setError("")
    }
    const onKeyPressHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        e.key==="Enter" && addTaskHandler()
    }
    const addTaskHandler = () => {
        title.trim()? props.callBack(title.trim()) : setError("title is required")
        setTitle("")
    }
    return (<div>
        <input value={title}
               className={error ? s.errorInput : ""}
               onChange={onChangeTitleHandler}
               onKeyPress={onKeyPressHandler}
        />
        <button onClick={addTaskHandler}>+</button>
        {error ? <div className={s.error}>{error}</div> : ""}
    </div>)
}