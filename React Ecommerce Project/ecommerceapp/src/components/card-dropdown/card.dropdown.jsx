import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-Item/cart-item';
import {connect} from 'react-redux';
import './card.dropdown.scss';
const CardDropDown = ({collectionItem}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                collectionItem.map(item => <CartItem key={item.id} item={item}/>)
            }
            <CustomButton>GO TOCHECKOUT</CustomButton>
        </div>
    </div>
)
const mapStateToProps = ({cart:{collectionItem}}) => ({
    collectionItem
})
export default connect(mapStateToProps)(CardDropDown);