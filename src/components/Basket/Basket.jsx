import React, { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import './basket.css'
import {Link} from 'react-router-dom'

const Basket = () => {
    const { basket, plusBasket, minusBasket } = useContext(CustomContext)
    return (
        <section>
            <div className="container">

                {basket.map(el => (
                    <div className='basket__card'>
                        <ul>
                            <li>Товар</li>
                            <Link to={`/product/${el.id}`}>
                            <img src={el.img} alt="" />
                            </Link>
                            <h2>{el.title}</h2>

                        </ul>
                        <ul>
                            <li>Цена</li>
                            <div className="price__wrapper">
                                <p className='basket_text'>{el.price} $</p>
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
                                <p className='basket_text'>{el.price * el.count} $</p>
                            </div>
                        </ul>
                    </div>
                ))}

               <h2>
                   Общая сумма <span>{basket.reduce((acc,rec)=>{
                       return acc+ +rec.price *rec.count
               },0)} $</span>
               </h2>

            </div>
        </section>
    );
};

export default Basket;


