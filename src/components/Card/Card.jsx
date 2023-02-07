import React from 'react';

const Card = ({img, title, price}) => {
    return (
            <div className="card">
                <img src={img} alt="" />
                <p>{title}</p>
                <p>{price}$</p>
            </div>
    );
};

export default Card;