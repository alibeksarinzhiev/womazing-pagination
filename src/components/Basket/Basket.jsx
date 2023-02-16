import React, { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import './basket.css'

const Basket = () => {
    const {basket,plusBasket,minusBasket} = useContext(CustomContext)
    return (
        <section>
            <div className="container">
                <ul className='basket__lists'>
                    <li>товар</li>
                    <li>цена</li>
                    <li>кол-во</li>
                    <li>Всего</li>
                </ul>
                
                {basket.map(el=>(
                    <div className='basket__card'>
                        <div>
                        <img src={el.img} alt="" />
                        <h2>{el.title}</h2>
                        </div>
                        <p>{el.price}</p>
                        <p> <button onClick={()=>minusBasket(el.id)} type='button'>-</button>
                            
                            {el.count}</p>
                            <button onClick={()=>plusBasket(el.id)} type='button'>+</button>
                        <p>{el.price * el.count}</p>
                    </div>
                ))}
                <h2>
                {basket.reduce((acc, el) => acc + +el.price, 0)}
                </h2>
              

            </div>
        </section>
    );
};

export default Basket;


