import React from 'react';

const SingleCard = ({title,price,img}) => {
    return (
        <div className='single__card'>
            <div className="card__img">
                <img src={img} alt="" />
            </div>
            <div className="card__descr">
                <h1>{title}</h1>
                <h1>{price}</h1>
            </div>
        </div>
    );
};

export default SingleCard;