import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";


export type FilterType = "all" | "active" | "completed"


function App() {

    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }
    const changeFilter = (value: FilterType) => {
        setFilter(value)
    }
    const addTask=(title:string)=>{
        let newTask={id: v1(), title, isDone: true}
        setTasks([newTask,...tasks])
    }
    const changeStatus=(taskId:string, taskStatus: boolean)=>{
        setTasks(tasks.map(el=>el.id===taskId? {...el, isDone: taskStatus} : el))
    }

    let tasksForTodoList = tasks
    if (filter === "active") {
        tasksForTodoList = tasks.filter(el => !el.isDone)
    }
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(el => el.isDone)
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeStatus={changeStatus}/>

        </div>
    );
}

export default App;
