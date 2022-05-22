import s from "./Select.module.css"
import {useState, KeyboardEvent} from "react";

type PropsType = {
    value: string
    onChange: (value: string) => void
    items: Array<{ value: string, title: string }>
}

export const Select = (props: PropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElValue, setHoveredElValue] = useState(props.value)
    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElValue)
    const onClickHandler = () => {
        setActive(!active)}
    const changeValue = (value:string) => {
        props.onChange(value)
        onClickHandler()
    }
    const onKeyUpHandler=(e:KeyboardEvent<HTMLDivElement>)=>{

    }
    return (
        <div className={s.select} onKeyUp={onKeyUpHandler}>
            <span className={s.main} onClick={onClickHandler} >{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={s.items}>
                    {props.items.map((el) => {

                        return <div
                            onMouseEnter={()=>{setHoveredElValue(el.value)}}
                            className={s.item +" "+ (hoveredItem === el? s.selected: "")}
                            onClick={()=>changeValue(el.value)}
                            key={el.value}>{el.title}</div>
                    })}
                </div>
            }
        </div>
    )
}