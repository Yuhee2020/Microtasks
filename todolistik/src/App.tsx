import React, {useState} from "react";
import {v1} from "uuid";
import {TodoList} from "./components/TodoList";


function App(){
    const [tasks, setTasks] = useState( [
        {id: v1(), title: "learning", isDone: false},
        {id: v1(), title: "swimming", isDone: false},
        {id: v1(), title: "walking", isDone: false}
    ])
  return(
    <TodoList tasks={tasks}/>
  )}

export default App