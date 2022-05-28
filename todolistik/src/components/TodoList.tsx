import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterType} from "../App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type PropsType = {
    tasks: Array<TaskType>
    title: string
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterType) => void
    addTask: (title: string) => void
}

export const TodoList = (props: PropsType) => {
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }
    const addTaskHandler = () => {
        value.trim()? props.addTask(value.trim()) : setError("title is required")
        setValue("")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onKeyPressHandler= (e:KeyboardEvent<HTMLInputElement>)=>{
        e.key==="Enter" && addTaskHandler()
    }

    return (<div>
            <h3>{props.title}</h3>
            <input value={value} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>+</button>
            <div >{error}</div>
            {props.tasks.map(el => {
                const removeTaskHandler = () => {
                    props.removeTask(el.id)
                }
                return (
                    <ul key={el.id}>
                        <li>
                            <input type="checkbox" checked={el.isDone}/>
                            {el.title}
                            <button onClick={removeTaskHandler}>x</button>
                        </li>
                    </ul>
                )
            })}
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>

    )
}