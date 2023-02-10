import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {

    const { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/posts/${id}`)
            .then(res => setProduct(res.data))
    }, [])

    return (
        <div>
            <img src={product.img} alt="" />
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
        </div>
    );
};

export default SinglePage;