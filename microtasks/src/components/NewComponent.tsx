import React from "react";
import {FilterType} from "./Microtask4";
import {Button} from "./Button";

type CurrentMoneyType= {
    banknots: string
    value: number
    number: string
}

type NewComponentProps={
    currentMoney: Array<CurrentMoneyType>
    onClickFilterHandler: (nameButton:FilterType)=>void
}

export const NewComponent =(props:NewComponentProps)=>{
    return(
        <div>
            <ul>
                {props.currentMoney.map((el, index) => {
                    return <li key={index}> {el.banknots} {el.value} {el.number}</li>
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={()=>props.onClickFilterHandler("all")}>all</button>
                <button onClick={()=>props.onClickFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={()=>props.onClickFilterHandler("Dollars")}>Dollars</button>

                //через универсальную кнопку
                <Button name={'all'} callBack={()=>{props.onClickFilterHandler("all")}}/>
                <Button name={'RUBLS'} callBack={()=>{props.onClickFilterHandler("RUBLS")}}/>
                <Button name={'Dollars'} callBack={()=>{props.onClickFilterHandler("Dollars")}}/>
            </div>

        </div>
    )
}