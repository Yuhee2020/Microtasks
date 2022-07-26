import {FilterType, TodolistsType} from "../App";
import {v1} from "uuid";

let initialState:TodolistsType[]=[]

export const todolistsReducer=(state:TodolistsType[]=initialState,action:ActionsType):TodolistsType[]=>{
    switch (action.type){
        case "REMOVE-TODOLIST":{
            return state.filter(el=>el.id!==action.todolistId)
        }
        case "ADD-TODOLIST": {
            return [...state, {id: action.todolistId, title: action.title, filter: 'all'}]
        }
        case "CHANGE-FILTER": {
            return state.map(el=>el.id===action.todolistId? {...el, filter:action.filter}:el)
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(el=>el.id===action.todolistId? {...el, title:action.title}:el)
        }
        default: return state

    }
}

type ActionsType= removeTodolistAType | addTodolistAType | changeFilterAType | changeTodolistTitleAType

export type removeTodolistAType=ReturnType<typeof removeTodolistAC>
export const removeTodolistAC=(todolistId: string)=>{
    return{
        type: "REMOVE-TODOLIST",
        todolistId
    }as const
}
export type addTodolistAType=ReturnType<typeof addTodolistAC>
export const addTodolistAC=(title: string)=>{
    return{
        type: "ADD-TODOLIST",
        title,
        todolistId:v1()
    }as const
}

export type changeFilterAType=ReturnType<typeof changeFilterAC>
export const changeFilterAC=(todolistId: string, filter: FilterType)=>{
    return{
        type: "CHANGE-FILTER",
        todolistId,
        filter
    }as const
}

export type changeTodolistTitleAType=ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC=(todolistId:string, title:string)=>{
    return{
        type: "CHANGE-TODOLIST-TITLE",
        todolistId,
        title
    }as const
}
