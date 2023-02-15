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
                <h1>{price} $</h1>
                <Button
                variant="contained" 
                onClick={deleteHandler}
                style={{background: "red"}}
                >
                    <Link to="/shop" style={{textDecoration: "none", color: "white"}}>DELETE</Link>
                </Button>
            </div>
        </div>
    );
};

export default SingleCard;