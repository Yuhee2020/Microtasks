import {TodoListsType} from "../App";
import {v1} from "uuid";

export const todolistsReducer=(state:TodoListsType, action: ActionType)=>{
    switch (action.type){
        case "REMOVE-TASK":{
            return state.map(el => el.todolistID === action.todolistId ? {...el, tasks: el.tasks.filter(t => t.taskId !== action.taskId)} : el)
        }
        case "ADD-TASK":{
            let newTask = {taskId: v1(), title:action.title, isDone: false}
            return state.map(el => el.todolistID === action.todolistId ? {...el, tasks: [newTask, ...el.tasks]} : el)
        }
        case "CHANGE-STATUS":{
            return state.map(el => el.todolistID === action.todolistId ? {
                ...el,
                tasks: el.tasks.map(t => t.taskId === action.taskId ? {...t, isDone: action.status} : t)
            } : el)
        }
        default: return state
    }
}

export type ActionType= removeTaskACType | addTaskACType | changeStatusACType
export type removeTaskACType= ReturnType<typeof removeTaskAC>
export const removeTaskAC=(todolistId: string, taskId: string)=>{
    return{
        type: "REMOVE-TASK",
        todolistId: todolistId,
        taskId: taskId
    }as const
}

export type addTaskACType= ReturnType<typeof addTaskAC>
export const addTaskAC=(todolistId: string, title: string)=>{
    return{
        type: "ADD-TASK",
        todolistId: todolistId,
        title: title
    }as const
}

export type changeStatusACType= ReturnType<typeof changeStatusAC>
export const changeStatusAC=(todolistId: string, taskId: string, status: boolean)=>{
    return{
        type: "CHANGE-STATUS",
        todolistId: todolistId,
        taskId:taskId,
        status:status
    }as const
}