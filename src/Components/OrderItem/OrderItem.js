import React from 'react';
import './OrderItem.css';

const OrderItem = props => {
    return (
        <div className='orderItem_container'>
            <b> {props.name} </b>
            <div className="itemInfoBlock">
                <span>x {props.count} </span>
                <span> {props.price} KGS </span>
                <button onClick={props.delete}>X</button>
            </div>
        </div>
    );
};

export default OrderItem;