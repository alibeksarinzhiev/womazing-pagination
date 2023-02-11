import React, { useContext } from 'react';
import { CustomContext } from '../../utils/Context';

const HomePage = () => {
    const {clothes,addBasket} = useContext(CustomContext)
    return (
        <div>
         {
            clothes.map(el=>(
                <div className='one__clothes'>
                    <h2>{el.title}</h2>
                    <img src={el.img} alt={el.title}/>
                    <p>{el.price}</p>
                    <button onClick={()=>addBasket(el)}>В корзину</button>
                    

                </div>
            ))
         }
        </div>
    );
};

export default HomePage;