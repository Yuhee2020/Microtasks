import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterType} from "./App";
import s from "./Todolist.module.css"
import {FormForAdd} from "./FormForAdd";
import {EditSpan} from "./EditSpan";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistID:string,taskId: string) => void
    changeFilter: (todolistID:string, value: FilterType) => void
    addTask: (todolistID:string, title:string) => void
    changeStatus: (todolistID:string, taskId: string, isDoneStatus:boolean)=>void
    filter: FilterType
    todolistID:string
    EditTask: (todolistID:string, taskId:string, newTitle:string)=>void
    EditTodolist: (todolistID:string, newTitle:string)=>void
    removeTodolist: (todolistID:string)=>void
}

export function Todolist(props: PropsType) {

    const onAllClickHandler = () => {
        props.changeFilter(props.todolistID, "all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter(props.todolistID,"active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter(props.todolistID,"completed")
    }
    const AddTaskHandler=(title:string)=>{
        props.addTask(props.todolistID, title)

    }
    const EditSpanHH=(taskId: string, newTitle: string )=>{
        props.EditTask(props.todolistID, taskId, newTitle)
    }
    const EditTodolistHandler=(newTitle:string)=>{
        props.EditTodolist(props.todolistID, newTitle)
    }
     const removeTodolistHandler=()=>{
         props.removeTodolist(props.todolistID)
     }



    return <div>
        <h3><button onClick={removeTodolistHandler}>x</button>
            <EditSpan title={props.title}
                      callBack={EditTodolistHandler}/>

        </h3>

          <FormForAdd callBack={AddTaskHandler}/>


        <ul>{props.tasks.map(el => {
            const onClickHandler = () => {
                props.removeTask(props.todolistID, el.id)
            }
            const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
                props.changeStatus(props.todolistID, el.id, e.currentTarget.checked)
            }
            const EditSpanHandler=(newTitle:string)=>{
                EditSpanHH(el.id, newTitle)
            }
            return (
                <li key={el.id} className={el.isDone? s.task : ""}>
                    <button onClick={onClickHandler}>x</button>
                    <input type="checkbox"
                           onChange={onChangeHandler}
                           checked={el.isDone}/>
                    <EditSpan callBack={EditSpanHandler} title={el.title}/>

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


