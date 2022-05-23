import React, {useReducer} from "react";
import {collapsedReducer} from "./CollapsedReducer";

type UncontrolledAccordionPropsType = {
    titleValue: string

}




function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("Accordion rendering")
    /*let [collapsed, setCollapsed]=useState(true)*/
    let [collapsed, dispatchCollapsed]=useReducer(collapsedReducer, false)

    return <div>
         {/*   <UncontrolledAccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
            <UncontrolledAccordionTitle title={props.titleValue} onClick={()=>{dispatchCollapsed({type:"TOGGLE_COLLAPSED"})}}/>
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
