import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import './create.css'
import productServices from '../../servicese/product';


const CreateCard = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState()
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
        productServices
            .createProduct(newPost)
            .then(res => {
                setPrice("")
                setTitle("")
                setImg("")
            })
            .catch(error => {
                setErr(error.message)
                console.log(error)
            })
    }

    return (
        <>
            <form onSubmit={addCard}>

                <h1>Create Product</h1>

                {err && <p style={{ color: "red" }}>{err}, перейдите в консоль</p>}

                <TextField
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    id='outlined-basic'
                    variant="outlined"
                    label='Введите название...' />

                <TextField
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    type="text"
                    label='Введите цену...'
                    id='outlined-basic' variant="outlined"
                    style={{ margin: "20px 0" }}
                />

                <TextField
                    value={img}
                    onChange={e => setImg(e.target.value)}
                    type="text"
                    label='Путь картинки...'
                    id='outlined-basic'
                    variant="outlined" />
                <Button variant="contained" type='submit' style={{ marginTop: "20px" }}>Отправить</Button>
            </form>
        </>
    );
};

export default CreateCard;