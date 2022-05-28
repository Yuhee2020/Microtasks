import React, {useState} from "react";
import {v1} from "uuid";
import {TaskType, TodoList} from "./components/TodoList";
import "./App.css"

export type FilterType = "all" | "active" | "completed"
export type TodoListType = {
    todolistID: string,
    title: string,
    filter: FilterType,
    tasks: Array<TaskType>
}
export type TodoListsType = Array<TodoListType>

function App() {
    const [todoLists, setTodolists] = useState<TodoListsType>([
            {
                todolistID: v1(),
                title: "what to do?",
                filter: "all",
                tasks: [
                    {taskId: v1(), title: "learning", isDone: true},
                    {taskId: v1(), title: "swimming", isDone: true},
                    {taskId: v1(), title: "walking", isDone: false}
                ]
            },
            {
                todolistID: v1(),
                title: "what to buy?",
                filter: "all",
                tasks: [
                    {taskId: v1(), title: "bread", isDone: true},
                    {taskId: v1(), title: "beer", isDone: true},
                    {taskId: v1(), title: "seledka", isDone: false}
                ]
            }
        ]
    )
    const removeTask = (todolistId: string, taskId: string) => {
        setTodolists(todoLists.map(el => el.todolistID === todolistId ? {...el, tasks: el.tasks.filter(t => t.taskId !== taskId)} : el))
    }
    const addTask = (todolistId: string, title: string) => {
        let newTask = {taskId: v1(), title, isDone: false}
        setTodolists(todoLists.map(el => el.todolistID === todolistId ? {...el, tasks: [newTask, ...el.tasks]} : el))
    }
    const changeStatus = (todolistId: string, taskId: string, status: boolean) => {
        setTodolists(todoLists.map(el => el.todolistID === todolistId ? {
            ...el,
            tasks: el.tasks.map(t => t.taskId === taskId ? {...t, isDone: status} : t)
        } : el))
    }
    const changeFilter = (todolistId: string, value: FilterType) => {
        setTodolists(todoLists.map(el => el.todolistID === todolistId ? {...el, filter: value} : el))
    }


    return (
        <div className="App">
            {todoLists.map(el => {
                let tasksForTodolist = el.tasks
                if (el.filter === "active") {
                    tasksForTodolist = el.tasks.filter(el => !el.isDone)
                }
                if (el.filter === "completed") {
                    tasksForTodolist = el.tasks.filter(el => el.isDone)
                }
                return (
                    <TodoList
                        key={el.todolistID}
                        tasks={tasksForTodolist}
                        title={el.title}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                        filter={el.filter}
                        todolistId={el.todolistID}/>
                )
            })}

        </div>
    )
}

export default App