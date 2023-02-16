
import React, { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import Card from '../../components/Card/Card';

const HomePage = () => {
    const { clothes, addBasket } = useContext(CustomContext)
    return (
        <div className='shop__wrapper'>
            <div className='cards'>
                {
                    clothes.map(el => (
                        <Card item={el}/>
                    ))
                }
            </div>
        </div>

    );
};

export default HomePage;