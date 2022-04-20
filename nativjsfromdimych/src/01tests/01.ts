const sentence = "Hello my friends"


export const sum=(a:number, b:number)=>{
    return a+b

}

export const mult=(a:number, b:number)=>{
    return a*b

}


export const splitIntoWords=(sentence:string)=>{
    return sentence.toLowerCase().split(" ").map(w=>w.replace('!',""))
}

