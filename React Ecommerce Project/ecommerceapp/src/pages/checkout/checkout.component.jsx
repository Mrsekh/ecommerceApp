import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
const CheckOut = ({cartItems,totalValue}) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
			{
				cartItems.map(cartItem => <CheckoutItem  key= {cartItem.id} cartItem={cartItem}/>)
			}
			<span className='total'>{`Total Price ${totalValue}`}</span>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems:selectCartItems,
	totalValue:selectCartTotal
})

export default connect(mapStateToProps)(CheckOut);
