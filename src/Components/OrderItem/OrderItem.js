import React from 'react';
import './OrderItem.css';

const OrderItem = props => {
    return (
        <div className='orderItem_container'>
            <b> {props.name} </b>
            <span>x {props.count} </span>
            <span> {props.price} KGS </span>
            <button onClick={props.delete}>X</button>
        </div>
    );
};

export default OrderItem;