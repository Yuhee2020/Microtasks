import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import { Microtask3 } from './components/Microtask3';
import { Microtask4 } from './components/Microtask4';

const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button3Foo=()=>{
        console.log("I am stupid button")
    }


    return (
        <div className="App">

            <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo('Vasia', 21, "live in brest")}/>
            <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo('ivan', 55)}/>
            <Button name={"StupidButton"} callBack={Button3Foo}/>
            {/*<NewComponent students={students} topCars={topCars}/>*/}

            {/*<Microtask3/>*/}
            <Microtask4/>


        </div>
    );
}

export default App;
