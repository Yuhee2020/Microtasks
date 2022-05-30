import React, {useMemo, useState} from "react";
import {NewMessagesCounter} from "../reactMemo/reactMemo";

export const Example11=()=>{
    const [a, setA]=useState(5)
    const [b,setB]=useState(5)

    let resultA = 1
    let resultB = 1

    resultA=useMemo(()=>{
        for(let i =1; i<=a; i++){
            resultA= resultA*i
            let fake=0;
            while (fake<10000000){
                fake++;
                const fakeValue=Math.random()
            }
        }
        return resultA
    },[a])

    for(let i =1; i<=b; i++){
        resultB= resultB*i
    }

    return<>
    <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
    <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <hr/>
        <div> Result for a: {resultA}</div>
        <div> Result for b: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("users")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>
    )}</div>
}

const Users=React.memo(UsersSecret)

export const Example12 = () => {
    const [users, setUsers] = useState(["Dimas", "Pedro", "Vovik"])
    const [count, setCount] = useState(0)
    const [value, setValue] = useState("")

    const newArray=useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf("a")>-1)},[users])

    return <>

        <button onClick={()=>{setCount(count+1)}}>+</button>
        {count}
        <Users users={newArray}/>

    </>
}