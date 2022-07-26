import React, {ChangeEvent, useState} from 'react';
type PropsType={
    title:string
    changeTitle: (title:string)=>void
}
export const EditSpan =React.memo( (props:PropsType) => {
    console.log("EditSpan called")
    const [editMode, setEditMode]=useState(false)
    const [title, setTitle]=useState(props.title)

    const onOff=()=>{
        setEditMode(!editMode)
        props.changeTitle(title)
    }
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }
    return (
        editMode
        ?<input autoFocus
                value={title}
                onBlur={onOff}
                onKeyPress={(e)=>{e.key==="Enter" && onOff()}}
            onChange={onChangeHandler}/>
        :<span onDoubleClick={onOff}>{title}</span>
    );
});

