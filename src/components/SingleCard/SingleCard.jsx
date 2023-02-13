import React from 'react';
import productService from "../../servicese/product"
import axios from 'axios';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';


const SingleCard = ({ title, price, img }) => {

    const { id } = useParams();

    const deleteHandler = () => {
        axios.delete(`http://localhost:3004/posts/${id}`)
            .then(res => {
                console.log(res);
            })
    }



    return (
        <div className='single__card'>
            <div className="card__img">
                <img src={img} alt="" />
            </div>
            <div className="card__descr">
                <h1>{title}</h1>
                <h1>{price}</h1>
            </div>
            <Button onClick={deleteHandler}><Link to="/shop">DELETE</Link></Button>
        </div>
    );
};

export default SingleCard;