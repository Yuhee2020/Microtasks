import {FilterType, TodoListsType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: Array<TodoListsType>, action: todolistsReducerType) => {

    switch (action.type) {
        case "CHANGE-FILTER": {
            return state.map(el => el.id === action.payload.todoListId ? {...el, filter: action.payload.value} : el)
        }
        case "REMOVE-TODOLIST": {
            return state.filter((el=>el.id !==action.payload.todoListId))
        }
        case "ADD-TODOLIST": {
            let newTodolist: TodoListsType = {id: action.payload.todoListId, title: action.payload.title, filter: 'all'}
            return [newTodolist,...state]
        }
        case "EDIT-TODOLIST-TITLE": {
            return state.map((el=>el.id === action.payload.todoListId? {...el,title:action.payload.newTitle}:el))
        }
        default:
            return state
    }
}

type todolistsReducerType = changeFilterACType | removeTodoListACType | addTodoListACType | editTodoListTitleACType


type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (todoListId: string, value: FilterType) => {
    return {
        type: "CHANGE-FILTER",
        payload: {todoListId, value}
    } as const
}

export type removeTodoListACType=ReturnType<typeof removeTodoListAC>
export const removeTodoListAC = (todoListId: string) => {
    return {
        type:"REMOVE-TODOLIST",
        payload:{todoListId}
    } as const
}

export type addTodoListACType=ReturnType<typeof addTodoListAC>
export const addTodoListAC = (title: string) => {
    return {
        type:"ADD-TODOLIST",
        payload:{title, todoListId:v1() }
    } as const
}

type editTodoListTitleACType=ReturnType<typeof editTodoListTitleAC>
export const editTodoListTitleAC = (todoListId: string, newTitle: string) => {
    return {
        type:"EDIT-TODOLIST-TITLE",
        payload:{todoListId,newTitle}
    } as const
}
