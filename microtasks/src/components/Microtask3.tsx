import {useState} from "react";

export const Microtask3 = () => {
    // let a = 1
    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
    }

    const onClickHandler1 = () => {
        setA(a = 0)


    }
    return (
        <div>

            <h1>{a}</h1>
            <button onClick={onClickHandler}> number</button>
            <button onClick={onClickHandler1}> 0</button>
        </div>

    )
}