import React from 'react';
import {connect} from 'react-redux';
import {clearCart,addItem,removeItem} from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';
const CheckoutItem = ({cartItem,clearItem,addQuantity,removeQuantity}) =>  {
    const {imageUrl,name,price,quantity} = cartItem;
    return( 
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={() => removeQuantity(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addQuantity(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)} >&#10005;</div>
    </div>    
)}

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearCart(item)),
    addQuantity: (item) => dispatch(addItem(item)),
    removeQuantity: (item) => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);