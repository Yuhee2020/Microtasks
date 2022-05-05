import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type PropsType={
    title:string
    callBack:(newTitle:string)=>void
}


export const EditSpan=(props:PropsType)=>{
    const [editMode, setEditMode]=useState(false)
    const [newTitle, setNewTitle]=useState(props.title)
    const onDoubleClickHandler=()=>{
        setEditMode(!editMode)
        props.callBack(newTitle)
    }
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        e.key==="Enter" && onDoubleClickHandler()
    }

    return ( editMode
            ? <input value={newTitle}
                     autoFocus
                     onBlur={onDoubleClickHandler}
                     onChange={onChangeHandler}
                     onKeyPress={onKeyPressHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
}
