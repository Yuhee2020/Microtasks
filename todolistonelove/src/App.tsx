import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";


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

    const removeTask = (todolistId: string, taskId: string) => {
        setTasks({...tasks,[todolistId]:tasks[todolistId].filter(el=>el.id!==taskId)})

    }
    const changeFilter = (todolistId: string, value: FilterType) => {
        setTodolists(todolists.map(el=>el.id===todolistId? {...el, filter:value}:el))

    }
    const addTask = (todolistId: string, title: string) => {
        let newTask={id: v1(), title, isDone: true}
        setTasks({...tasks,[todolistId]:[newTask, ...tasks[todolistId]]})
        // setTasks([newTask,...tasks])
    }
    const changeStatus = (todolistId: string, taskId: string, taskStatus: boolean) => {
        setTasks({...tasks,[todolistId]:tasks[todolistId].map(el=>el.id===taskId? {...el, isDone:taskStatus}:el)})
        // setTasks(tasks.map(el=>el.id===taskId? {...el, isDone: taskStatus} : el))
    }

    const removeTodolist=(todolistId: string)=>{
        setTodolists(todolists.filter(el=>el.id!==todolistId))
    }


    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodoList = tasks[el.id]
                if (el.filter === "active") {
                    tasksForTodoList = tasks[el.id].filter(el => !el.isDone)
                }
                if (el.filter === "completed") {
                    tasksForTodoList = tasks[el.id].filter(el => el.isDone)
                }

                return (
                    <Todolist
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                        filter={el.filter}
                        removeTodolist={removeTodolist}/>
                )

            })}

        </div>
    );
}

export default App;
