/* This file contains the root state of the
    app which is maintained by redux
*/
/* combineReducers is used from combining all the reducers 
    to a single object like a redux store which contains the
    whole state of the app
*/
import {combineReducers} from 'redux';
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import userReducer from  './user/user-reducer';
import cartReducer from './cart/cart-reducers';
import directoryReducers from './directory/directory-reducers';
import shopeducers from './shop/shop-reducers';

// configuartion for persist
const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart'] // whitelist is used to specify what we need to persist in local storage
}
export const rootReducers =  combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducers,
    shop:shopeducers
});
export const persistReducers = persistReducer (persistConfig,rootReducers);