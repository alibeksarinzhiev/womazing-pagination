import React from 'react';
import img from '../../images/img1.png'
import './shoppage.css'

const ShopPage = () => {
    return (
        <div className='shop__wrapper'>
            <p>Показано: 9 из 12 товаров</p>
            <div className="cards">
                <div className="card">
                    <img src={img} alt="" />
                    <p>Футболка USA</p>
                    <p>$229</p>
                </div>

                <div className="card">
                <img src={img} alt="" />
                    <p>Футболка USA</p>
                    <p>$229</p>
                </div>
                <div className="card">
                    <img src={img} alt="" />
                    <p>Футболка USA</p>
                    <p>$229</p>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;