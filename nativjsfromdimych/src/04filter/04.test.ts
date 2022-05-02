function increageName(u: UserType) {
    u.age++
}

type UserType={
    name: string
    age: number
    address?:{title:string}
}

test("object test", () => {

    let user: UserType = {
        name: "Dima",
        age: 30
    }
    increageName(user)
    expect(user.age).toBe(31)

    const superman = user
    superman.age=1000
    expect(user.age).toBe(1000)


})




test("Array reference  test", () => {

    let users: Array<UserType> = [{
        name: "Dima",
        age: 30
    },
        {
            name: "Dima",
            age: 30
        }
    ]

    let admins= users

    admins.push({name:"Bandugan", age:10})

    expect(users[2]).toEqual({name:"Bandugan", age:10})

})



test("value  test", () => {

    let usersCount=100;
    let adminsCount=usersCount

    adminsCount++


    expect(usersCount).toEqual(100)

})


test("hard object test", () => {

    let user: UserType = {
        name: "Dima",
        age: 30,
        address: {
            title: "Minsk"
        }
    }

//let addr = user.address

    let user2: UserType ={
        name: "Dasha",
        age: 30,
        address: user.address
    }
    user2.address.title = "Kobrin"

    expect(user.address?.title).toBe("Kobrin")


})