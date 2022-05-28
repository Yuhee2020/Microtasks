import s from "./TodoList.module.css";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";


type PropsType = {
    callBack: (title:string)=>void
}

export const FullInput = (props: PropsType) => {
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError("")
    }
    const addTaskHandler = () => {
        value.trim() ? props.callBack( value.trim()) : setError("title is required")
        setValue("")
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && addTaskHandler()
    }
    return (
        <div>
            <input className={error ? s.errorB : ""} value={value} onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>+</button>
            <div className={s.error}>{error}</div>
        </div>
    )
}