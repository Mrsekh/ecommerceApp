import React from 'react';
import './cart-item.styles.scss';
const CartItem = ({item :{quantity,price,imageUrl,name}}) => (
    <div className="cart-item">
    <img className="" src={imageUrl} alt="item"/>>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x {price}
            </span>
        </div>
    </div>
)

export default CartItem;