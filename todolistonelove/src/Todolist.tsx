import React from 'react';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId:string)=>void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map(el=>{
              const  onClickHandler=()=>{
                  props.removeTask(el.id)
              }
                return (
                    <li><button onClick={onClickHandler}>x</button>
                        <input type="checkbox"
                               checked={el.isDone}/>
                        <span>{el.title}</span></li>)
            })}
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
