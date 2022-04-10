import React from "react";



type ButtonForInputPropsType={
    name: string
    callBack: ()=>void

}
export const ButtonForInput=(props:ButtonForInputPropsType)=>{
    const onClickButtonHandler=()=>{
        props.callBack()
    }
    return(
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}