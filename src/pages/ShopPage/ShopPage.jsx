import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './shoppage.css'

const ShopPage = () => {

    const URL = "http://localhost:3004/posts"

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(URL)
            .then(res => setData(res.data))
    }, [])

    return (
        <div className='shop__wrapper'>
            <p>Показано: 9 из 12 товаров</p>
            <div className="cards">
                {data.map(item =>
                (
                    <Link className='card' to={`/product/${item.id}`}>
                        <Card title={item.title} price={item.price} img={item.img} key={item.id} />
                    </Link>
                )
                )}
            </div>
        </div>
    );
};

export default ShopPage;