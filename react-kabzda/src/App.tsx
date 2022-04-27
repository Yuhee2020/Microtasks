import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UCRating} from "./components/Rating/UncontrolledRaiting";
import {OnOff,} from "./components/OnOff/OnOff";
import {UCOnOff} from "./components/OnOff/UCOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState(0)
    let [collapsed, setCollapsed] = useState(true)
    let [on, setOn] = useState(true)

    return (
        <div className="App">

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UCRating/>
            <Accordion titleValue={"menu"}
                       collapsed={collapsed}
                       setCollapsed={()=>setCollapsed(!collapsed)}/>


            {/*<Accordion titleValue={"users"} collapsed={false}/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            <UCOnOff/>
            <OnOff on={on}
                     setOn={setOn}/>

        </div>
    );
}

export default App;
