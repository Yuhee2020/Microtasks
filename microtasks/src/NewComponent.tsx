import React from "react";

type NewComponentType =
    {
        students: Array<StudentsType>
        topCars: Array<TopCarsType>
    }

type TopCarsType = {
    manufacturer: string
    model: string
}

type StudentsType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.students.map((el, index) =>
                    <li key={el.id}> {el.name}: {el.age}</li>
                )}
            </ul>
            <table>
                <tr>
                    <th>number</th>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                {props.topCars.map((el,index) =>
                    <tr>
                        <td>{index+1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )}


            </table>
        </div>
    )
}