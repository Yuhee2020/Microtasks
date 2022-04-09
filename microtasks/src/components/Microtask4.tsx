import React, {useState} from "react";
import {NewComponent} from "./NewComponent";


export type FilterType='all' | 'Dollars'| 'RUBLS'


export const Microtask4 = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const[filter, setFilter]=useState<FilterType>('all')

    let currentMoney = money
    if(filter==="RUBLS"){ currentMoney = money.filter((el) => {return el.banknots === "RUBLS"})}
    if(filter==="Dollars"){ currentMoney = money.filter((el) => {return el.banknots === "Dollars"})}



    const onClickFilterHandler=(nameButton: FilterType)=>{
        setFilter(nameButton)
        console.log(nameButton)
    }

        return (
            <NewComponent
                currentMoney={currentMoney}
                onClickFilterHandler={onClickFilterHandler}
            />

    )
}