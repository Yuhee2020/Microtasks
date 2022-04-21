type LocalCityType={
    title: string,
    country: string,
}

type AddressaType={
    addressTitle: string
    city: LocalCityType
}
type TechTypes={
    id: number
    title: string
}

type StudentType={
    name: string
    age: number
    active: boolean
    address: AddressaType
    technologies: Array<TechTypes>
}


const student: StudentType= {
    name: "Dima",
    age: 5,
    active: true,
    address: {
        addressTitle: "Nabereznaja",
        city: {
            title: "Brest",
            country: "Belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "JS"
        },
        {
            id: 2,
            title: "HTML CSS",
        },
        {
            id: 3,
            title: "React"
        },
    ]
}

console.log(student.technologies[2].title)
console.log(student.name)
console.log(student.age)

