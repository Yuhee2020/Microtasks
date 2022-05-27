import React from "react";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type PropsType = {
    tasks: Array<TaskType>
}

export const TodoList = (props: PropsType) => {
    return (<div>
            {props.tasks.map(el=>{
                return(
                    <h3>{}</h3>
                    <div>{el.title}</div>
                )
            })}
        </div>
    )
}