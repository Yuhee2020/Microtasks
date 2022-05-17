import React from "react";

type PropsType={

}


export const NewComponent: React.FC<PropsType>=(props)=>{
    return (
        <div>

        </div>
    )
}


let comp = {
    "Dima":[{id:1, title:"Epam"},{id:2, title:"Huiam"}],
    "Vania":[{id:1, title:"Detsad"},{id:2, title:"School"}],
}

let comp2= {...comp, "Dima":comp.Dima.map(el=>el.id===2? {...el, title:"Interfarmax"}:el)}

console.log(comp.Dima[1].title)
console.log(comp2.Dima[1].title)