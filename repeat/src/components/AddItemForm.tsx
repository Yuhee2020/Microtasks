import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type PropsType={
    addItem:(title:string)=>void
}

export const AddItemForm = React.memo((props:PropsType) => {
    console.log("AIF called")
    const [title, setTitle] = useState("")
    const [error, setError] = useState<null| string>(null)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && addTask()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        error && setError("")
    }
    const addTask = () => {
        if (title.trim()) {
            props.addItem(title.trim())
            setTitle("")
        } else setError("Title is required")
    }
    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error &&  <div className={"error-message"}>{error}</div>}
        </div>
    );
});

