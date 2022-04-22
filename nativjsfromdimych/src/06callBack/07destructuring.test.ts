


test("", () => {

    let props={
        name: "Dima",
        age: 30,
        lessons: [{title: "1"},{title: "2"}],
        address: {
            street: {
                tittle: "Nab str"
            }
        }
    }

    const{age, lessons,}= props

    const a = props.age;
    const l = props.lessons;
    const title= props.address.street


    expect(age).toBe(30)
    expect(lessons.length).toBe(2)

    expect(a).toBe(30)
    expect(l.length).toBe(2)
    expect(title).toBe("Nab str")

});
