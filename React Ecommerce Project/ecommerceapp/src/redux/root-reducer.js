/* This file contains the root state of the
    app which is maintained by redux
*/
/* combineReducers is used from combining all the reducers 
    to a single object like a redux store which contains the
    whole state of the app
*/
import {combineReducers} from 'redux';
import userReducer from  './user/user-reducer';
import cartReducer from './cart/cart-reducers';
export default combineReducers({
    user:userReducer,
    cart:cartReducer
});