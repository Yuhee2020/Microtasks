import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string

}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("Accordion rendering")
    let [collapsed, setCollapsed]=useState(true)

    return <div>
            <UncontrolledAccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
        {collapsed && <UncontrolledAccordionBody/>}
        </div>
    }

    type UncontrolledAccordionTitlePropsType = {
        title: string
        onClick: ()=>void
    }

    function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
        console.log("AccordionTitle rendering")
        return <h3 onClick={props.onClick}>{props.title}</h3>
    }

    function UncontrolledAccordionBody() {
        console.log("AccordionBody rendering")
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    }

    export default UncontrolledAccordion;
