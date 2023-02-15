import React, { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import './basket.css'

const Basket = () => {
    const {basket} = useContext(CustomContext)
    return (
        <section className='basket'>
            <div className="container">
                <ul>
                    <li>товар</li>
                    <li>цена</li>
                    <li>кол-во</li>
                    <li>Всего</li>
                </ul>
                <h2>
                {/* {basket.reduce((acc, el) => acc + el.price, 0)} */}
                </h2>
                {basket.map(el=>(
                    <div>
                        <img src={el.img} alt="" />
                        <h2>{el.title}</h2>
                        <p>{el.price}</p>
                    </div>
                ))}
              

            </div>
        </section>
    );
};

export default Basket;