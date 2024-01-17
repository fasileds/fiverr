import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = (props) => {
    const [book,setBooks] = useState({
        title:"",
        desc:"",
        price:null,
        cover:""
    })
    const navigate = useNavigate()
    const handelchanege = (e) =>{
        setBooks(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handelClick = async (e) =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:3001/",book)
            navigate("/")
        } catch (error){
            console.log(error)
        }

    }
    return (
        <div>
           <h1>add new book</h1>
           <input type='text' placeholder='title' onChange={handelchanege} name='title'/>
           <input type='text' placeholder='description' onChange={handelchanege} name='desc'/>
           <input type='number' placeholder='price' onChange={handelchanege} name='price' />
           <input type='text' placeholder='cover' onChange={handelchanege} name='cover'/>
           <button onClick={handelClick}>Add book</button>
        </div>
    )
}

export default Add
