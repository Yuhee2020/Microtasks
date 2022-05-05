import s from "./Todolist.module.css";
import React from "react";

export const FormForAdd = () => {
    return (<div>
        <input value={title}
               className={error ? s.errorInput : ""}
               onChange={onChangeTitleHandler}
               onKeyPress={onKeyPressHandler}
        />
        <button onClick={addTaskHandler}>+</button>
        {error ? <div className={s.error}>{error}</div> : ""}
    </div>)
}