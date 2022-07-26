import {FilterType, TasksStateType, TodolistsType} from "../App";
import {v1} from "uuid";
import {addTodolistAType, removeTodolistAType} from "./todolistsReducer";

let initialState:TasksStateType={}

export const tasksReducer=(state:TasksStateType=initialState,action:ActionsType):TasksStateType=>{
    switch (action.type){
        case "REMOVE-TASK":{
            return {...state,[action.todolistId]:state[action.todolistId].filter(el=>el.id!==action.taskId)}
        }
        case "ADD-TASK": {
            let newTask = {id: v1(), title: action.title, isDone: false}
            return {...state, [action.todolistId]: [newTask, ...state[action.todolistId]]}
        }
        case "CHANGE-TASK-STATUS": {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId ? {...el, isDone: action.newStatus} : el)
            }
        }
        case "CHANGE-TASK-TITLE": {
            return {...state,[action.todolistId]:state[action.todolistId].map(el=>el.id===action.taskId?{...el, title:action.title}:el)}
        }
        case "ADD-TODOLIST":{
            return {...state,[action.todolistId]:[]}
        }
        case "REMOVE-TODOLIST":{
            let {[action.todolistId]:[],...rest}={...state}
            return rest
        }


        default: return state

    }
}

type ActionsType= removeTasksAType | addTaskAType | changeTaskStatusAType | changeTaskTitleAType | addTodolistAType | removeTodolistAType

export type removeTasksAType=ReturnType<typeof removeTasksAC>
export const removeTasksAC=(todolistId: string, taskId: string)=>{
    return{
        type: "REMOVE-TASK",
        todolistId,
        taskId
    }as const
}
export type addTaskAType=ReturnType<typeof addTaskAC>
export const addTaskAC=(todolistId: string, title: string)=>{
    return{
        type: "ADD-TASK",
        title, todolistId
    }as const
}

export type changeTaskStatusAType=ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC=(todolistId: string, taskId: string, newStatus: boolean)=>{
    return{
        type: "CHANGE-TASK-STATUS",
        todolistId,
        taskId, newStatus
    }as const
}

export type changeTaskTitleAType=ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC=(todolistId: string, taskId: string,title:string)=>{
    return{
        type: "CHANGE-TASK-TITLE",
        todolistId,
        taskId,
        title
    }as const
}
