import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: ()=>void
    items: string[]
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
            <AccordionTitle title={props.titleValue } setCollapsed={props.setCollapsed}/>
        {!props.collapsed && <AccordionBody items={props.items}/>}
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
    items: string[]
    }
    function AccordionBody(props:AccordionBodyType) {
        console.log("AccordionBody rendering")
        return <ul>
            {props.items.map(el=>{
                return <li>{el}</li>
            })}
        </ul>
    }

    export default Accordion;
