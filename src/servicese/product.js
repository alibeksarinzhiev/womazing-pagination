import axios from 'axios';

const URL = 'http://localhost:3004/posts';

const getProducts = () => {
    return axios.get(URL)
}

const createProduct = (newPost) => {
    return axios.post(URL, newPost)
}


export default { getProducts, createProduct }