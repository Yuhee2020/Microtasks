import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterType = "all" | "active" | "completed"

function App() {

    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])
    const [filter, setFilter] = useState<FilterType>("all")

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }
    const addTask= (newTitle:string)=>{
        let newTask= {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask,...tasks])
    }
    const changeFilter=(value:FilterType)=>{
        setFilter(value)
    }
    const changeStatus=(taskId:string, isDoneStatus:boolean)=>{
        setTasks(tasks.map(el=>el.id===taskId?{...el, isDone: isDoneStatus}:el))
    }


    let filteredTasks = tasks
    if (filter === "active") {
        filteredTasks = tasks.filter(el => !el.isDone)
    }
    if (filter === "completed") {
        filteredTasks = tasks.filter(el => el.isDone)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeStatus={changeStatus}
                      filter={filter}/>

        </div>
    );
}

export default App;
