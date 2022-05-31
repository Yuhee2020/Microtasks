import React, {ChangeEvent} from "react";
import {FilterType} from "../App";
import s from "./TodoList.module.css"
import {FullInput} from "./FullInput";
import {EditSpan} from "./EditSpan";

export type TaskType = {
    taskId: string
    title: string
    isDone: boolean
}
export type PropsType = {
    tasks: Array<TaskType>
    title: string
    removeTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, value: FilterType) => void
    addTask: (todolistId: string, title: string) => void
    changeStatus: (todolistId: string, taskId: string, status: boolean) => void
    filter: FilterType
    todolistId: string
    removeTodolist: (todolistId: string) => void
    editTaskTitle: (todolistId:string, taskId:string, title:string)=>void
    editTodolistTitle: (todolistId:string,title:string)=>void
}

export const TodoList = (props: PropsType) => {

    const onAllClickHandler = () => {
        props.changeFilter(props.todolistId, "all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter(props.todolistId, "active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter(props.todolistId, "completed")
    }
    const addTask = (title: string) => {
        props.addTask(props.todolistId, title)
    }
    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistId)
    }
    const editTask=(taskId:string, title:string)=>{
        props.editTaskTitle(props.todolistId,taskId,title )
    }
    const editTodolist=(title:string)=>{
        props.editTodolistTitle(props.todolistId, title)
    }

    return (<div>
            <h3><EditSpan title={props.title} callBack={editTodolist}/>
                <button onClick={removeTodolistHandler}>x</button>
            </h3>
            <FullInput callBack={addTask}/>
            {props.tasks.map(el => {
                const removeTaskHandler = () => {
                    props.removeTask(props.todolistId, el.taskId)
                }
                const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.changeStatus(props.todolistId, el.taskId, e.currentTarget.checked)
                }
                const editTaskTit=(title:string)=>{
                    editTask(el.taskId, title)
                }
                return (
                    <ul key={el.taskId}>
                        <li>
                            <input onChange={changeStatusHandler}
                                   type="checkbox"
                                   checked={el.isDone}/>
                            <EditSpan title={el.title} callBack={editTaskTit} />
                            <button onClick={removeTaskHandler}>x</button>
                        </li>
                    </ul>
                )
            })}
            <div>
                <button className={props.filter === "all" ? s.active : ""} onClick={onAllClickHandler}>All</button>
                <button className={props.filter === "active" ? s.active : ""} onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === "completed" ? s.active : ""}
                        onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>

    )
}