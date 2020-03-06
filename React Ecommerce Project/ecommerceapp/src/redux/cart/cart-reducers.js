/*Cart Reducers*/
import cartActionTypes from './cart-types';
import {addItemToCart,removeItem} from  './cart.utility';
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
      case cartActionTypes.REMOVE_ITEM:return{
        ...state,
        collectionItem:removeItem(state.collectionItem,action.payload)
      }
      case cartActionTypes.CLEAR_ITEM_FROM_CART : return{
        ...state,
        collectionItem:state.collectionItem.filter(cartItem => 
          cartItem.id !== action.payload.id
        )
      }
      default:return state
  }
}
export default  cartReducer;
