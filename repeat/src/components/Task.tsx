import React, {ChangeEvent} from 'react';
import {EditSpan} from "./EditSpan";
import {TaskType} from "../Todolist";
import {useDispatch} from "react-redux";
import {changeTaskStatusAC, changeTaskTitleAC, removeTasksAC} from "../redux/tasksReducer";

type PropsType = {
    task: TaskType
    todolistId: string
}

export const Task = React.memo((props: PropsType) => {
    const dispatch = useDispatch()


    const changeTitle = (title: string) => {
        dispatch(changeTaskTitleAC(props.todolistId, props.task.id, title))
    }
    const onClickHandler = () => {
        dispatch(removeTasksAC(props.todolistId, props.task.id))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTaskStatusAC(props.todolistId, props.task.id, e.currentTarget.checked))
    }
    return (
        <li key={props.task.id} className={props.task.isDone ? "is-done" : ""}>
            <button onClick={() => onClickHandler}>✖</button>
            <input type="checkbox" checked={props.task.isDone} onChange={onChangeHandler}/>
            <EditSpan title={props.task.title} changeTitle={changeTitle}/>

        </li>
    );
});

