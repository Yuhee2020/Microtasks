import React, {useState} from "react";



export const NewMessagesCounter = (props: any) => {
    console.log("counter")
    return <div>{props.count}</div>
}

export const UsersSecret = (props: { users: Array<string> }) => {
    console.log("users")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>
    )}</div>
}

const Users=React.memo(UsersSecret)

export const Example1 = () => {
    const [users, setUsers] = useState(["Dimas", "Pedro", "Vovik"])
    const [count, setCount] = useState(0)
    const [value, setValue] = useState("")
    return <>

        <button onClick={()=>{setCount(count+1)}}>+</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
        <input onChange={(e)=>{setValue(e.currentTarget.value)}}/>
        <button onClick={()=>{setUsers([...users, value])}}>+</button>
    </>
}