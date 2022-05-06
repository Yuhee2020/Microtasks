import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";
import {FormForAdd} from "./FormForAdd";

export type FilterType = "all" | "active" | "completed"
export type TodolistsType = {
    id: string
    title: string
    filter: FilterType
}

function App() {


    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    const removeTodolist=(todolistID:string)=>{
        setTodolists(todolists.filter(el=>el.id!==todolistID))
        delete tasks[todolistID]
        setTasks({...tasks})
    }

    const EditTask = (todolistID:string, taskId:string, newTitle:string) => {
        setTasks({...tasks, [todolistID]:tasks[todolistID].map(el=>el.id===taskId? {...el, title:newTitle}:el)})
    }
    const EditTodolist = (todolistID:string,newTitle:string)=>{
        setTodolists(todolists.map(el=>el.id===todolistID? {...el, title:newTitle}: el))
    }

    const removeTask = (todolistID: string, taskId: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== taskId)})
    }
    const addTask = (todolistID: string, newTitle: string) => {
        let newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }
    const changeFilter = (todolistID: string, value: FilterType) => {
        setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value} : el))
    }
    const changeStatus = (todolistID: string, taskId: string, isDoneStatus: boolean) => {
        setTasks({
            ...tasks, [todolistID]: tasks[todolistID].map(el => el.id === taskId ? {...el, isDone: isDoneStatus} : el)
        })

    }
    const addTodolist = (title: string) => {
        let NewTodolistId = v1();
        let newTodolist: TodolistsType = {id: NewTodolistId, title: title, filter: 'all'}
        setTodolists([newTodolist, ...todolists])
        setTasks({...tasks, [NewTodolistId]: []})

    }

    return (
        <div className="App">
            <FormForAdd callBack={addTodolist}/>
            {todolists.map(el => {
                let filteredTasks = tasks[el.id]
                if (el.filter === "active") {
                    filteredTasks = tasks[el.id].filter(el => !el.isDone)
                }
                if (el.filter === "completed") {
                    filteredTasks = tasks[el.id].filter(el => el.isDone)
                }
                return (
                    <Todolist
                        key={el.id}
                        todolistID={el.id}
                        title={el.title}
                        tasks={filteredTasks}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                        filter={el.filter}
                        EditTask={EditTask}
                        EditTodolist={EditTodolist}
                        removeTodolist={removeTodolist}/>
                )
            })}


        </div>
    );
}

export default App;
