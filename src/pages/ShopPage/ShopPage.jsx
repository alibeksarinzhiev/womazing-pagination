import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img from '../../images/img1.png'
import './shoppage.css'

const ShopPage = () => {

    const URL = "http://localhost:3004/posts"

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(URL)
            .then(res => setData(res.data))
    }, [])

    console.log(data);

    return (
        <div className='shop__wrapper'>
            <p>Показано: 9 из 12 товаров</p>
            <div className="cards">
                {/* <img src={img} alt="" />
                    <p>Футболка USA</p>
                    <p>$229</p> */}
                {data.map(item => {
                    return (
                        <div className="card">
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    )
                })}

                {/* ctrl + c = y */}

                {/* <div className="card">
                    <img src={img} alt="" />
                    <p>Футболка USA</p>
                    <p>$229</p>
                </div>
                <div className="card">
                    <img src={img} alt="" />
                    <p>Футболка USA</p>
                    <p>$229</p>
                </div> */}
            </div>
        </div>
    );
};

export default ShopPage;