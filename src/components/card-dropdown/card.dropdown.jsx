import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-Item/cart-item';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {CartDropDown,EmptyMessage,CartItemStyles} from './carddropdown.styles';
import { toggleCartHidden } from '../../redux/cart/cart.action';
const CardDropDown = ({collectionItem,history,dispatch}) =>  (
    <CartDropDown>
        <CartItemStyles>
            {   
                collectionItem.length ? 
                collectionItem.map(item => <CartItem key={item.id} item={item}/>)
                : (<EmptyMessage>Your cart is empty</EmptyMessage>)
            }
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
              }
            }>GO TOCHECKOUT</CustomButton>
        </CartItemStyles>
    </CartDropDown>
)
const mapStateToProps = createStructuredSelector({
    collectionItem:selectCartItems
})
    
export default withRouter(connect(mapStateToProps)(CardDropDown));