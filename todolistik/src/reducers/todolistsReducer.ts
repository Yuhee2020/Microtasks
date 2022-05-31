import {FilterType, TodoListsType, TodoListType} from "../App";
import {v1} from "uuid";

const initialState: TodoListsType = [
    {
        todolistID: v1(),
        title: "what to do?",
        filter: "all",
        tasks: [
            {taskId: v1(), title: "learning", isDone: true},
            {taskId: v1(), title: "swimming", isDone: true},
            {taskId: v1(), title: "walking", isDone: false}
        ]
    },
    {
        todolistID: v1(),
        title: "what to buy?",
        filter: "all",
        tasks: [
            {taskId: v1(), title: "bread", isDone: true},
            {taskId: v1(), title: "beer", isDone: true},
            {taskId: v1(), title: "seledka", isDone: false}
        ]
    }
]
export const todolistsReducer = (state: TodoListsType = initialState, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return state.map(el => el.todolistID === action.todolistId ? {
                ...el,
                tasks: el.tasks.filter(t => t.taskId !== action.taskId)
            } : el)
        }
        case "ADD-TASK": {
            let newTask = {taskId: v1(), title: action.title, isDone: false}
            return state.map(el => el.todolistID === action.todolistId ? {...el, tasks: [newTask, ...el.tasks]} : el)
        }
        case "CHANGE-STATUS": {
            return state.map(el => el.todolistID === action.todolistId ? {
                ...el,
                tasks: el.tasks.map(t => t.taskId === action.taskId ? {...t, isDone: action.status} : t)
            } : el)
        }
        case "CHANGE-FILTER": {
            return state.map(el => el.todolistID === action.todolistId ? {...el, filter: action.value} : el)
        }
        case "ADD-TODOLIST": {
            let newTodolist: TodoListType = {
                todolistID: v1(),
                title: action.title,
                filter: "all",
                tasks: []
            }
            return [newTodolist, ...state,]
        }
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.todolistID !== action.todolistId)
        }
        case "EDIT-TASK-TITLE": {
            return state.map(el => el.todolistID === action.todolistId ? {
                ...el,
                tasks: el.tasks.map(t => t.taskId === action.taskId ? {...t, title: action.title} : t)
            } : el)
        }
        case "EDIT-TODOLIST-TITLE":{
            return state.map(el=>el.todolistID===action.todolistId? {...el, title:action.title}:el)
        }
        default:
            return state
    }
}

export type ActionType =
    removeTaskACType
    | addTaskACType
    | changeStatusACType
    | changeFilterACType
    | addTodolistACType
    | removeTodolistACType
    | editTaskTitleACType
    | editTodolistTitleACType

export type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: "REMOVE-TASK",
        todolistId,
        taskId
    } as const
}

export type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistId: string, title: string) => {
    return {
        type: "ADD-TASK",
        todolistId,
        title
    } as const
}

export type changeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (todolistId: string, taskId: string, status: boolean) => {
    return {
        type: "CHANGE-STATUS",
        todolistId,
        taskId,
        status
    } as const
}

export type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (todolistId: string, value: FilterType) => {
    return {
        type: "CHANGE-FILTER",
        todolistId,
        value
    } as const
}

export type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: "ADD-TODOLIST",
        title
    } as const
}

export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: "REMOVE-TODOLIST",
        todolistId
    } as const
}

export type editTaskTitleACType = ReturnType<typeof editTaskTitleAC>
export const editTaskTitleAC = (todolistId: string, taskId: string, title: string) => {
    return {
        type: "EDIT-TASK-TITLE",
        todolistId, taskId, title
    } as const
}

export type editTodolistTitleACType = ReturnType<typeof editTodolistTitleAC>
export const editTodolistTitleAC = (todolistId: string, title: string) => {
    return {
        type: "EDIT-TODOLIST-TITLE",
        todolistId, title
    } as const
}