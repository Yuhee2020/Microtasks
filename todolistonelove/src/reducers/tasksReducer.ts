import {TasksType} from "../App";
import {v1} from "uuid";

export const tasksReducer = (state: TasksType, action: tasksReducerType) => {

    switch (action.type) {
        case "ADD-TASK": {
            let newTask = {id: v1(), title: action.payload.title, isDone: false}
            return {...state, [action.payload.todoListId]:[newTask, ...state[action.payload.todoListId]]}
        }
        case "REMOVE-TASK": {
            return {...state, [action.payload.todoListId]: state[action.payload.todoListId].filter(el=>el.id!== action.payload.taskId)}
        }
        case "CHANGE-STATUS": {
            return {...state, [action.payload.todoListId]: state[action.payload.todoListId].map(el=>el.id=== action.payload.taskId? {...el, isDone:action.payload.status}:el)}
        }
        case "EDIT-TASK": {
            return {...state, [action.payload.todoListId]:state[action.payload.todoListId].map(el=>el.id=== action.payload.taskId?{...el, title:action.payload.newTitle}:el)}
        }
        case "REMOVE-TODOLIST": {
            return {...state}
        }
        case "ADD-TODOLIST": {
            return state
        }

        default:
            return state
    }
}

type tasksReducerType = addTaskACType | removeTaskACType | changeStatusACType | editTaskACType | removeTodoListACType | addTodoListACType


type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todoListId: string, title: string) => {
    return {
        type: "ADD-TASK",
        payload: {todoListId, title}
    } as const
}

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todoListId: string, taskId: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {todoListId, taskId}
    } as const
}
type changeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (todoListId: string, taskId: string, status: boolean) => {
    return {
        type: "CHANGE-STATUS",
        payload: {todoListId, taskId, status}
    } as const
}

type editTaskACType = ReturnType<typeof editTaskAC>
export const editTaskAC = (todoListId: string, taskId: string, newTitle: string) => {
    return {
        type: "EDIT-TASK",
        payload: {todoListId, taskId, newTitle}
    } as const
}

type removeTodoListACType = ReturnType<typeof removeTodoListAC>
export const removeTodoListAC = () => {
    return {
        type: "REMOVE-TODOLIST",
    } as const
}

type addTodoListACType = ReturnType<typeof addTodoListAC>
export const addTodoListAC = () => {
    return {
        type: "ADD-TODOLIST",
    } as const
}