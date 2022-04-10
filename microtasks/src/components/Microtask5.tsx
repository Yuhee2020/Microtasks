import React, {useState} from "react";
import {FullInput, } from "./FullInput";
import {Input} from "./Input";
import {ButtonForInput} from "./ButtonForInput";

export const Microtask5 = () => {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [title, setTitle]=useState('')


    const addMessage=(title:string)=>{
      let newMassage={message:title}
        setMessage([newMassage,...message])
    }

    const callBackButtonHandler=()=>{
        addMessage(title)
        setTitle("")
    }

    return (
        <div>
            <div>
                {/*<FullInput addMessage={addMessage}/>*/}
                <Input setTitle={setTitle} title={title}/>
                <ButtonForInput name={"+"} callBack={callBackButtonHandler} />
            </div>
            <div>
                {message.map((el, index) => {
                    return <div key={index}>{el.message}</div>
                })}
            </div>
        </div>
    )
}