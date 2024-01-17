import React, { useEffect, useState } from 'react'
import axios from "axios"

const Books = (props) => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        const facth = async ()=>{
            try {
                const res = axios.get("http://localhost:3001/books")
                setBooks(res.data)
            } catch (error) {
                
            }
        }
        facth ()

    },[])
    return (
        <div>
            <h1>fasl books</h1>
            <div>
                {books.map(book=>(
                    <div key={book.id}>
                       {book.cover && <img src={book.cover} alt='there is no picture' />}
                       <h2>{book.title}</h2>
                       <h2>{book.desc}</h2>
                       <span>{book.price}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Books
