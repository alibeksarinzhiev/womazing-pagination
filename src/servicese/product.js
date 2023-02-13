import React, { useEffect } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3004/posts';

const getProducts = () => {
    return axios.get(URL)
}

const createProduct = (newPost) => {
    axios.post(URL, newPost)
}

const deleteProduct = () => {
    axios.post(URL)
}


export default { getProducts, createProduct, deleteProduct }