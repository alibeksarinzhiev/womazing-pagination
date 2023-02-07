import axios from 'axios';
import React, { useState } from 'react';
import './create.css'

const CreateCard = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState("")
    const [err, setErr] = useState("")

    // const handleChange = (e) => {
    //     console.log(e.target.value)
    //     setTitle(e.target.value)
    // }

    const addCard = (e) => {
        e.preventDefault()
        const newPost = {
            title,
            price,
            img
        }
        axios
            .post("http://localhost:3004/posts/", newPost)
            .then(res => {
                setPrice("")
                setTitle("")
            })
            .catch(error => {
                setErr(error.message)
                console.log(error)
            })
    }

    return (
        <>
            <form onSubmit={addCard}>
                {err && <p style={{color: "red"}}>{err}, перейдите в консоль</p>}
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Введите название...' />
                <input value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder='Введите цену...' />
                <input value={img} onChange={e => setImg(e.target.value)} type="text" />

                {/* <input type="text" placeholder='Введите цену...' /> */}
                <button type='submit'>Отправить</button>
            </form>
        </> 
    );
};

export default CreateCard;