import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import './create.css'
import productServices from '../../servicese/product';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CreateCard = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState()
    const [img, setImg] = useState("")
    const [err, setErr] = useState("")
    const [category, setCategory] = useState('');

    // const handleChange = (e) => {
    //     console.log(e.target.value)
    //     setTitle(e.target.value)
    // }

    const addCard = (e) => {
        e.preventDefault()
        const newPost = {
            title,
            price,
            category,
            img
        }
        productServices
            .createProduct(newPost)
            .then((res) => {
                setPrice("")
                setTitle("")
                setImg("")
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

                <Box sx={{ minWidth: 120 }} style={{marginTop: "20px"}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <MenuItem value={"Футболка"}>Футболка</MenuItem>
                            <MenuItem value={"Купальник"}>Купальник</MenuItem>
                            <MenuItem value={"Свитшот"}>Свитшот</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Button variant="contained" type='submit' style={{ marginTop: "20px" }}>Отправить</Button>
            </form>
        </>
    );
};

export default CreateCard;