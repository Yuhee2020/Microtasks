import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterType} from "../App";
import s from "./TodoList.module.css"

export type TaskType = {
    taskId: string
    title: string
    isDone: boolean
}
export type PropsType = {
    tasks: Array<TaskType>
    title: string
    removeTask: (todolistId: string,taskId: string) => void
    changeFilter: (todolistId: string,value: FilterType) => void
    addTask: (todolistId: string, title: string) => void
    changeStatus: (todolistId: string,taskId:string, status:boolean)=>void
    filter: FilterType
    todolistId: string
}

export const TodoList = (props: PropsType) => {
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const onAllClickHandler = () => {
        props.changeFilter(props.todolistId, "all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter(props.todolistId,"active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter(props.todolistId,"completed")
    }
    const addTaskHandler = () => {
        value.trim()? props.addTask(props.todolistId, value.trim()) : setError("title is required")
        setValue("")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError("")
    }
    const onKeyPressHandler= (e:KeyboardEvent<HTMLInputElement>)=>{
        e.key==="Enter" && addTaskHandler()
    }

    return (<div>
            <h3>{props.title}</h3>
            <input className={error? s.errorB : ""} value={value} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>+</button>
            <div className={s.error}>{error}</div>
            {props.tasks.map(el => {
                const removeTaskHandler = () => {
                    props.removeTask(props.todolistId, el.taskId)
                }
                const changeStatusHandler=(e:ChangeEvent<HTMLInputElement>)=>{
                    props.changeStatus(props.todolistId, el.taskId, e.currentTarget.checked)
                }
                return (
                    <ul key={el.taskId}>
                        <li>
                            <input  onChange={changeStatusHandler}
                                    type="checkbox"
                                    checked={el.isDone}/>
                            {el.title}
                            <button onClick={removeTaskHandler}>x</button>
                        </li>
                    </ul>
                )
            })}
            <div>
                <button className={props.filter==="all"? s.active : ""} onClick={onAllClickHandler}>All</button>
                <button className={props.filter==="active"? s.active : ""} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter==="completed"? s.active : ""} onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>

    )
}