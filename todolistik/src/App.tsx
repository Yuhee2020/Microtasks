import React from "react";
import {TaskType, TodoList} from "./components/TodoList";
import "./App.css"
import {
    addTaskAC,
    addTodolistAC,
    changeFilterAC,
    changeStatusAC,
    editTaskTitleAC, editTodolistTitleAC,
    removeTaskAC,
    removeTodolistAC
} from "./reducers/todolistsReducer";
import {FullInput} from "./components/FullInput";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store";

export type FilterType = "all" | "active" | "completed"
export type TodoListType = {
    todolistID: string,
    title: string,
    filter: FilterType,
    tasks: Array<TaskType>
}
export type TodoListsType = Array<TodoListType>

function App() {
    const todoLists = useSelector<RootStateType, TodoListsType>(state => state.todoLists)
    const dispatch = useDispatch();
    const removeTask = (todolistId: string, taskId: string) => {
        dispatch(removeTaskAC(todolistId, taskId))
    }
    const addTask = (todolistId: string, title: string) => {
        dispatch(addTaskAC(todolistId, title))
    }
    const changeStatus = (todolistId: string, taskId: string, status: boolean) => {
        dispatch(changeStatusAC(todolistId,
            taskId,
            status))
    }
    const changeFilter = (todolistId: string, value: FilterType) => {
        dispatch(changeFilterAC(todolistId,
            value))
    }
    const addTodolist = (title: string) => {
        dispatch(addTodolistAC(title))
    }
    const removeTodolist = (todolistId: string) => {
        dispatch(removeTodolistAC(todolistId))
    }
    const editTaskTitle = (todolistId: string, taskId: string, title: string) => {
        dispatch(editTaskTitleAC(todolistId, taskId, title))
    }
    const editTodolistTitle = (todolistId: string, title: string) => {
        dispatch(editTodolistTitleAC(todolistId,title))
    }

    return (
        <div className="App">
            <div>
                <FullInput callBack={addTodolist}/>
            </div>
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
                        todolistId={el.todolistID}
                        removeTodolist={removeTodolist}
                        editTaskTitle={editTaskTitle}
                        editTodolistTitle={editTodolistTitle}/>
                )
            })}

        </div>
    )
}

export default App