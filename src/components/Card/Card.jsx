import React from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Card = ({ img, title, price }) => {

    return (
        <>
            <img src={img} alt="" />
            <p>{title}</p>
            <p>{price}$</p>
        </>
    );
};

export default Card;