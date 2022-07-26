import React, {useCallback} from 'react';
import {TasksStateType, TodolistsType} from "./App";
import {AddItemForm} from "./components/AddItemForm";
import {EditSpan} from "./components/EditSpan";
import {Task} from "./components/Task";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {changeFilterAC, changeTodolistTitleAC, removeTodolistAC} from "./redux/todolistsReducer";
import {addTaskAC} from "./redux/tasksReducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    todolist: TodolistsType
}


export const Todolist: React.FC<PropsType> = React.memo((props) => {
    let tasks = useSelector<AppStateType, TasksStateType>(state => state.tasks)
    let dispatch = useDispatch()

    console.log("Todolist called")
    const onAllClickHandler = useCallback(() => {
        dispatch(changeFilterAC(props.todolist.id, "all"))
    }, [props.todolist.id])

    const onActiveClickHandler = useCallback(() => {
        dispatch(changeFilterAC(props.todolist.id, "active"))
    }, [props.todolist.id])

    const onCompletedClickHandler = useCallback(() => {
        dispatch(changeFilterAC(props.todolist.id, "completed"))
    }, [props.todolist.id])


    const addTask = useCallback((title: string) => {
        dispatch(addTaskAC(props.todolist.id, title))
    }, [props.todolist.id])

    const changeTodolistTitle = useCallback((title: string) => {
        dispatch(changeTodolistTitleAC(props.todolist.id, title))
    }, [props.todolist.id])

    let tasksForTodolist = tasks[props.todolist.id]
    if (props.todolist.filter === "active") {
        tasksForTodolist = tasks[props.todolist.id].filter(el => !el.isDone)
    }
    if (props.todolist.filter === "completed") {
        tasksForTodolist = tasks[props.todolist.id].filter(el => el.isDone)
    }


    return <div>
        <h3><EditSpan title={props.todolist.title} changeTitle={changeTodolistTitle}/>
            <button onClick={() => dispatch(removeTodolistAC(props.todolist.id))}>x</button>
        </h3>

        <div>
            <AddItemForm addItem={addTask}/>
        </div>
        <ul>{tasksForTodolist.map(el => {
            return (
                <Task key={el.id}
                      task={el}
                      todolistId={props.todolist.id}
                />
            )
        })}
        </ul>
        <div>
            <button onClick={onAllClickHandler} className={props.todolist.filter === "all" ? "active-filter" : ""}>All
            </button>
            <button onClick={onActiveClickHandler}
                    className={props.todolist.filter === "active" ? "active-filter" : ""}>Active
            </button>
            <button onClick={onCompletedClickHandler}
                    className={props.todolist.filter === "completed" ? "active-filter" : ""}>Completed
            </button>
        </div>
    </div>
})
