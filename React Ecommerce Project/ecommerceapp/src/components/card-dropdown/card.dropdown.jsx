import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-Item/cart-item';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './card.dropdown.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
const CardDropDown = ({collectionItem,history,dispatch}) =>  (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   
                collectionItem.length ? 
                collectionItem.map(item => <CartItem key={item.id} item={item}/>)
                : (<span className="empty-message">Your cart is empty</span>)
            }
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
              }
            }>GO TOCHECKOUT</CustomButton>
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    collectionItem:selectCartItems
})
    
export default withRouter(connect(mapStateToProps)(CardDropDown));