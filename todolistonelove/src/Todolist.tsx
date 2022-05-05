import React, {ChangeEvent, useState,KeyboardEvent} from 'react';
import {FilterType} from "./App";
import s from "./Todolist.module.css"

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterType) => void
    addTask: (title:string) => void
    changeStatus: (taskId: string, isDoneStatus:boolean)=>void
    filter: FilterType
}

export function Todolist(props: PropsType) {

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
        title.trim()? props.addTask(title.trim()) : setError("title is required")
        setTitle("")
    }
    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   className={error? s.errorInput: ""}
                   onChange={onChangeTitleHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTaskHandler}>+</button>
            {error? <div className={s.error}>{error}</div>: ""}
        </div>
        <ul>{props.tasks.map(el => {
            const onClickHandler = () => {
                props.removeTask(el.id)
            }
            const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
                props.changeStatus(el.id, e.currentTarget.checked)
            }
            return (
                <li key={el.id} className={el.isDone? s.task : ""}>
                    <button onClick={onClickHandler}>x</button>
                    <input type="checkbox"
                           onChange={onChangeHandler}
                           checked={el.isDone}/>
                    <span>{el.title}</span>
                </li>
            )
        })}

        </ul>
        <div>
            <button  className={props.filter==="all"? s.filter: ""} onClick={onAllClickHandler}>All</button>
            <button className={props.filter==="active"? s.filter: ""} onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter==="completed"? s.filter: ""} onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
