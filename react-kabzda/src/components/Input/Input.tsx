import {ChangeEvent, useRef, useState} from "react";


export const UncontrolledInput=()=>{
    <input/>
}

export const TrackValueOfInput=()=>{
    const [value, setValue]=useState("")
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.currentTarget.value)
    }
    return <> {value} <input value={value} onChange={onChangeHandler}/></>
}

export const GetValueOfUCInput=()=>{
    const [value, setValue]=useState("")
    const inputRef= useRef<HTMLInputElement | null>(null)
    const onClickHandler=()=>{
       if(inputRef.current){
           setValue(inputRef.current.value)
       }
    }
    return <> <input ref={inputRef}/>
        <button onClick={onClickHandler}>save</button> actual value {value}
        </>
}


export const ControlledCheckBox=()=>{
    const [value, setValue]=useState(true)
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.checked)
    }
    return(
        <div>
        <input type={"checkbox"} checked={value} onChange={onChangeHandler}/>
        </div>
    )


}

export const ControlledSelect=()=>{
    const [value, setValue]=useState<undefined | string>("2")
    const onChangeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
        setValue(e.currentTarget.value)
    }
    return(
        <div>
            <select value={value} onChange={onChangeHandler}>
                <option>none</option>
                <option value={'1'}>Minsk</option>
                <option value={"2"}>Brest</option>
                <option value={"3"}>Grodna</option>
            </select>
        </div>
    )

}