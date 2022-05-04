import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
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
    addTask: (title: string) => void
    changeStatus: (taskId: string, taskStatus: boolean) => void
}


export function Todolist(props: PropsType) {
    const [title, setTitle] = useState("")
    const [error, setError] =useState("")

    const onClickAllHandler = () => {
        props.changeFilter("all")
    }
    const onClickActiveHandler = () => {
        props.changeFilter("active")
    }
    const onClickCompletedHandler = () => {
        props.changeFilter("completed")
    }
    const addTaskHandler = () => {
        title.trim() == ""? setError("title is required"): props.addTask(title.trim())
        setTitle("")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError("")


    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        e.key === "Enter" && addTaskHandler()
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error? s.error : ""}
            />
            <button onClick={addTaskHandler}>+</button>
            <div className={s.errorMessage}>{error}</div>
        </div>
        <ul>
            {props.tasks.map(el => {
                const onClickHandler = () => {
                    props.removeTask(el.id)
                }
                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.changeStatus(el.id, e.currentTarget.checked)

                }

                return (
                    <li className={el.isDone ? s.isDone : ""} key={el.id}>
                        <button onClick={onClickHandler}>x</button>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={el.isDone}/>
                        <span>{el.title}</span></li>)
            })}
        </ul>
        <div>
            <button onClick={onClickAllHandler}>All</button>
            <button onClick={onClickActiveHandler}>Active</button>
            <button onClick={onClickCompletedHandler}>Completed</button>
        </div>
    </div>
}
