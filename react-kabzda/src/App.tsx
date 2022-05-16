import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UCRating} from "./components/Rating/UncontrolledRaiting";
import {OnOff,} from "./components/OnOff/OnOff";
import {UCOnOff} from "./components/OnOff/UCOnOff";
import {ControlledCheckBox, ControlledSelect, GetValueOfUCInput, TrackValueOfInput,} from "./components/Input/Input";

function App() {
    let [ratingValue, setRatingValue] = useState(0)
    let [collapsed, setCollapsed] = useState(true)
    let [on, setOn] = useState(true)
    const onClickHandler = (value: any) => {
        alert("was cliked" + value)

    }

    return (
        <div className="App">

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UCRating/>
            <Accordion titleValue={"menu"}
                       collapsed={collapsed}
                       setCollapsed={() => setCollapsed(!collapsed)}
                       items={[{title: "Dima", value: 1}, {title: "vasia", value: 2}, {
                           title: "Vania",
                           value: 3
                       }, {title: "Ira", value: 4}]}
                       onClick={onClickHandler}/>


            {/*<Accordion titleValue={"users"} collapsed={false}/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            <UCOnOff/>
            <OnOff on={on}
                   setOn={setOn}/>

            <TrackValueOfInput/>
            <GetValueOfUCInput/>
            <ControlledCheckBox/>
            <ControlledSelect/>

        </div>
    );
}

export default App;
