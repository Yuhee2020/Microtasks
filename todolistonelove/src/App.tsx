import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";
import {FullInput} from "./components/FullInput";
import {Container, Grid, Paper,} from "@mui/material";
import ButtonAppBar from "./components/AppBar";
import {
    addTodoListAC,
    changeFilterAC,
    editTodoListTitleAC,
    removeTodoListAC,
    todolistsReducer
} from "./reducers/todolistReducer";
import {
    addTaskAC,
    changeStatusAC,
    editTaskAC,
    removeTaskAC,

    tasksReducer
} from "./reducers/tasksReducer";

export type FilterType = "all" | "active" | "completed"
export type TodoListsType = {
    id: string
    title: string
    filter: FilterType
}
export type TasksType = {
    [key: string]: Array<TaskType>
}

function App() {


    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todoLists, todoListsDispatch] = useReducer(todolistsReducer,[
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, tasksDispatch] = useReducer(tasksReducer,{
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
    const removeTodoList = (todoListId: string) => {
        todoListsDispatch(removeTodoListAC(todoListId))
        tasksDispatch(removeTodoListAC(todoListId))
        // setTodoLists(todoLists.filter(el => el.id !== todoListId))
        // delete tasks[todoListId]
        // setTasks({...tasks})
    }
    const addTask = (todoListId: string, title: string) => {
        tasksDispatch(addTaskAC(todoListId, title))
        // let newTask = {id: v1(), title: title, isDone: false}
        // setTasks({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]})
    }
    const removeTask = (todoListId: string, taskId: string) => {
        tasksDispatch(removeTaskAC(todoListId,taskId))
        // setTasks({...tasks, [todoListId]: tasks[todoListId].filter(el => el.id !== taskId)})
    }
    const changeFilter = (todoListId: string, value: FilterType) => {
        todoListsDispatch(changeFilterAC(todoListId,value))
        // setTodoLists(todoLists.map(el => el.id === todoListId ? {...el, filter: value} : el))
    }
    const changeStatus = (todoListId: string, taskId: string, status: boolean) => {
        tasksDispatch(changeStatusAC(todoListId,taskId,status))
        // setTasks({...tasks, [todoListId]: tasks[todoListId].map(el => el.id === taskId ? {...el, isDone: status} : el)})
    }
    const addTodoList = (title: string) => {
        /*let todolistId = v1()
        let newTodolist: TodoListsType = {id: todolistId, title: title, filter: 'all'}*/
        todoListsDispatch(addTodoListAC(title))
        tasksDispatch(addTodoListAC(title))
        // setTodoLists([newTodolist, ...todoLists])
        // setTasks({...tasks, [todolistId]: []})
    }
    const editTask = (todoListId: string, taskId: string, newTitle: string) => {
        tasksDispatch(editTaskAC(todoListId,taskId,newTitle))
        // setTasks({...tasks, [todoListId]: tasks[todoListId].map(el => el.id === taskId ? {...el, title: newTitle} : el)})
    }
    const editTodoListTitle = (todoListId: string, newTitle: string) => {
        todoListsDispatch(editTodoListTitleAC(todoListId,newTitle))
        // setTodoLists(todoLists.map(el => el.id === todoListId ? {...el, title: newTitle} : el))
    }

    return (

        <div className="App">

            <Container fixed>
                <ButtonAppBar/>
                <Grid container spacing={5} >
                    <Grid item xs={12} style={{textAlign: 'center', marginTop:"20px"}}>
                        <FullInput callBack={addTodoList} />
                    </Grid>


                    {todoLists.map(el => {

                        let taskForTodolist = tasks[el.id]
                        if (el.filter === "active") {
                            taskForTodolist = tasks[el.id].filter(el => !el.isDone)
                        }
                        if (el.filter === "completed") {
                            taskForTodolist = tasks[el.id].filter(el => el.isDone)
                        }

                        return <Grid item key={el.id} style={{ marginLeft: "auto", marginRight: "auto"}} >
                            <Paper elevation={3}style={{padding:" 20px"}}>
                            <Todolist
                                key={el.id}
                                todoListId={el.id}
                                title={el.title}
                                tasks={taskForTodolist}
                                removeTask={removeTask}
                                changeFilter={changeFilter}
                                addTask={addTask}
                                changeStatus={changeStatus}
                                filter={el.filter}
                                removeTodoList={removeTodoList}
                                editTask={editTask}
                                editTodoListTitle={editTodoListTitle}/>
                            </Paper>
                        </Grid>

                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
