import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterType} from "./App";
import s from "./Todolist.module.css"

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, value: FilterType) => void
    addTask: (todolistId: string, title: string) => void
    changeStatus: (todolistId: string, taskId: string, taskStatus: boolean) => void
    filter: FilterType
    removeTodolist: (todolistId: string)=>void
}


export function Todolist(props: PropsType) {
    const [title, setTitle] = useState("")
    const [error, setError] = useState("")

    const onClickAllHandler = () => {
        props.changeFilter(props.todolistId, "all")
    }
    const onClickActiveHandler = () => {
        props.changeFilter(props.todolistId, "active")
    }
    const onClickCompletedHandler = () => {
        props.changeFilter(props.todolistId, "completed")
    }
    const addTaskHandler = () => {
        title.trim() == "" ? setError("title is required") : props.addTask(props.todolistId, title.trim())
        setTitle("")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError("")


    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        e.key === "Enter" && addTaskHandler()
    }
    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistId)
    }

    return <div>

        <h3>
            <button onClick={removeTodolistHandler}>x</button>
            { props.title}</h3>

        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? s.error : ""}
            />
            <button onClick={addTaskHandler}>+</button>
            <div className={s.errorMessage}>{error}</div>
        </div>
        <ul>
            {props.tasks.map(el => {
                const onClickHandler = () => {
                    props.removeTask(props.todolistId, el.id)
                }
                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.changeStatus(props.todolistId, el.id, e.currentTarget.checked)

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
            <button className={props.filter === "all" ? s.activeFilter : ""} onClick={onClickAllHandler}>All</button>
            <button className={props.filter === "active" ? s.activeFilter : ""} onClick={onClickActiveHandler}>Active
            </button>
            <button className={props.filter === "completed" ? s.activeFilter : ""}
                    onClick={onClickCompletedHandler}>Completed
            </button>
        </div>
    </div>
}
