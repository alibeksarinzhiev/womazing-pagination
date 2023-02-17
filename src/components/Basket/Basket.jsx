import React, { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import './basket.css'

const Basket = () => {
    const { basket, plusBasket, minusBasket } = useContext(CustomContext)
    return (
        <section>
            <div className="container">

                {basket.map(el => (
                    <div className='basket__card'>
                        <ul>
                            <li>Товар</li>

                            <img src={el.img} alt="" />
                            <h2>{el.title}</h2>

                        </ul>
                        <ul>
                            <li>Цена</li>
                            <div className="price__wrapper">
                                <p className='basket_text'>{el.price}</p>
                            </div>
                        </ul>
                        <ul>
                            <li>Количество</li>
                            <div className="count__wrapper">
                                <p className='basket_text'>{el.count}</p>
                            </div>
                            <div className="buttons">
                                <button onClick={() => plusBasket(el.id)} type='button'>+</button>
                                <button onClick={() => minusBasket(el.id)} type='button'>-</button>
                            </div>
                        </ul>

                        <ul>
                            <li>Всего</li>
                            <div className="total__wraper">
                                <p className='basket_text'>{el.price * el.count}</p>
                            </div>
                        </ul>
                    </div>
                ))}

                {/* <h2>
                    {basket.reduce((acc, el) => acc + +el.price, 0)}
                </h2> */}

            </div>
        </section>
    );
};

export default Basket;


