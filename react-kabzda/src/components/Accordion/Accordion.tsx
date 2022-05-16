import React from "react";
type ItenType={
    title:string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: ()=>void
    items: ItenType[]
    onClick: (value:any)=>void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
            <AccordionTitle title={props.titleValue } setCollapsed={props.setCollapsed} />
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    }

    type AccordionTitlePropsType = {
        title: string
        setCollapsed:()=>void

    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        console.log("AccordionTitle rendering")
        return <h3 onClick={props.setCollapsed}>{props.title}</h3>
    }

    type AccordionBodyType={
    items: ItenType[]
        onClick: (value:any)=>void
    }
    function AccordionBody(props:AccordionBodyType) {
        console.log("AccordionBody rendering")
        return <ul>
            {props.items.map(el=>{
                return <li onClick={()=>{props.onClick(el.value)}}>{el.title}</li>
            })}
        </ul>
    }

    export default Accordion;
