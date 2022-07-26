import {todolistsReducer} from "./todolistsReducer";
import {tasksReducer} from "./tasksReducer";
import { combineReducers, legacy_createStore as createStore} from 'redux'


const rootReducer=combineReducers(
    {
        todolists:todolistsReducer,
        tasks: tasksReducer
    }
)

export const store=createStore(rootReducer)

export type AppStateType=ReturnType<typeof rootReducer>

// @ts-ignore
window.store=store