import React from 'react';
import './MenuItem.css';

const MenuItem = props => {
    return (
        <div className='menuItem_container' onClick={props.add}>
            <img className='menuItem_image' src={props.image} alt="img"/>
            <div>
                <h5>{props.name}</h5>
                <p>Price: {props.price} KGS</p>
            </div>
        </div>
    );
};

export default MenuItem;