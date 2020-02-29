import cartActionTypes from './cart-types';
// toggle the cart component
export const toggleCartHidden = () => ({
    type:cartActionTypes.TOGGLE_CART_ICON 
})

// adding the item
export const addItem = (item) => ({
    type:cartActionTypes.ADD_ITEM,
    payload:item
})