import React, {useCallback} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {AddItemForm} from "./components/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {addTodolistAC} from "./redux/todolistsReducer";

export type FilterType = "all" | "active" | "completed"
export type TodolistsType = {
    id: string
    title: string
    filter: FilterType
}
export type TasksStateType = {
    [key: string]: TaskType[]
}

function App() {


    const todolists = useSelector<AppStateType, TodolistsType[]>(state => state.todolists)
    const dispatch = useDispatch()


    const addTodolist = useCallback((title: string) => {
        dispatch(addTodolistAC(title))
    }, [])


    return (
        <div className="App">
            <AddItemForm addItem={addTodolist}/>
            {todolists.map(el => {

                return <Todolist
                    key={el.id}
                    todolist={el}
                />

            })}


        </div>
    );
}

export default App;