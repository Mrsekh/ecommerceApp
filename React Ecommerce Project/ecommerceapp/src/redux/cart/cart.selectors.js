import {createSelector} from 'reselect';

// input selector
const selectCart = state => state.cart;

// output selector which uses the input selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.collectionItem
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
) 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity,cartItemQuantity) => accumulatedQuantity + cartItemQuantity.quantity
    ,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity,currentItem) => accumulatedQuantity + (currentItem.price * currentItem.quantity)
    ,0)
)