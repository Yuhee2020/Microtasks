import {mult, splitIntoWords, sum} from "./01";


//данные
let a = 1
let b = 2
let c = 3

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})


test("sum should be correct", () => {
    // данные

    //действие
    const result = sum(a, b)
    const result2 = sum(b, c)

    // ожидаемый результат

    expect(result).toBe(3);
    expect(result2).toBe(5);
})

test("multiple should be correct", () => {
    // данные

    //действие
    const result = mult(a, b)
    const result2 = mult(b, c)

    // ожидаемый результат

    expect(result).toBe(2);
    expect(result2).toBe(6);
})

test("splitting into words shod be correct", () => {

    const sent1 = "Hello my friend!"
    const sent2 = "Js is programming language!"

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")

    expect(result2[0]).toBe("js")
    expect(result2[1]).toBe("is")
    expect(result2[2]).toBe("programming")
    expect(result2[3]).toBe("language")

})
