import React from 'react';
import  {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {CartIconStyles,ItemCount,ShoppingCartStyles} from './cartIcon.styles';
const CartIcon = ({toggleCartHidden,itemCount}) => (
    <CartIconStyles onClick={toggleCartHidden}>
        <ShoppingCartStyles>
            <ShoppingIcon/>
        </ShoppingCartStyles>
        <ItemCount>{itemCount}</ItemCount>
    </CartIconStyles>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCount
})
    
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);