import React, {useState} from "react";
import {v1} from "uuid";
import {TaskType, TodoList} from "./components/TodoList";
import "./App.css"

export type FilterType="all" | "active" | "completed"


function App() {
    const [filter, setFilter]=useState<FilterType>('all')
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "learning", isDone: true},
        {id: v1(), title: "swimming", isDone: true},
        {id: v1(), title: "walking", isDone: false}
    ])
    const removeTask=(taskId:string)=>{
        setTasks(tasks.filter(el=>el.id!=taskId))
    }
    const changeFilter=(value:FilterType)=>{
        setFilter(value)
    }
    const addTask=(title:string)=>{
        let newTask={id:v1(), title, isDone:false}
        setTasks([newTask, ...tasks ])
    }

    let tasksForTodolist=tasks
    if(filter==="active"){tasksForTodolist= tasks.filter(el=>!el.isDone)}
    if(filter==="completed"){tasksForTodolist= tasks.filter(el=>el.isDone)}

    return (
        <div className="App">
            <TodoList tasks={tasksForTodolist}
                      title="What to do?"
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}/>
        </div>
    )
}

export default App