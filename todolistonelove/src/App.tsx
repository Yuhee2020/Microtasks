import React from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

function App() {

    const tasks = [
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
    ]

    const removeTask=()=>{

    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}/>

        </div>
    );
}

export default App;
