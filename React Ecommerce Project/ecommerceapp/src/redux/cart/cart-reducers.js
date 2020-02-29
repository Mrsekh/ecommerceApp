/*Cart Reducers*/
import cartActionTypes from './cart-types';
import {addItemToCart} from  './cart.utility';
const INITIAL_STATE = {
    hidden:true,
    collectionItem:[]
}
const cartReducer = (state = INITIAL_STATE,action) => {
  switch(action.type) {
      case cartActionTypes.TOGGLE_CART_ICON : return {
        ...state,
        hidden:!state.hidden
      }
      case cartActionTypes.ADD_ITEM : return {
        ...state,
        collectionItem :addItemToCart(state.collectionItem,action.payload)
      }
      default:return state
  }
}
export default  cartReducer;
