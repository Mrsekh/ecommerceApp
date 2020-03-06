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

// clear the cart Item
export const clearCart = (item) =>( {
    type:cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItem = (item) => ({
    type:cartActionTypes.REMOVE_ITEM,
    payload:item
})