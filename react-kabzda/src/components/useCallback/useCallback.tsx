import React, {useCallback, useMemo, useState} from "react";



export const LIkeUseCallBack = () => {
    console.log("LikeUseCallBack")
    const [books, setBooks] = useState(["React", "JS", "CSS"])
    const [count, setCount] = useState(0)


    const newArray=useMemo(()=>{

        return books.filter(u=>u.toLowerCase().indexOf("a")>-1)},[books])

    const addBook=useMemo(()=>{
        return ()=>{
        const newBook=[...books, "Angular" + new Date().getTime()]
        setBooks(newBook)}
    },[books])
    return <>

        <button onClick={()=>{setCount(count+1)}}>+</button>

        {count}
        <Books books={newArray}
               addBook={addBook}
        />

    </>
}


const BooksSecret = (props: { books: Array<string>; addBook:()=>void }) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={()=>{props.addBook()}}>add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>
    )}</div>
}

const Books=React.memo(BooksSecret)