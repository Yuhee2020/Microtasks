import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./reducers/todolistsReducer";



const rootReducer=combineReducers(
    {todoLists:todolistsReducer}
)
export type RootStateType=ReturnType<typeof rootReducer>
export const store=createStore(rootReducer)