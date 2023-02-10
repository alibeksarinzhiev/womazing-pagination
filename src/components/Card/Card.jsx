import React from 'react';

const Card = ({ img, title, price }) => {
    return (
        <>
            <img src={img} alt="" />
            <p>{title}</p>
            <p>{price}$</p>
        </>
    );
};

export default Card;